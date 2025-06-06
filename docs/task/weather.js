const cheerio = require("cheerio");
const superagent = require("superagent");
const utils = require("./utils");
const CONSTANT = require("./constant");

const {
  dateFormater,
  getNowSeconds,
  writeMdFile
} = utils;

const {
  WeatherMap: {
    mojiUrl,
    EmojiMap,
    Citys
  }
} = CONSTANT;

const fetch = (url, method, params, data, cookies) => {
  return new Promise(function (resolve, reject) {
    superagent(method, url)
      .query(params)
      .send(data)
      .set("Content-Type", "application/x-www-form-urlencoded")
      .end(function (err, response) {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
  });
};

const getWeather = async (city, location) => {
  //获取墨迹天气
  let url = mojiUrl + city + "/" + location;
  let res = await fetch(url, "GET");
  let $ = cheerio.load(res.text);

  let addressText = $(".search_default")
    .text()
    .trim()
    .split("， ")
    .reverse()
    .join("-");
  let weatherTip = $(".wea_tips em").text();

  const now = $(".wea_weather.clearfix");

  let nowInfo = {
    Temp: now.find("em").text(),
    WeatherText: now.find("b").text(),
    FreshText: now.find(".info_uptime").text(),
    Humidity: $(".wea_about.clearfix").find("span").text(),
    Wind: $(".wea_about.clearfix").find("em").text(),
  };

  let threeDaysData = [];

  $(".forecast .days").each(function (i, elem) {
    const SingleDay = $(elem).find("li");
    threeDaysData.push({
      Day: $(SingleDay[0])
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      WeatherImgUrl: $(SingleDay[1]).find("img").attr("src"),
      WeatherText: $(SingleDay[1])
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      Temperature: $(SingleDay[2])
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      WindDirection: $(SingleDay[3])
        .find("em")
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      WindLevel: $(SingleDay[3])
        .find("b")
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      Pollution: $(SingleDay[4])
        .text()
        .replace(/(^\s*)|(\s*$)/g, ""),
      PollutionLevel: $(SingleDay[4]).find("strong").attr("class"),
    });
  });

  return {
    moji: {
      addressText,
      weatherTip,
      nowInfo,
      threeDaysData,
    },
  };
};

const runTask = async () => {
  const email = process.env.EMAIL_NAME;
  console.log("Email:", email); 
  const list = [];
  for (const city of Citys) {
    const { firstName, lastName } = city;
    try {
      const res = await getWeather(firstName, lastName);
      list.push(res);
    } catch (error) {
      console.log(`获取【${firstName}-${lastName}】异常`)
    }
  };
  console.log(`city number: ${list.length}`);
  if (list.length > 0) {
    createMd(list)
  }
};

const createMd = (data) => {
  const configs = [
    {
      opacity: '0.1',
      scale: 1
    },
    {
      opacity: '0.25',
      scale: 1.05
    },
    {
      opacity: '0.1',
      scale: 1
    },
  ];

  const Time = dateFormater('YYYY-MM-DD HH:mm:ss', getNowSeconds());
  
  const mdContent = `<div style="background: linear-gradient(135deg, #1a1f2b, #0d111a); color: #ffffff; line-height: 1.6; box-sizing: border-box; font-family: 'Segoe UI', -apple-system, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px 10px;">
  <header style="text-align: right; border-bottom: 2px solid rgba(76, 130, 255, 0.2);">
    <h1 style="font-size: 2.8em; font-weight: 700; background: linear-gradient(45deg, #00f2fe, #7b61ff); -webkit-background-clip: text; display: inline-block; transform: skewX(-10deg);">🌤️ 未来气象站</h1>
  </header>    
  ${data.map(city => {
    const {
      moji: {
        addressText,
        weatherTip,
        nowInfo,
        threeDaysData
      }
    } = city;

    const threeDays = threeDaysData.map((item, i) => {
      return {
        Day: item.Day,
        WeatherText: item.WeatherText,
        Temperature: item.Temperature,
        Pollution: item.Pollution,
        opacity: configs[i]['opacity'],
        scale: configs[i]['scale']
      }
    });
    return `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px; position: relative;">
    <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: 20px; backdrop-filter: blur(10px); grid-column: 1 / 3;">
      <div style="font-size: 2.4em; font-weight: 300; margin-bottom: 15px;">${addressText.split('-')[2]}</div>
      <div style="font-size: 4.2em; font-weight: 600; margin: 20px 0; position: relative;">${nowInfo.Temp}<span style="font-size: 0.4em; vertical-align: super;">°C</span></div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
        <div style="display: flex; align-items: center; padding: 12px; background: rgba(255,255,255,0.03); border-radius: 8px;">🌡️ 体感：${weatherTip}</div>
        <div style="display: flex; align-items: center; padding: 12px; background: rgba(255,255,255,0.03); border-radius: 8px;">💧 湿度：${nowInfo.Humidity.split('湿度')[1].trim()}</div>
        <div style="display: flex; align-items: center; padding: 12px; background: rgba(255,255,255,0.03); border-radius: 8px;">🍃 风向：${nowInfo.Wind}</div>
        <div style="display: flex; align-items: center; padding: 12px; background: rgba(255,255,255,0.03); border-radius: 8px;">🌞 天气：${nowInfo.WeatherText}</div>
      </div>
    </div>
  </div>   
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 40px;">
    ${threeDays.map(item => {
      return `<div style="background: rgba(255,255,255,${item.opacity}); border-radius: 12px; padding: 25px; text-align: center; transform: scale(${item.scale}); display: flex; flex-direction: column; justify-content: space-evently;">
                <div style="font-size:1.2em;margin-bottom:15px;">📅 ${item.Day}</div>
                <div style="font-size:2em;">${item.Temperature.split('°').join('')}<span style="font-size: 0.4em; vertical-align: super;">°C</span></div>
                <div style="color:#aab2c0;margin-top:8px;">${item.Pollution}</div>
                <div style="margin-top:15px;">${EmojiMap[item.WeatherText]} ${item.WeatherText}</div>
              </div>`
    }).join('')}
  </div>`
  })}   
  <footer style="text-align: center; padding: 40px 0 20px; color: #6d7a8f; font-size: 0.9em;">
    <p>© 2025 气象数据服务中心</p>
    <p>更新时间：${Time}</p>
    <p style="margin-top:8px">数据来源：中国气象局</p>
  </footer>
</div>`;

  writeMdFile('weather', mdContent);
};

runTask();