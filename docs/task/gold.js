const cheerio = require("cheerio");
const superagent = require("superagent");
const CONSTANT = require("./constant");
const utils = require("./utils");

const { GoldMap: {
  icons,
  iconsSilver
} } = CONSTANT;

const {
  dateFormater,
  getNowSeconds,
  writeMdFile
} = utils;

const fetch = (url, method, params, data, cookies) => {
  return new Promise(function (resolve, reject) {
    superagent(method, url)
      .query(params)
      .send(data)
      .end(function (err, response) {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
  });
};

const createGoldMd = (list) => {
  const Time = dateFormater("YYYY-MM-DD hh:mm:ss", getNowSeconds());

  const mdContent = `<div style="max-width:600px; margin:0 auto; border:2px solid #00f7ff33; border-radius:12px; box-shadow:0 0 30px rgba(0,247,255,0.1);">
  <!-- 标题 -->
  <div style="padding:25px 20px; border-bottom:2px solid #00f7ff;">
      <h1 style="margin:0; color:#00f7ff; font-size:32px; text-align:center; font-weight:800; letter-spacing:2px; text-shadow:0 0 15px #00f7ff80;">
          🚀 GOLD MARKET PULSE
      </h1>
  </div>
  <!-- 行情表格 -->
  <div style="padding:20px 15px;">
    ${list
  .map((item, i) => {
    const titleColor = getRandomColor();
    const textColor = getRandomColor();
    const isBrand = item.isBrand;
    let icon = '';
    if (isBrand) {
      icon = item.img;
    } else {
      icon = item.name.indexOf('金') > -1 ? icons[icons.length - 1] : iconsSilver[0];
    }
    return `<div style="margin-bottom:15px; padding:15px; background:#00122e; border:1px solid #00f7ff33; border-radius:8px;">
      <div style="display:flex; align-items:center; margin-bottom:10px; border-bottom:1px solid #00f7ff33; padding-bottom:8px;">
        <img src="${icon}" style="width:32px; height:32px; margin-right:12px;">
        <span style="font-size:18px; font-weight:700;">${item.name}</span>
      </div>
      <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;">
          <div>
              <span style="color:${titleColor}; font-size:16px; font-weight:600;">${isBrand ? '零售价' : '交易价格'}</span>
              <div style="color:${textColor}; font-size:22px; font-weight:700;">${
                isBrand ? 
                `${item.salePrice}元/克` : 
                `${item.price} <span style="color: #888888; font-size: 16px">${item.unit}</span>`
              }</div>
          </div>
          <div>
              <span style="color:${titleColor}; font-size:16px; font-weight:600;">${isBrand ? '换购价' : '换算价格'}</span>
              <div style="color:${textColor}; font-size:22px; font-weight:700;">${
                isBrand ? 
                `${item.backPrice}元/克` : 
                `${item.convertPrice} <span style="color: #888888; font-size: 16px">${item.convertUnit}</span>`
              }</div>
          </div>
          <div>
              <span style="color:${titleColor}; font-size:12px;">更新时间</span>
              <div style="font-size:22px; font-weight:700;">${item.time}</div>
          </div>
      </div>
    </div>`;
  })
  .join("")}        
  </div>
  <!-- 页脚 -->
  <div style="padding:20px; border-top:2px solid #00f7ff33; text-align:center;">
      <p style="margin:0; color:#fffc00; font-size:14px; line-height:1.6;">
          ⚡ 数据更新：${Time}<br>
          © 2025 · 实时行情追踪
      </p>
  </div>
</div>`;

  writeMdFile('gold', mdContent);
};

const getGoldTrendInfo = async () => {
  const url = 'https://www.ip138.com/gold/';
  const res = await fetch(url, 'GET');
  const $ = cheerio.load(res.text);

  const trendTable = $('.table-inner')[0];
  const trendList = []
  $(trendTable).find('tbody tr').each(function (i, ele) {
    const line = $(ele).find('td');
    trendList.push({
      name: $(line[0]).find('span').text(),
      img: $(line[0]).find('img').attr('src') || '',
      salePrice: $(line[1]).text(),
      backPrice: $(line[2]).text(),
      time: $(line[3]).text(),
      isBrand: true
    })
  });

  const secondTable = $('.table-inner')[1];
  const secondList = []
  $(secondTable).find('tbody tr').each(function (i, ele) {
    const line = $(ele).find('td');
    secondList.push({
      name: $(line[0]).text(),
      price: $(line[1]).find('.value').text() || '',
      unit: $(line[1]).find('.unit').text() || '',
      convertPrice: $(line[2]).find('.value').text() || '',
      convertUnit: $(line[2]).find('.unit').text() || '',
      time: $(line[3]).text(),
      isBrand: false
    })
  });
  if (secondList.length > 0) {
    createGoldMd([...trendList, ...secondList]);
  }
};

getGoldTrendInfo();