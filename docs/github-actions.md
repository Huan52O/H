# Github Actions 食用

通过编写工作流进行代码`自动化执行`、`提交`、`部署`，降低人工依赖度，解放双手。

常用于：定时消息推送、邮件发送、静态站点部署、Github Pages、定时爬取数据

## 环境变量

使用环境变量有助于提升安全性，避免关键参数暴露于仓库，例如用户名，邮箱，密码，公钥，私钥等。

在仓库的 `Settings` 目录下选择 `Secrets and variables`，选择 `Actions`，点击 `New repository secret` 新建需要使用的变量和对应值。

### 声明
在项目的工作流文件中添加对应的变量

```yml{14,15}
# workflow.yml
name: workflow
on: 
  workflow_dispatch:

  schedule:
    - cron: "32 0,6 * * *"

jobs:
  start:
    runs-on: ubuntu-latest

    env:
      EMAIL_NAME: ${{ secrets.EMAIL_NAME }}
      EMAIL_PASS: ${{ secrets.EMAIL_PASS }}

    steps:
      - uses: actions/checkout@v2  

      - name: Setup Node.js
        uses: actions/setup-node@v2  
        with:
          node-version: '14'

      - name: npm install
        run: npm install
```

### 引用

在文件中引用变量，例如`NodeJs`中使用`process.env`进行引用。

```js{7,8}
// task.js
const Transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_NAME,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 自动部署前端应用

自动部署有助于提升打包部署便利性，降低人工操作依赖度，节省时间

通过工作流进行仓库自动化打包及部署指定分支

### 工作流示例

```yml:line-numbers
name: autoDeploy
on: 
  workflow_dispatch:

  schedule:
    - cron: "20 1,7 * * *"

jobs:
  start:
    # 运行环境为最新版的Ubuntu
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      #安装node.js
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      # 安装依赖
      - name: npm install
        run: npm install
          
      # 生成静态文件
      - name: Build
        run: npm run docs:build

      # 部署到 GitHub Pages
      - name: Deploy
        # 使用别人写好的一个 action
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这里的 ACCESS_TOKEN 名字需要和下文中的相对应
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          # 打包后的文件部署到哪个分支上
          BRANCH: deploy
          # 打包后的文件在哪里
          FOLDER: docs/.vitepress/dist
```

### Github pages设置

在仓库的`Settings`目录下选择`Pages`，选择需要部署的分支，例如`deploy`，和路径，例如`/`，点击`save`等待工作流执行完成即可。

## 提交文件改动

通过工作流自动进行文件读写操作，并提交代码改动，降低人工干预，解放双手。

### 读取指定路径文件

```js:line-numbers
const OilDataPath = path.join(__dirname, 'constant', 'oilData.json');

const readOilData = () => {
  try {
    return fs.readFileSync(OilDataPath, 'utf-8');
  } catch (error) {
    console.error('读取文件时出错:', error);
    return null;
  }
};
```

### 写入文件到指定路径

```js:line-numbers
const jsonData = JSON.stringify(readOil, null, 2)
fs.writeFile(OilDataPath, jsonData, 'utf-8', (err) => {
  if (err) {
    console.log('写入文件时出错:', err)
  } else {
    console.log('数据已成功写入文件:', OilDataPath)
  }
})
```

### 提交变更

```yml:line-numbers {25-36} 
name: oil
on: 
  workflow_dispatch:
  schedule:
    - cron: "59 0,6 * * *"

jobs:
  start:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4 

      - name: Setup Node.js
        uses: actions/setup-node@v4  
        with:
          node-version: '20'

      - name: npm install
        run: npm install
      
      - name: Start task
        run: node docs/task/oil.js
      # 提交并推送修改
      - name: Commit files
        run: |
          git config --local user.email "actions@github.com"
          git config --local user.name "GitHub Action"
          git pull
          git add .
          if git diff --staged --quiet; then
            echo "No changes to commit."
          else   
            git commit -m "update oil.md"
            git push
          fi
```

## Cron表达式

通过设置cron表达式来确定工作流的执行时间，它由5个空格分隔的字段组成，从左到右分别是：分钟、小时、日、月、星期。

### 语法和特殊字符

- 分钟：0到59的整数，可以使用*表示每分钟。
- 小时：0到23的整数，同样可以使用*表示每小时。
- 日：1到31的整数，可以使用*表示每天，或者使用L表示月份的最后一天。
- 月：1到12的整数，或者使用JAN-DEC表示月份。
- 星期：1到7的整数（1=星期日），或者使用SUN-SAT表示星期。可以使用*表示每周的每一天，或者使用?在日和星期字段中表示不指定值。

### 示例和常见用法

- 每5分钟执行一次‌：*/5 * * * *
- ‌每天午夜12点执行‌：0 0 * * *
- 每周一上午8点执行‌：0 8 * * 1
- 每月1号正午执行‌：0 12 1 * *

### 时区

时间均为 UTC 时间，如果需要设置本地时间，需要进行相应的时区转换。例如，UTC时间的0点在北京时间是8点（北京时间比UTC时间快8小时）。