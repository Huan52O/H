const axios = require("axios");
const CONSTANT = require("./constant");
const utils = require("./utils");

const {
  StockMap: {
    MarketUrl,
    MarketHistoryUrl,
    DeviceInfo,
    ProductId,
    UserAgent,
    upColorMap,
    zeroColorMap,
    downColorMap
  }
} = CONSTANT;

const {
  dateFormater,
  getNowSeconds,
  writeMdFile
} = utils;

const getStockInfo = (url, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      data: params,
      headers: {
        'deviceinfo': DeviceInfo,
        'productid': ProductId,
        'User-Agent': UserAgent
      }
    }).then((res) => {
      if (res.data) {
        resolve(res.data);
      } else {
        resolve([]);
      }
    })
      .catch((error) => {
        reject(error);
      });
  })
};

const calculateHeights = (data, referenceHeight = 290) =>{
  // 找出最大的stockNum值作为基准
  const maxStockNum = Math.max(...data.map(item => item.stockNum));
  
  // 计算每个区间的高度
  return data.map(item => {
    // 根据最大stockNum计算比例高度，最高为290px
    const height = Math.round((item.stockNum / maxStockNum) * referenceHeight);
    
    return {
      ...item,
      height: height
    };
  });
};

const sendStockMarketInfo = (data) => {
  const { base, history } = data;
  const { stock, temperature } = base;
  const { buckets } = stock;
  const Time = dateFormater("YYYY-MM-DD hh:mm:ss", getNowSeconds());

  const areaList = calculateHeights(buckets).reverse();  

  const upList = areaList.filter(b => b.lookRise == 1)
  const zeroList = areaList.filter(b => b.lookRise == 0)
  const downList = areaList.filter(b => b.lookRise == -1)
  console.log({areaList});

  const mdContent = `<div style="margin:0;padding:10px 5px;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;">
  <div style="margin:0 auto;margin-bottom:10px;border-radius:16px;padding:10px;box-shadow:0 8px 24px rgba(0,0,0,0.08);">
    <div style="display:flex;flex-direction:column;gap:20px;">
      <div style="height:350px;display:flex;align-items:flex-end;justify-content:space-around;border-bottom:2px solid #e0e0e0;">
        ${downList.map(item => {
          return `<div style="width:8%;text-align:center;">
                    <div style="height:${item.height}px;background:${downColorMap[item.name]['color']};border-radius:4px 4px 0 0;transition:all 0.3s ease;
                        box-shadow:0 4px 12px ${downColorMap[item.name]['shadow']};position:relative;">
                        <span style="position:absolute;top:-24px;left:50%;transform:translateX(-50%);font-size:12px;color:#218c74;font-weight:600;display:inline-block;width:30px;">${item.stockNum}</span>
                    </div>
                    <p style="font-size:10px;color:#333;margin:8px 0;">${item.name}</p>
                  </div>`
        }).join('')}
        ${zeroList.map(item => {
          return `<div style="width:8%;text-align:center;">
                    <div style="height:${item.height}px;background:${zeroColorMap[item.name]['color']};border-radius:4px 4px 0 0;transition:all 0.3s ease;
                        box-shadow:0 4px 12px ${zeroColorMap[item.name]['shadow']};position:relative;">
                        <span style="position:absolute;top:-24px;left:50%;transform:translateX(-50%);font-size:12px;color:#218c74;font-weight:600;display:inline-block;width:30px;">${item.stockNum}</span>
                    </div>
                    <p style="font-size:10px;color:#333;margin:8px 0;">${item.name}</p>
                  </div>`
        }).join('')}
        ${upList.map(item => {
          return `<div style="width:8%;text-align:center;">
                    <div style="height:${item.height}px;background:${upColorMap[item.name]['color']};border-radius:4px 4px 0 0;transition:all 0.3s ease;
                        box-shadow:0 4px 12px ${upColorMap[item.name]['shadow']};position:relative;">
                        <span style="position:absolute;top:-24px;left:50%;transform:translateX(-50%);font-size:12px;color:#218c74;font-weight:600;display:inline-block;width:30px;">${item.stockNum}</span>
                    </div>
                    <p style="font-size:10px;color:#333;margin:8px 0;">${item.name}</p>
                  </div>`
        }).join('')}
      </div>
      <div style="padding:0 20px;font-size:12px;display:flex;justify-content:space-between;">
        <span>数量（家）</span>
        <span>涨跌区间</span>
      </div>
    </div>
  </div>
  <div style="margin:0 auto;margin-bottom:10px;border-radius:20px;padding:20px;
      box-shadow:0 12px 32px rgba(0,0,0,0.08);">  
      <div style="display:flex;flex-wrap:wrap;gap:24px;justify-content:center;align-items:center;">
        <div style="position:relative;width:24px;height:200px;background:#e9edf2;border-radius:12px;overflow:hidden;">
          <div style="position:absolute;bottom:0;width:100%;height:${parseInt(temperature)}%;background:linear-gradient(180deg,#ff4757 20%,#ff6b81 80%);
            border-radius:12px;transition:height 0.5s ease-in-out;box-shadow:0 0 12px rgba(255,71,87,0.3);">
          </div>
          <div style="position:absolute;top:0;left:0;width:100%;height:100%;">
            <div style="position:absolute;top:10%;left:-8px;width:8px;height:1px;background:#99aab5;"></div>
            <div style="position:absolute;top:30%;left:-8px;width:8px;height:1px;background:#99aab5;"></div>
            <div style="position:absolute;top:50%;left:-8px;width:8px;height:1px;background:#99aab5;"></div>
            <div style="position:absolute;top:70%;left:-8px;width:8px;height:1px;background:#99aab5;"></div>
            <div style="position:absolute;top:90%;left:-8px;width:8px;height:1px;background:#99aab5;"></div>
          </div>
        </div>
        <div style="min-width:200px;">
          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="display:flex;align-items:center;gap:12px;">
              <span style="font-size:14px;font-weight:500;">总计家数</span>
              <span style="font-size:24px;font-weight:800;">${stock.total}</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
              <span style="font-size:14px;font-weight:500;">停牌家数</span>
              <span style="font-size:24px;font-weight:800;">${stock.stopped}</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;">
              <span style="font-size:14px;font-weight:500;">市场热度</span>
              <span style="font-size:24px;font-weight:800;
                  background:linear-gradient(135deg,#ff4757 30%,#ff6b81 70%);-webkit-background-clip:text;color:transparent;">
                  ${temperature}℃
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style="margin:24px 0;border-bottom:2px solid #f0f2f5;"></div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(150px,1fr));gap:16px;">
        <div style="background:rgba(255,71,87,0.06);border-radius:12px;padding:16px;text-align:center;">
            <p style="font-size:14px;color:#ff4757;margin:0 0 8px 0;font-weight:500;">上涨家数</p>
            <p style="font-size:28px;font-weight:800;color:#ff4757;margin:0;letter-spacing:-1px;">${stock.up}</p>
        </div>
        <div style="background:rgba(255,71,87,0.06);border-radius:12px;padding:16px;text-align:center;">
            <p style="font-size:14px;color:#ff4757;margin:0 0 8px 0;font-weight:500;">涨停家数</p>
            <p style="font-size:28px;font-weight:800;color:#ff4757;margin:0;letter-spacing:-1px;">${stock.zt}</p>
        </div>
        <div style="background:rgba(255,71,87,0.06);border-radius:12px;padding:16px;text-align:center;">
            <p style="font-size:14px;color:#ff4757;margin:0 0 8px 0;font-weight:500;">涨幅&gt;5%</p>
            <p style="font-size:28px;font-weight:800;color:#ff4757;margin:0;letter-spacing:-1px;">${stock.up5p}</p>
        </div>
        <div style="background:rgba(46,213,115,0.06);border-radius:12px;padding:16px;text-align:center;">
            <p style="font-size:14px;color:#2ed573;margin:0 0 8px 0;font-weight:500;">下跌家数</p>
            <p style="font-size:28px;font-weight:800;color:#2ed573;margin:0;letter-spacing:-1px;">${stock.down}</p>
        </div>
        <div style="background:rgba(46,213,115,0.06);border-radius:12px;padding:16px;text-align:center;">
            <p style="font-size:14px;color:#2ed573;margin:0 0 8px 0;font-weight:500;">跌停家数</p>
            <p style="font-size:28px;font-weight:800;color:#2ed573;margin:0;letter-spacing:-1px;">${stock.dt}</p>
        </div>
        <div style="background:rgba(46,213,115,0.06);border-radius:12px;padding:16px;text-align:center;">
            <p style="font-size:14px;color:#2ed573;margin:0 0 8px 0;font-weight:500;">跌幅&gt;5%</p>
            <p style="font-size:28px;font-weight:800;color:#2ed573;margin:0;letter-spacing:-1px;">${stock.down5p}</p>
        </div>
      </div>
  </div>
  <div style="margin:0 auto;border-radius:20px;padding:0 5px;
      box-shadow:0 12px 32px rgba(0,0,0,0.08);">
      <div style="display:grid;grid-template-columns:2fr repeat(6,1fr);gap:8px;padding:10px 4px;
          border-bottom:2px solid #f0f2f5;font-weight:600;font-size:14px;">
          <div style="text-align:center;">日期</div>
          <div style="text-align:center;">涨停数量</div>
          <div style="text-align:center;">涨停环比</div>
          <div style="text-align:center;">跌停数量</div>
          <div style="text-align:center;">跌停环比</div>
          <div style="text-align:center;">交易额(亿)</div>
          <div style="text-align:center;">交易环比</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:16px;">
        ${history.map(item => {
          return `<div style="display:grid;grid-template-columns:2fr repeat(6,1fr);gap:8px;padding:10px 4px;
                      border-radius:12px;background:rgba(255,71,87,0.03);transition:all 0.3s ease;">
                      <div style="text-align:center;font-size:14px;">${item.tradeDate}</div>
                      <div style="text-align:center;font-size:14px;font-weight:600;color:#ff4757;">${item.upLimitCount}</div>
                      <div style="text-align:center;font-size:14px;color:#${item.upIncrRatio > 0 ? 'ff4757' : '2ed573'};">
                          <i class="fa fa-arrow-up" style="margin-right:4px;"></i>${item.upIncrRatio > 0 ? '+' : ''}${(item.upIncrRatio * 100).toFixed(2)}%
                      </div>
                      <div style="text-align:center;font-size:14px;font-weight:600;color:#2ed573;">${item.downLimitCount}</div>
                      <div style="text-align:center;font-size:14px;color:#${item.downIncrRatio > 0 ? 'ff4757' : '2ed573'};">
                          <i class="fa fa-arrow-down" style="margin-right:4px;"></i>${item.downIncrRatio > 0 ? '+' : ''}${(item.downIncrRatio * 100).toFixed(2)}%
                      </div>
                      <div style="text-align:center;font-size:14px;">${(item.marketAmount / 100000000).toFixed(2)}</div>
                      <div style="text-align:center;font-size:14px;color:#${item.marketAmountIncrRatio > 0 ? 'ff4757' : '2ed573'};">
                          <i class="fa fa-arrow-up" style="margin-right:4px;"></i>${item.marketAmountIncrRatio > 0 ? '+' : ''}${(item.marketAmountIncrRatio * 100).toFixed(2)}%
                      </div>
                  </div>`
        }).join('')}
      </div>
  </div>
  <div style="text-align:center;margin-top:30px;color:#999;font-size:12px;">
    <p style="margin:4px 0;">© 2025 数据观察</p>
    <p style="margin:4px 0;">更新时间：${Time}</p>
  </div>
</div>`;
  
  writeMdFile('stock', mdContent);
};

const runStockTask = async () => {
  const res = await getStockInfo(MarketUrl, {})
  const resHistory = await getStockInfo(MarketHistoryUrl, {yearMonth: ''});
  const info = {
    base: res.data,
    history: resHistory.data.list
  };
  sendStockMarketInfo(info)
};

runStockTask();