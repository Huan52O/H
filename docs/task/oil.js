const axios = require("axios");
const CONSTANT = require('./constant');
const utils = require('./utils');

const {
  OilInfo
} = CONSTANT;

const {
  OilUrl,
  OilKey,
  OilCity,
  OilMapping
} = OilInfo;

const {  
  dateFormater,
  getNowSeconds,
  writeMdFile
} = utils;

const getOilInfo = () => {
  const params = {
    key: OilKey,
  };
  return new Promise((resolve, reject) => {
    axios
      .get(OilUrl, {
        params: params,
      })
      .then((res) => {
        res.data.error_code === 0 ? resolve(res.data.result) : resolve([])
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const createOilMd = async () => {
  try {
    const result = await getOilInfo();
    const resultGd = result.filter(item => {
      return item.city === OilCity
    })[0];
    const list = [];
    for (const key in OilMapping) {
      if (OilMapping.hasOwnProperty(key)) {
        list.push({
          price: resultGd[key],
          name: OilMapping[key].name,
          flag: OilMapping[key].flag,
          desc: OilMapping[key].desc,
          color: OilMapping[key].color,
        })
      }
    };

    const mdContent = `<div style="margin: 0 auto; border-radius: 20px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); overflow: hidden;">
  <div style="position: relative; background-color: #165DFF; height: 100px; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to right, #165DFF, #3b82f6); opacity: 0.9;"></div>
    <div style="position: absolute; bottom: -20px; left: 0; right: 0; height: 40px; background-color: white; border-radius: 50%;"></div>
    <div style="position: absolute; top: 50%; left: 0; right: 0; transform: translateY(-50%); padding: 0 24px;">
      <h1 style="font-size: clamp(1.5rem, 5vw, 2rem); font-weight: bold; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center; margin: 0;">
        <i class="fa-solid fa-gas-pump" style="margin-right: 8px;"></i>能源信息快报
      </h1>
    </div>
  </div>       
  <div style="padding: 0 24px; margin-top: -16px;">
    <div style="border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); padding: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="font-size: 12px; color: #64748b;">
            <i class="fa-regular fa-calendar" style="margin-right: 4px;"></i>
            <span>${dateFormater('YYYY年MM月DD日', getNowSeconds())}</span>
        </div>
        <div style="font-size: 12px; color: #165DFF; font-weight: 500;">
            <i class="fa-solid fa-clock-rotate-left" style="margin-right: 4px;"></i>
            <span>${dateFormater('HH:mm:ss', getNowSeconds())}</span>
        </div>
      </div>
    </div>
  </div>
  <div style="padding: 0 24px; margin-top: 16px;">
    <h2 style="font-size: 18px; font-weight: 600; margin-bottom: 12px;">油价详情</h2> 
    ${list.map(item => {
      return `<div style="margin-bottom: 16px; transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div style="background-color: rgba(22, 93, 255, 0.05); border-radius: 16px; padding: 16px; display: flex; align-items: center;">
          <div style="background-color: ${item.color}; color: white; border-radius: 50%; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; margin-right: 16px; font-weight: bold;">
              ${item.flag}
          </div>
          <div style="flex: 1;">
              <div style="font-weight: 600;">${item.name}</div>
              <div style="font-size: 12px; color: #64748b;">${item.desc}</div>
          </div>
          <div style="text-align: right;">
              <div style="font-size: 20px; font-weight: bold; color: ${item.color};">¥${item.price}</div>
          </div>
        </div>
      </div>`
    }).join('')}      
  </div>
  <div style="background-color: #1E293B; color: white; padding: 24px; margin-top: 24px;">
    <div style="text-align: center;">
      <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">油价信息快报</div>
      <p style="font-size: 12px; color: #94a3b8; margin-bottom: 16px;">
          每日为您提供最新油价资讯
      </p>
      <div style="font-size: 10px; color: #64748b;">
          <p>© 2025 油价信息快报</p>
          <p style="margin-top: 4px;">本邮件由系统自动发送，请勿回复</p>
      </div>
    </div>
  </div>
</div>`;

    writeMdFile('oil', mdContent);
  } catch (error) {
    console.error(error);
  }
};

createOilMd();