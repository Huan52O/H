const axios = require("axios");
const Base64 = require("crypto-js/enc-base64");
const HmacSHA256 = require("crypto-js/hmac-sha256");
const CONSTANT = require('./constant');
const utils = require('./utils');

const {
  ProcessEnv,
  OkxInfo,
  CoinMap
} = CONSTANT;

const {
  PASSPHRASE,
  APIKEY,
  SECRETKEY
} = ProcessEnv;

const {
  domain,
  timeUrl,
  exchangeRateUrl,
  tickerUrl,
  urlObj
} = OkxInfo;

const {
  dateFormater,
  getNowSeconds,
  writeMdFile
} = utils;

// 统一接口处理
const getOkxApiData = async (params) => {
  const { url, sign, isoDate, isArrRes, errDesc } = params;
  const requestUrl = domain + url;
  return new Promise((resolve, reject) => {
    axios
      .get(
        requestUrl,
        sign
          ? {
            headers: {
              "OK-ACCESS-KEY": APIKEY,
              "OK-ACCESS-SIGN": sign,
              "OK-ACCESS-TIMESTAMP": isoDate,
              "OK-ACCESS-PASSPHRASE": PASSPHRASE,
            },
          }
          : null
      )
      .then((res) => {
        const data = res.data.data;
        data ? resolve(isArrRes ? data : data[0]) : reject("");
      })
      .catch((err) => {
        console.log(err);
        sendErrorMsg();
      });
  });
};

const queryData = async () => {
  // 获取系统时间
  const t = await getOkxApiData({
    url: timeUrl,
    sign: null,
    isoDate: null,
    isArrRes: 0,
    errDesc: "getServerTime",
  });
  const { ts } = t;
  console.log(t, ts);
  let tDate = new Date(ts * 1);
  let isoDate = tDate.toISOString();
  if (isoDate) {
    Object.keys(urlObj).map((key) => {
      urlObj[key]["sign"] = Base64.stringify(
        HmacSHA256(
          isoDate + urlObj[key]["method"] + urlObj[key]["url"],
          SECRETKEY
        )
      );
    });
    // 获取法币汇率
    // { usdCny: '7.264' }
    const rate = await getOkxApiData({
      url: exchangeRateUrl,
      sign: urlObj["exchangeRateUrl"]["sign"],
      isoDate,
      isArrRes: 0,
      errDesc: "getUsdCny",
    });
    console.log(rate);
    const ethInfo = await getOkxApiData({
      url: `${tickerUrl}?instId=ETH-USDT&instType=SWAP`,
      sign: urlObj["tickerUrl"]["sign"],
      isoDate,
      isArrRes: 0,
      errDesc: "getETHInfo"
    });
    console.log(ethInfo);
    const btcInfo = await getOkxApiData({
      url: `${tickerUrl}?instId=BTC-USDT&instType=SWAP`,
      sign: urlObj["tickerUrl"]["sign"],
      isoDate,
      isArrRes: 0,
      errDesc: 'getBTCInfo'
    });
    console.log(btcInfo);
    const Time = dateFormater('YYYY-MM-DD HH:mm:ss', getNowSeconds());
    if (btcInfo) {
      createMd({
        rate: rate.usdCny,
        coins: [
          btcInfo,
          ethInfo
        ],
        Time
      });
    } 
  }
};

const createMd = (data) => {
  const { rate, coins, Time } = data;

  const mdContent = `<div style="max-width:600px; margin:0 auto; border:2px solid #00f7ff33; border-radius:12px; box-shadow:0 0 30px rgba(0,247,255,0.1);">
  <div style="padding:25px 20px; border-bottom:2px solid #00f7ff;">
    <h1 style="margin:0; color:#00f7ff; font-size:32px; text-align:center; font-weight:800; letter-spacing:2px; text-shadow:0 0 15px #00f7ff80;">
        🚀 CRYPTO MARKET PULSE
    </h1>
  </div>
  <div style="padding:20px 15px;">
    ${coins.map(item => {
      const type = item.instId.split('-')[0]
      const titleColor = CoinMap[type]['title']
      const textColor = CoinMap[type]['text']
      const url = CoinMap[type]['url']
      return `<div style="margin-bottom:15px; padding:15px; border:1px solid #00f7ff33; border-radius:8px;">
      <div style="display:flex; align-items:center; margin-bottom:10px; border-bottom:1px solid #00f7ff33; padding-bottom:8px;">
        <img src="${url}" alt="${item.instId}" style="width:32px; height:32px; margin-right:12px;">
        <span style="font-size:18px; font-weight:700;">${item.instId}</span>
      </div>
      <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;">
          <div>
              <span style="color:${titleColor}; font-size:12px;">最新价</span>
              <div style="color:${textColor}; font-size:24px; font-weight:700;">$${item.last}</div>
          </div>
          <div>
              <span style="color:${titleColor}; font-size:12px;">转换价(${rate})</span>
              <div style="color:${textColor}; font-size:24px; font-weight:700;">￥${(item.last * rate).toFixed(2)}</div>
          </div>
          <div>
              <span style="color:${titleColor}; font-size:12px;">24H量</span>
              <div style="font-size:18px;">${Number(item.vol24h).toFixed(2)} ${type}</div>
          </div>
          <div>
              <span style="color:${titleColor}; font-size:12px;">24H开盘</span>
              <div style="font-size:16px;">$${item.open24h}</div>
          </div>
          <div>
              <span style="color:${titleColor}; font-size:12px;">24H最高</span>
              <div style="font-size:16px;">$${item.high24h}</div>
          </div>
          <div>
              <span style="color:${titleColor}; font-size:12px;">24H最低</span>
              <div style="font-size:16px;">$${item.low24h}</div>
          </div>
          <div>
              <span style="color:${titleColor}; font-size:12px;">UTC 0时</span>
              <div style="font-size:16px;">$${item.sodUtc0}</div>
          </div>
          <div>
              <span style="color:${titleColor}; font-size:12px;">UTC 8时</span>
              <div style="font-size:16px;">$${item.sodUtc8}</div>
          </div>
      </div>
    </div>`
    }).join('')}      
  </div>
  <div style="padding:20px; background:#000716; border-top:2px solid #00f7ff33; text-align:center;">
    <p style="margin:0; color:#fffc00; font-size:14px; line-height:1.6;">
        ⚡ 数据更新：${Time}<br>
        © 2025 CryptoVision · 实时行情追踪
    </p>
  </div>
</div>`;

  writeMdFile('coin', mdContent);
};

queryData();