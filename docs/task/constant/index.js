const OilInfo = {
  OilUrl: 'http://apis.juhe.cn/gnyj/query',
  OilKey: 'b8757c3851968e979f533f27fc7969c7',
  OilCity: '广东',
  OilMapping: {
    '92h': { name: '汽油 (92号)', flag: '92#', desc: '日常通勤首选', color: '#165DFF' },
    '95h': { name: '汽油 (95号)', flag: '95#', desc: '高性能发动机适用', color: '#36D399' },
    '98h': { name: '汽油 (98号)', flag: '98#', desc: '高端车辆优选', color: '#FF6B35' },
    '0h': { name: '柴油 (0号)', flag: '0#', desc: '货车、工程机械用', color: '#1E293B' }
  }
};

const OkxInfo = {
  qyweixinUrl: "https://qyapi.weixin.qq.com",
  domain: "https://www.okx.com",
  timeUrl: "/api/v5/public/time",
  balanceUrl: "/api/v5/account/balance?ccy=USDT,ETH",
  positionUrl: "/api/v5/account/positions?instType=SWAP",
  valuationUrl: "/api/v5/asset/asset-valuation?ccy=CNY",
  exchangeRateUrl: "/api/v5/market/exchange-rate",
  tickerUrl: "/api/v5/market/ticker",
  ratioUrl1H:
    "/api/v5/rubik/stat/contracts/long-short-account-ratio?ccy=ETH&period=1H",
  ratioUrl1D:
  "/api/v5/rubik/stat/contracts/long-short-account-ratio?ccy=ETH&period=1D",
  instType: {
    MARGIN: "币币杠杆",
    SWAP: "永续合约",
    FUTURES: "交割合约",
    OPTION: "期权",
  },
  mgnMode: {
    cross: "全仓",
    isolated: "逐仓",
  },
  posSide: {
    long: "双向持仓多头",
    short: "双向持仓空头",
    net: "单向持仓",
  },
  urlObj: {
    balanceUrl: {
      url: '/api/v5/account/balance?ccy=USDT,ETH',
      method: "GET",
    },
    positionUrl: {
      url: '/api/v5/account/positions?instType=SWAP',
      method: "GET",
    },
    valuationUrl: {
      url: '/api/v5/asset/asset-valuation?ccy=CNY',
      method: "GET",
    },
    exchangeRateUrl: {
      url: '/api/v5/market/exchange-rate',
      method: "GET",
    },
    tickerUrl: {
      url: '/api/v5/market/ticker',
      method: "GET",
    },
    ratioUrl1H: {
      url: '/api/v5/rubik/stat/contracts/long-short-account-ratio?ccy=ETH&period=1H',
      method: "GET",
    },
    ratioUrl1D: {
      url: '/api/v5/rubik/stat/contracts/long-short-account-ratio?ccy=ETH&period=1D',
      method: "GET",
    },
  }
};

const CoinMap = {
  'BTC': {
    title: '#00f7ff',
    text: '#00ff88',
    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABNRJREFUWEfFV2tMXEUU/s69d5cFtA8hpbsrFCq2oS1KU8FqwiqmxEeoKcEYjVbQRPkDtBZT//ijiZpoGmvYRa3GmkppbLRNo+IfaqRCtJFHNTzqI7XYUqAtFAmUZV93xszg4sI+7o228SQEwv2+M9+cmfMYgkm7tDcjdYlNLQPgIo4CEHIArACgEjDJwYcA6iNQB+NoSakbvmjGNRmB/O9lbmBBfQcIVQA0I3z4O4F/xkANKbUj3yXiJBTg8zj2cuAls4vGxvH9Np66k+rO+mN9jynA/449T9eVj4l44X9bfI5NoH6FWKW1ZvT0Yn9RArxu52Yi3gIg7Xos/s+RYIZDKUuuvXgy0u8CAdNv2/M0jTrMLE7LVoN7x4DAtGmdBMzoxF2pEZFYIMDrsf9AoCIzHrWN1VALXgA73wZ9sBVssBVQLYAeNKDzPpvVsYmqeyRwXoDP43iTA7sTsZX09WDjAxJiLT8KxXkPuG8C/g/z5f+SnvwabLQHoR43+PRwXFcENNpqR2rnBfjdK9cxUuY8JzBrxeegW9aA/XoU6h3PSSQb7ULg2DYpRogS5mt0GrkC01lR6s5LXTICs277fhBVG7FsNdG7YsOnEOrxQM15EGp+Jfj4GfiPlBq5AogOJdcMP0PcnZvkI+8kAFsiFiWnQ11TDmXtNigrCqKgfPYqKDkNoc59UhD0gKEIW7KSRl6PvYJAc7EzYZS0BBZx/unrgdAs9LNfQcksBqVmzLPFvdB7DyLU+VZCjyqnSvK6HQ1EqDOxtoSoqx+C5ZED8m994DCCbbtBN98KJdMFJcslf1PSUvk92FoD/bfjiVwfoFmP8yTA7zMrQCveA+3O5yU88MVTYBcW1BXQ0mxYXK9CWfUAxP0IHH8srmvO0UOzHsd5AFlmBVifaJXhZ2P9c85jFCKtqB5a0S4gcA2+D9YmEjAhBHgBJJsREJlqAs+v/gL9jxNgF76Vuw1buEaw0U4EjpUndC0EiC5lNSMgMvyx8GERQqi8A20vQx9oNhRw+e/BwlBDOPzy/L/cDnVViTxrce6LTT9zBMFv6hP65BzyCLoA3BUPSctvA//zd9BNDiRVCagI/c/wf7JlnkLLb5cZoBXuAtmWgU8Nwd+02XBDALqFgI8APBsLrWRshGVrE9i5VrDxflhcr0lY6PvXETr9bhRFsRfBWjGXdv7mYvDJc0YiRBo6xOJCRJRphTug3R3dn4Ltr8juF6vhhMu1v+le8CmRYAlMFCL+viPdF8BYzAhkb4GaUwolu3RBpQtj+bURsMETYEMd4P5JqPlVUHPLwK70IvDpw0a7hy2opMlm5PU4DxH40/EYSlYJrI/O3WZ2+ScoGdG9IJJr5vbPNyNBnGmwb1IU6o4nwHL/G1A3bJefxc7EDsO5Hsnh3ivQ+5sNe4DgqOCF1trR7oiBxLmPg78YS4Sa9zjU3K0y5USvjyxIIh35eD8oJQNsrM8w7ALAgcaUyIEkzPJ6HGJAiJuSYZwotUKE+DEzfCxUFWckE6Bp98p1GintZoZSgRdpJ8qtWTMcSuWF/D/H8vBOrvfDhHP0akCVtW7kx8XRuuFPMyK4T42P1JfsQSjWUd2wxykIBxm4J/IR8q8EhEkJnucCIirpIDjvBVG7jftaqG5iyszl/AtTbOp8lG6CUQAAAABJRU5ErkJggg=='
  },
  'ETH': {
    title: '#ff00d2',
    text: '#ff4dff',
    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABMhJREFUWEell3tMW1Ucx7+/W2mhlHaQkfmXyTRkkb1wika3FnxPB3/owlwpDLKHcVFh6CbGt9FNHcpgJGNRxmCjdBr+cWMazTTQyjSLk8eWaaJxiY9tZGHSW8BSeu/P3ItFOkrvSTxJkybn9/ic3/me3zmXIDhuL75kTXdYiwCTk1XOI8JiBrIJMAEYBdFvUPkcSwiYFenEVz7bsEhoMjIqLA8tU1SuIqASQIqRfWyewT4wGgKdjjPJfJICuMrkOjB2iiZNZMfgpkCOfQfeIDXRfEIApyeUS+A2APn/J/mML3M/SKnwe7POXR9vDkCBW76bJXQDyDJK7sggEAGjMhuZavOjDBQFvPa+2cZxAPe6Q0sVif0iybUgOypS9VgN7WERAB1CksjZczTjfMxhFgCTyyN/D9AqkWgrlpjQ9KpVN616ewKDPykibiDQ2V5vxh1zAFyeYCNAVUJRAOx7yYpVudoJBH64oKBmz4SoK5hRH+i0P6856BUo8ATzGZT0uMyOXnxfCnZuni5/bHzQGsbxr6fEIVRpZcBnG9IBXJ6QF+BSEW+bldD+XjoWZsbrd2SUUVE7jtC4kCC1pR/yd9i30v3usUVTknpFJLlm80yZBSVrzQnNu76IoOnopGgoJVXKcJCzTN5KjI9EvJbmmHDg9WnhzTeefnMC538WEyQzu8lVJreDsUkEoO6FNNy54oakpmeGoti192+RcJoED5DLE+wHKM/I49GCFNRuixfefD57W8I42SMkyD5ylcojoORdLy2V0P6uFYsWSkac+vzwiIrK2glMhA0FeVlrPtqGJY283W3BxnWJhTcf0bGTETT7DATJiBoCZGeRrnrtJ4kVAFEFqD8cxoVfFFz8I+ElGOPWAUaS9X4t6QP3pGBsgnWIWPebb+WnTk9B08DjD5nh644YbZm2BaF+gJOK8LZcEzY8Ysahrkn9FJQWmZGRHt+IrgUZdS1hqAy415nReCSMX39PunoN7jQ5PfIRAsqNUDevt6DiMTM6jkfgPRFB9SYL1jqnH0iffB7Bx59FdJ1oVTp4bFJk9WDmZirwyNsY+NAIQJtvfNmKvFtNuDSsoqVrEn8OM6JRxpKbTXhygwUL7ISBHxVU7xa7mFgiNxVWjt2oTqmXRQBuuUlC6570GdPA2Sgy7YRlOdO3ojaeqBnHlauGpQcDqimS4dA30lka9BHRRhGI9Q+bUVVuSWha3xbGp6eEGpDm3+r32rfoAGvKg3dJKn0nAqDZvFWdBld+fEv+diCKF98XbcGASlLeNx22wRkpF3hC+xn8rAiEdhUfficddtt/J6H4qTHIY4adTw9PhH29Hfbn9P+xhCUlbBo2608yw3tB83lwdQpe2T59N+xuDuPLPsHSM/f7Ox0zz764w+zyjC0HKwEQOUQqsWtLqt4PXtsvXHqZ1agz4MsaisWf8yx3euTVBP1ZvsAIwpwCpFkIQbHSy0Qo6u2wB2bHTfhh4vJcWw6Y2kRfyEagIOpnhSq1N+D1tkk/zZxlcj0xagwTJDXgBr9XExwlVKjhx+masr9WSmyqYqCSDK7tWRxaJ2qTWGnq6cwcSMZnCBBzLixhG1vkYkByMuuX12IA2f/OXwVwEeBBIvij5kh3X2t2SKRy/wApA6oN9MBkKQAAAABJRU5ErkJggg=='
  },
}

const ProcessEnv = {
  PASSPHRASE: 'hellokey123',
  APIKEY: '0b2719a2-fcb9-49af-89a2-2fa8a6c6ffe3',
  SECRETKEY: '5CE919CF49CB39D35D9AA4133353CCCC',
}


const FundURL = "http://fundgz.1234567.com.cn/js/";
const LargeMarketURL = "https://push2.eastmoney.com/api/qt/ulist.np/get"
const FundObj = {
  "005918": 11268.82,
  161726: 4922.62,
  161725: 7172.82,
  "003096": 575.96,
  "001513": 244.95,
  "005827": 1423.95,
  "003984": 1295.13,
  "001875": 1457.99,
};
// 25年节假日
const WeekDays = [
  {
    "date": "2025-01-01",
    "name": "元旦"
  },
  {
    "date": "2025-01-29",
    "name": "春节"
  },
  {
    "date": "2025-01-30",
    "name": "春节"
  },
  {
    "date": "2025-01-31",
    "name": "春节"
  },
  {
    "date": "2025-02-01",
    "name": "春节"
  },
  {
    "date": "2025-02-02",
    "name": "春节"
  },
  {
    "date": "2025-02-03",
    "name": "春节"
  },
  {
    "date": "2025-02-04",
    "name": "春节"
  },
  {
    "date": "2025-04-04",
    "name": "清明节"
  },
  {
    "date": "2025-05-01",
    "name": "劳动节"
  },
  {
    "date": "2025-05-02",
    "name": "劳动节"
  },
  {
    "date": "2025-05-03",
    "name": "劳动节"
  },
  {
    "date": "2025-05-04",
    "name": "劳动节"
  },
  {
    "date": "2025-05-05",
    "name": "劳动节"
  },
  {
    "date": "2025-06-02",
    "name": "端午节"
  },
  {
    "date": "2025-10-01",
    "name": "国庆"
  },
  {
    "date": "2025-10-02",
    "name": "国庆"
  },
  {
    "date": "2025-10-03",
    "name": "国庆"
  },
  {
    "date": "2025-10-04",
    "name": "国庆"
  },
  {
    "date": "2025-10-05",
    "name": "国庆"
  },
  {
    "date": "2025-10-06",
    "name": "国庆"
  },
  {
    "date": "2025-10-07",
    "name": "国庆"
  },
  {
    "date": "2025-10-08",
    "name": "国庆"
  }
]

module.exports = {
  OilInfo,
  OkxInfo,
  ProcessEnv,
  CoinMap
}