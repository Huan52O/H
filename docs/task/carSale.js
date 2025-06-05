const axios = require("axios");
const CONSTANT = require('./constant');
const utils = require('./utils');

const {
  CarInfo
} = CONSTANT;

const {
  UserAgent,
  Cookie,
  RankListUrl,
  Token,
  Sort,
  SubLevels,
  Monitor,
  City,
} = CarInfo;

const { 
  dateFormater,
  getNowSeconds,
  writeMdFile
 } = utils;

const getRankListInfo = (code) => {
  const params = {
    token: Token,
    sort: Sort,
    sub_level: code === 404 ? '' : SubLevels[code]['code'],
    new_energy: code === 404 ? 1 : '',
    monitor: Monitor,
    city: encodeURIComponent(City),
  };
  return new Promise((resolve, reject) => {
    axios
      .get(RankListUrl, {
        params: params,
        headers: {
          'User-Agent': UserAgent,
          'Cookie': Cookie
        }
      })
      .then((res) => {
        if (res.data) {
          resolve(res.data.Result);
        } else {
          resolve([]);
        }
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

const rankListTask = async () => {
  const arr = [103, 104, 203, 404];
  const resultList = [];
  for (const code of arr) {
    const res = await getRankListInfo(code)
    const { list, time_list } = res;
    const month = `${time_list[0].year}${time_list[0].name}`;
    resultList.push({
      month,
      code,
      list
    })
  };
  if (resultList.length > 0) {
    createMd(resultList)
  }
};

const createMd = (data) => {
  const Time = dateFormater('YYYY-MM-DD HH:mm:ss', getNowSeconds());

  const month = data[0].month;
  
  const mdContent = `<div style="background:#f5f5f5; font-family: 'Arial Narrow', sans-serif; max-width:600px; margin:0 auto; background:#ffffff; box-shadow:0 2px 15px rgba(0,0,0,0.1);">
  <div style="padding:25px; background:linear-gradient(135deg, #2b2d42, #1a1b2f); text-align:center; border-bottom:3px solid #ef233c;">
      <h1 style="margin:0; color:#fff; font-size:36px; font-weight:800; letter-spacing:2px; text-transform:uppercase;">
          🏎️ ${month}销量榜
      </h1>
  </div>
  <div style="padding:10px 15px 20px;">
    ${data.map(dItem => {
      const list = dItem.list;
      const code = dItem.code;
      return `<div style="margin-bottom:15px; padding:10px; background:#edf2f4; border-left:4px solid #0066cc;">
          <h2 style="margin:0; color:#2b2d42; font-size:20px; font-weight:700;">${SubLevels[code]['name']}</h2>
      </div>
      ${list.map((item, i) => {
        const rankColor = i+1 > 8 ? '#2b2d42' : '#32badd';
        return `<div style="display:flex; flex-wrap:wrap; gap:10px;">
                <div style="flex:1 1 100%; margin-bottom:10px; padding:15px; background:#fff; border:2px solid #edf2f4; border-radius:8px;">
                  <div style="display:flex; align-items:center; gap:12px;">
                    <span style="width:28px; height:28px; background:${rankColor}; color:#fff; border-radius:50%; 
                    display:flex; align-items:center; justify-content:center; font-weight:700;">${i + 1}</span>
                    <img src="${item.white_bg_img}" alt="Lakers" style="width:58px; height:58px; object-fit:contain;">
                    <div style="flex:1;">
                      <div style="font-weight:700; color:#2b2d42;">${item.series_name}</div>
                      <div style="display:flex; gap:15px; margin-top:5px; justify-content:space-between;">
                        <span style="color:#8d99ae;">${item.price}</span>
                        <span style="color:#ef233c; font-weight:700;">${item.text.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
      }).join('')}`
    })} 
  </div>
  <div style="padding:20px; background:#2b2d42; text-align:center;">
      <p style="margin:0; color:#edf2f4; font-size:12px; line-height:1.5;">
          🏁 数据来源：中国汽车工业协会<br>
          © 2025 AutoTrack 更新于：${Time}
      </p>
  </div>
</div>`;

  writeMdFile('car-sale', mdContent);
};

rankListTask();