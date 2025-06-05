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

const FundMap = {
  FundURL: 'http://fundgz.1234567.com.cn/js/',
  LargeMarketURL: 'https://push2.eastmoney.com/api/qt/ulist.np/get',
  FundObj: {
    "005918": 11268.82,
    161726: 4922.62,
    161725: 7172.82,
    "003096": 575.96,
    "001513": 244.95,
    "005827": 1423.95,
    "003984": 1295.13,
    "001875": 1457.99,
  },
  WeekDays: [
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
}

const MonthsMap = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

const StockMap = {
  MarketUrl: 'https://gateway.jrj.com/quot-dc/zdt/market',
  MarketHistoryUrl: 'https://gateway.jrj.com/quot-dc/zdt/market_history',
  DeviceInfo: '{"productId":"6000021","version":"1.0.0","device":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36","sysName":"Chrome","sysVersion":["chrome/135.0.0.0"]}',
  ProductId: '6000021',
  UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
  upColorMap: {
    '涨停': {
      color: '#ef1326',
      shadow: 'rgba(255,71,87,0.2)'
    },
    '>8%': {
      color: '#f42947',
      shadow: 'rgba(255,71,87,0.2)'
    },
    '5-8%': {
      color: '#ff6178',
      shadow: 'rgba(255,71,87,0.2)'
    },
    '2-5%': {
      color: '#ff8c9d',
      shadow: 'rgba(255,71,87,0.2)'
    },
    '0-2%': {
      color: '#ffbcc6',
      shadow: 'rgba(255,71,87,0.2)'
    }
  },
  zeroColorMap: {
    '0%': {
      color: '#e5ffe7',
      shadow: 'rgba(255,71,87,0.2)'
    }
  },
  downColorMap: {
    '跌停': {
      color: '#218c74',
      shadow: 'rgba(33,140,116,0.2)'
    },
    '>8%': {
      color: '#2ed573',
      shadow: 'rgba(123,237,159,0.2)'
    },
    '5-8%': {
      color: '#7bed9f',
      shadow: 'rgba(123,237,159,0.2)'
    },
    '2-5%': {
      color: '#a8fac2',
      shadow: 'rgba(123,237,159,0.2)'
    },
    '0-2%': {
      color: '#b6ffcd',
      shadow: 'rgba(123,237,159,0.2)'
    }
  }
};

const GoldMap = {
  icons: [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABghJREFUWEfFlmlwFFUQx/9v3s5uEkIgIRgwoBwhYDIzSwKVD5RBDqsUOQqRAtFSwNJCKeUqUAICIldECvECueQKUFwFgnzghpBgiGDIzCZIICiXwZAlkGuzszPzrN1Ujj1CQqSK+TY13f3/db/unkfwlB/ylPXRJIAkSZMZY8MoRSwBohjDDYORi4yxI4qi7Pi/CTQKIAjCT4SQSeGhqGzXhpHYzkZIcrSGs3dMkK9zzn/uEZ4QaLqBRYqiLG4pSEAAURRL2oSy0G9TelsS+74IdHgfuLkYOLIVSOTrtH7JpFi0heqazpRc2ZbQEgg/AEmStDEDNTp37nwgYihwbydQcgCoLgT+cHkB1AqOX0KRd4MzLubY6ONCeAEIgrAvKhwjjx/eyIGpwK1UwHGtPuZdHegQWOOVGQTFZab9l3Jtox4Hog5AkqSZjLHl8sERBGBAyT6/OENn887DqS5LIIEMmWDyKh6EkFmyLK9oLkQdQEJvqbK/1QhZNYUCRrWf/+gFvPPaHWLERDNu78LAEOt2PMCmjMjqrN/zgh8LYMCAAUF2u92xJUVFQg9/13eWUFUu5CArNoskCk6pu4Ftc3Wzr+XVy/cxdmUU2rSNDD59+rR/FgGoPBWQJGkcIUbapQ0uztfm3aUmLbeQY0FBwUJ2dnZBUlJSbHW1w2btbpCtczSTl73LiUEzg5i9wvy2LMs7m1MFD4DVal0bGaZPPL7CxcPdaM/WNNqEZZTlXKOaYbDXbTbb4dqAgiAM5TiyPyFGN21O0WuOMV8DegJTVmos/Urb9bm5uZOaDSAIwqEXnidDdo93UJQzoBuHs9dNmPaDSXdpOKcoSn/fYKIopvMm9Fv1sUaTJQO4pAHRLnx1QEPauYhfbTbb8GYDiKL4abAFS86vUb1KmnONwwdfm3TVhVxFUfrUBhRF8aKZh3X9LI0mxBj1OuV2jF4WwQruWjYA2K4oypmmIDzlc5+rw+G4cmyFiqgIb5eCW8Bbi81uiAJFUeJEUcw384jd8blKYzt72z64WYQBC58DpZyu64wzGGCiuKcbZKEsy6sDwdSNoVUS1YlDdH7qaN3PrshOMHwO74Fwix9a6qId2zFvu6oynMisxMKDnZC+QgeIgaJyit2nOGw7RnWzCWd+y1YG+wavAxBFMc1swrgL61S/SXA7lVUBg6ab9ZPfqDQsJEAuRYUYlNoDSfEEqa+5AI0BXeq35sBpPOxlBIqieG1fr5c+ieJVsases2m2fxU8khUGEBqAr7QI0zeG43ZZKPZ8qTV67MNm87h9jxTnykpUrZEXQO1C2j3fiV5dAvwoZQ2QGvSprgEP7uKcjeDDLV1xYZ0KswmYmFqTuW8i98uBEbMpe1jFbbbZbO+5bfxUrFbrqGDetSe5V7WxfCrvvWiyXUASD2gq4KwCHvyL7453xNbMdlgwQcfwfoZHPOcqdbmDJ/TQeV+IpT+rOCFbSk5m/tk+IEBtaQb166W0DjbiRyaU4plwRjp1NEHiCQqdZbhVQnH2ahgu3QgBtfDY/UVN2WvFNd14w/1uotw+X4jTWdVI2dKKZV3I95zlI69k7v0AYHSIxejFGFo5VI4LtRgaCCurdNLwJRNdZFgXHejEeYnn5eUdcgePj48f7gXxtw5EVCM5JQwPHfQlRVHSm7wTBuooURT7U46dylnt5FCMxwMIq0DyvIj/B+CGkkRBP77SxbVvW4/YnCPIOl+K6ZsjjawL+Z5ObVEFPNuzr1g8Y4zWfuzABqu4QR8EbELDwLpd5dh+LqI4PSvfM4otBuiTKKQFmcmbGd+rfne0xsaw4k4Rhi6LZvcraeNj2NTPo+H3xAThfkw0wnct8Ezdox9HBeZtIDia18aefTEvMuAiaipGIw3JukWpOLCswdfbRv0qZgwoL8Una0Jw5krYo1dxSwDcPiNf7nkl2KTFfvRqGYSeQQhvZQHUKtjLncjKAzadCQch3F97jxZ089VocQ/4BkpMFNdGtNLGVji4sNAgA04XIU6NsMjWepVTIz+eyLj8WaAEnxhAw+BxcXGDKaVasy8kLS39k/D7D7pLqj+U4bbHAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAYhJREFUWEfNlUFKw0AUht+MZqGggoumIlgvoAvRkeJGZFrxCnoCPYlLV3oC3XgDHaQbCY0iqBewgpiIiCgY0DqREQJFks68tGOabf6Z9+Wf+QiBgh9S8HwYfICXi9pK1P6OpqtnVzba0jbw7Nf2JMRBiYndfwV48NYWnCFaB4B1NZgCuaYEjieXTs/7CZLZQOEAyVf2cgSPHl8lQKNy9aSZ1Zr2DuS9hIFXXyZUbqjBUkJjqioaaRBagL+LPl+bgTPB3LTN2lHr3RmdHVfvrAAEl3yOSrjpdgklhfnyorhVmb4cQeew0OfbBGC/G0AMsOMycWBqCuoIQp8fEoBNDcCRy8SWLYAWAZjRANy7TFSsADz5PDbZuMSEcbPGQZPBeTKZAKa6JUOx+WRdKgBWN2y+s6lUAKxu2LwJAEq3XvTMagClW+hzVF7bAFY3bF4LkEenvGt+j+Dr4+5teKQypvvD2cgSjEI2sgSjkI2sAjBWzkZWARgrZCNLMArZyA7u3zCv19h1hTfwA1NYGyD5h6UdAAAAAElFTkSuQmCC",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABv9JREFUWEe1l2lsXNUVx3/3LbPPm3hJvGSFkKXQgoq6iJRQAkFA1C1CsidNhdSqG1JRI6H2S6u2VOq3IkSpVMGXUhQV292EQDQsDUuhaZs2ollqShIIceLYHi/xeGb83rz37m3vG8/EEyfIjuiVLL85795z/vec/1meYJHr2ACxzpAO06ZDBAipKHg+hc57KS9SxSW3ifc7PDZAJgFfR7HTTHbcLGI5DDsLCFRQQvpllDt6WIbV/lDwXEsPby4VzGUBFJ9ii5HIPBrvvO1GM70WYcYISqcIy8MIITDSq7DSqyN7YWWY6sgbpXD29APZHh5fCohLAij9mg5pcjS1fne7meyM9ElvAnfoGUJ3AmHYxLtuRQMzYrmGvcrJvVTLo9tadvHKYkE0ASj+njZ8HjPj7fcoVSW98WsNPWH5NAqBrAzjjb6OmeoiseozGDGnscc9+yL+5OFnnTyfXTKA6QFakbyUXL3jo8gAd/gFYu0fI9756Yau6tgBvLG/YKZXYSY7iHfe2njnnz+Ge2YfSPY7u7h96QD6eDC+4qYfxDu2RGdLxx5GKYmVXYeZ6MJIdWDYywirRc1BzNiyiIhhaYjQGycoHo/OCcVHsnmOLhlAsZ/XrezVn0qu3VkjljvO7Lv9qNDV9lCRdlDRA4h68FQk1u8Dqfjisjy/WazxOZW17dP9/ELANy3nGuIdt2DEWyJr1cl/4hUOQlC5rF679XqCqSNKKfWQ08t3rgiAPlTs58/AzfqSRmxZFGf937AyKHykN03oFVCzYygZRHY0R4Rh4Q7/iUT3dtzhl55xevncYkE0ZYEaIFmUDBoGa+uuriua83zN9QqMeCux1huQgUu1cADDSpHefB/euZfxJw/9JNvD9xcDYkEdmO7jbkPwpIJ2HVwhbO0ODCOGsNMg7IgPyi9GtaG+YstvQhO48u4AYWXoj04PO64IQGWAlaGInTIz66yg+HZDh/aIoUk4T6suy1ZuA3bL9RErvXOvEpbeQUgeyeTZc0UA5qrgSHLtPYSVs3iFv0ZWdZx1BRSxbJSOwnai36o6ReiOIqtTKBmBHMr2smYxxpuyoH5AA1AGRzGt9nj3dpBVquP/QOr810u7YC5w8x5rqRnLElu+BffM8z/O5fnhYkA0caDUz53Y6e9hJLfK6njt5sLGSHdhmGmkCkG6KL8E0kfpv9CN7BjJ5SRXfwFhGJTeeqzs9JJZEoDpPnbbzrq9iZU7EFYSf+oYs2ef1433gp65DLj45pazgUT3HWBYc1lwxEfwLPCWglcDnwNtX2LOhc2wIg+Un6ZbetapzHXftue/dk//Ab/4DmBiJNoQZiIimzBTulZiptdgZa+OPFIdP4hfPKnbFUJnTXIFqlpE+kV95IxSPPI/r/z0Yq/UAPyOLhkynN50H8LSyiEoDyHLZ5DBDP7kkUa91emIlcawM1EvUEEZGVRr/SGzmljbjVjZaxp2wsoI/tRh/KkjWrbP6eXu+SAaAMKAQWEmc4mVd6BdWl9h5VzUGY1EO8H5/9S7woX0nONkvPMWYu0fb8j1BeoDixaGpfeonPqtru735/L8vL6xQcKZfh5GsEfnu7DSmKlujHhbbeAwrNpNvfOE7giyMtJICMPU7u4gta6nYbxaOIg3+hpWbjOJ7ttroQOqhb9Fs4RQ7Mrm6VuQhjP97FdWatv8xqMRyigbmqNnZdcTzJyMhMk1n0c3Mb2kN0n5+C+jZ8vZiDBtEivvahwuDf5MZ88TTg9fbgIwsZdV8UzLv9MbvpLVM14wcwrpFghmTkRFSIfATK6MPKNjHVZG8YZfQEmPzIfubxiYDyD74Qcu5hzu0HP404MHnV4+sQCAbTOUWr+b+hyoN5SOPwHeRK3+WCms3EaMWGtEwmrh72DaTe6vW5w5+hBmog0zuzHqEfVVnTikU7VRJxqOnXqKdYbghBCmGe/aip3bHHFBL/fsPvypQe3g5qFEFyA7R3rTV5tuGs6O4J3bjyawDo0OUX15wy9TnTz0ttPLpgUcmO7jXiH4VX0CMhMrqH0LZKKOKGcLSP98lN9KBY2yPN/V/vRg5GZhmCgZEuvYSnx55O1oaX6E7mRfLs+uBQC0YLqfHQK+C1yYRhszWdNFJ6TkNcNgp916QzSMNG45doCwPIRhO8RWbGlMzppPs+89rZvWg7ld/OiSAOpK5qbkTwrBtQrWCEVaCc4JOBEq3mzJ8y+9V6evgj2pq3ow5z5UtFzPBVp2YSnKJ55EeuOvOD1sq8vf99NsAYUvI5jp50UF2y8uRvXtQfEE3tgbSHccp7feS2tvPxAAUej6+JYQPCqMOJazHiPVifKmo8+5aHJSPO7k+cbFd/jAAETh6COvDO5EcR1wLaBL5mElOVyP+f8VwGJDNn/ffwE+7dM/OyjjfwAAAABJRU5ErkJggg==",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA45JREFUWEftVk1oXFUU/s679/10MklsMxNF1FTBhS7EhTXNtB0mLS4UioggIpSISLoULF1X3Ll160IRV27SZhqQGkjoQlpB3AgupItApVobJxPpzHtzf47cN5lh8jqTmdpKNzmzeD/33HO+73znnjeER2z0iPNjH8B+BR5qBRrfz79NjNdAuMqSr+bm128Oa/IHBsBrlaipxFkiXmTgxd6ETPRrcODApn/s8olBQP4zgPqV8vM+yUUAZwGM9yYgz4OMQogoBJEHmyQfibnq5/1A3DeA5uqpeYAXmfFuNqAnJUQYpsl7zSq9IWYvHn4gAM0rJ88wpWyPZQMJ30/ZiiAYKLluNE/6x1fWsg57VmB79dSUD7vITC7xTHZzWuYwhGM+zIxS1+XspaMjA9hcKv/oB94RERDcr2NO306Z3f2oxsxo1rZO54RZpfn1uBuvX4DaUuXlRNmfAU6XpU+QUmBsagwyikbNmfqZloJJ4vTqzJPCxbgj56pF99xXAsdeKT6SzTQ1MwXpDy+326fjBCaOYY1Jw4jAhwij9Lqz/qlfql7YBeD2WiWfV94n/2zpc7zDvhfE5PQ4ooncwAqwZZg4gU5isLXtxDunItsnVus/xasXn+gC+Hu5sh4ENKtaNkri9uas5SZCjE8/ds97x9Kx1Y0E8ADyKGXrmnSvPjFx850UwJ1LlQWdmK/cvS8J8AiuaYxmcLsNUvNDgUNPF7rPRqk0ca++KeMwGiDubuxWq1/aAJbKG1rxM73LniAUn51Gs34XrUYLKlapKO6dSVrQTl+t++o7UKPMglHqBm1friw0Gm32WSscLkBIgeRuE1u3tiEkIQgFiNonY5C+ewFgtmyUuSZhP6aj1Wv011J5w2TYdwJ0mq52cxOtuM22Yw7IwR45hrG2xiRkzfIft39//8nTPzU6/lSrli9oTW/B2BeMxa5ZmhuPEORDbN2q3xPf8wjF56aH5QVrvWm0+tIvrZzv57zrGNar5TeUoQ/Z8nGjuRhEIh0VWfadQIWZKYgBc8EqdYMtfybnlr/YC+XAb8Fv37w+8fjB5tdK8Uta2aeY0Z4gPTZZzCOaHOu+cWfGtFrXYe05v7Tyw9DyDJqE/TbWVk68aRR9YBklq7ngjkRnLrA1idWmKiQv0CvVrr4PFUBvsPp3c4dM7J8nT76XL4x965eqffX93wCMEnhUn/v+RzRq4FH99gHsV+BfxCVka8gqJGIAAAAASUVORK5CYII=",
  "data:image/png;base64,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",
  "data:image/png;base64,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",
  ],
  iconsSilver: [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAArhJREFUWEftlT1oFFEQx2f2LqhYCNoZ0cYYRLQSOzWNFmK08KsQIoTdN7cEDg6rdAqiYJkiu/M8DTmwiCEWRlFBEbELpBEsjKCmiIKIqCjJ4d17uiErex97+y53eiBu++Y/85v/m9mH0OEPO1wf/i2AQqGwfmBg4HszrrbVgXw+v8+27ZmOAUgpB4UQNzoCMDo62ptOp4UQ4vxfBfA8rw8RtwBADyLu1Fo/syxrXik1v7i4OJ/L5T43AjKagZGRkTXZbLZYL9HY2NhapdS2Uqm0BxH3l8vlS67rfjB1IRGAmQ9rrd9kMplXjZL6vt8DAFszmcxj0+JBXEMAZt4AAFcBYBYAJojoSyBiZqGU2hwtlE6nXzuOU2imeCyA53ndqVRqu9Y66MoGgAWl1ANEfImI5wBgsF4hpdRF13UvRM+klBNCiDNxYCZX4FqWNeM4ziwz7waA57HJEN9prfcS0fsw5pdmiohOtALQVSwW12Wz2a/MfD2u+7BA6AIzX1nZiuMAcAcAbpdKpamhoaFvUZhEB8Lg8fHxTUtLSx+T7hirXGDmp0R0cNUOhELf9y8j4nASQHAenQVmvkZETssAUsonWus+E4DABSFEdxDred5Z13Vvtgxgcv+RIpNEdHplZbuI6EfLACadryam7hDm8/mN5XI5mOId0aRa67lUKjVs2/anesXidADwFgBuCSHuV+vqAjBzsDb9MR1NE9GxemdSynta6yMxujki6k0EkFIe1VpPN7ITEfuFEHejMb7vn0TEyWZ1NQ4kdB/mr3Eh2HcAOJAwB4+I6FDsj8ik+1AcdSF4MQHgockQVrtX4YBh9zUuNPOPAIAK9yoApJQLWuuKZ7ZRV0S0rG8SAEJdoK124JRSapeJlZZlvSCi5aFj5lXpagBMCrc7xvg1bHfh38P8pxKb5v3vwE9JAzIw8CGLyQAAAABJRU5ErkJggg=="
  ]
};

const WeatherMap = {
  mojiUrl: 'https://tianqi.moji.com/weather/china/',
  EmojiMap: {
    '雾': '🌫️',
    '晴': '☀️',
    '少云': '🌤️',
    '多云': '⛅',
    '阴': '☁️',
    '雨': '🌧️',
    '小雨': '🌧️➕🌂',
    '毛毛雨': '🌦️➕💧',
    '小到中雨': '🌧️➕☔',
    '中雨': '🌧️➕☔',
    '阵雨': '🌧️',
    '中到大雨': '☔➕🌊',
    '大雨': '🌧️➕🌊',
    '大到暴雨': '⛈️',
    '暴雨': '🌧️➕⚠️',
    '雷阵雨': '⛈️➕⚡',
    '冰雹': '🌨️➕🧊➕⚡',
    '冻雨': '🌧️➕🧊',
    '雪': '❄️',
    '大雪': '❄️➕☃️',
    '暴风雪': '❄️➕🌪️',
  },
  Citys: [
    {
      firstName: 'beijing',
      lastName: 'beijing'
    },
    {
      firstName: 'shanghai',
      lastName: 'shanghai'
    },
    {
      firstName: 'guangdong',
      lastName: 'guangzhou'
    },
    {
      firstName: 'hunan',
      lastName: 'hengnan-county'
    },
  ]
};

const CarInfo = {
  UserAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
  Cookie:
    "BAIDUID=A58A3A83C503DBEECFD1A95D0B486160:FG=1; Hm_lvt_74dc9c641a3e6ae783a2ad1b67e90643=1722911764; HMACCOUNT=D850D639D104045F; Hm_lvt_3d2ca9e65ec4a450b97f705740dc51b5=1722911764; CITY=%7B%22code%22%3A%22257%22%2C%22name%22%3A%22%E5%B9%BF%E5%B7%9E%22%7D; Hm_lpvt_3d2ca9e65ec4a450b97f705740dc51b5=1722929964; Hm_lpvt_74dc9c641a3e6ae783a2ad1b67e90643=1722929964",
  RankListUrl: "https://www.yoojia.com/api/rank/getranklist",
  Token: "1_526c1239fc0b0512a2bd13ac6b962f5f",
  Sort: "sale",
  SubLevels: {
    1: {
      name: "全部轿车",
      code: "1",
    },
    100: {
      name: "微型轿车",
      code: "100",
    },
    101: {
      name: "小型轿车",
      code: "101",
    },
    102: {
      name: "紧凑型轿车",
      code: "102",
    },
    103: {
      name: "中型轿车",
      code: "103",
    },
    104: {
      name: "中大型轿车",
      code: "104",
    },
    105: {
      name: "大型轿车",
      code: "105",
    },
    2: {
      name: "全部SUV",
      code: "2",
    },
    200: {
      name: "小型SUV",
      code: "200",
    },
    201: {
      name: "紧凑型SUV",
      code: "201",
    },
    202: {
      name: "中型SUV",
      code: "202",
    },
    203: {
      name: "中大型SUV",
      code: "203",
    },
    204: {
      name: "大型SUV",
      code: "204",
    },
    3: {
      name: "MPV",
      code: "3",
    },
    404: {
      name: "新能源",
      code: 1,
    },
  },
  Monitor: "RANK_SALE_pc",
  City: "广州",
  BrandSaleUrl: "https://m.yoojia.com/api/rank/getranklistv2",
  TokenMobile: "1_2298dc2ac944caad6d611cdbbcb9710e",
  UserAgentIos:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
  CookieMobile:
    'BAIDUID=A58A3A83C503DBEECFD1A95D0B486160:FG=1; CITY=%7B%22code%22%3A%22257%22%2C%22name%22%3A%22%E5%B9%BF%E5%B7%9E%22%7D; Hm_lvt_3d2ca9e65ec4a450b97f705740dc51b5=1722911764,1722990274; HMACCOUNT=D850D639D104045F; Hm_lvt_74dc9c641a3e6ae783a2ad1b67e90643=1722911764,1722990274; MAWEBCUID=web_jIubdqTvHHmnxBoZhvRMXWmiiSFdYudEIZbjLBIirgcZTRXGfd; YOUJIAID=E20B38C0E4658781D28DEF70F3E3AE00:FG=1; __bid_n=1912aaa187a753646ecea5; ISSWAN=1; BAIDUID=A58A3A83C503DBEECFD1A95D0B486160:FG=1; HOSTNAME=baiduboxapp; yj_sid=103916_9-105949_1-73147_2-78154_1-79833_1-84074_1-84101_1-84349_3-84522_2-85191_2; Hm_lpvt_3d2ca9e65ec4a450b97f705740dc51b5=1722998877; Hm_lpvt_74dc9c641a3e6ae783a2ad1b67e90643=1722998877; MAWEBPASSANTI=5466aca8a4d67db734563ee73deb5b3a18fc18c47ff440a8219d7bcae802f4427470a300db8563af953ceb76707bc554ed0912f96d45e9fa018d6347c4ac792fc44b0ee44dc12478b7db14a02ca53c920f03e9ef50844ac5ca4e15e59de75bccfb; ab_sr=1.0.1_NjBjMjM3MTUzZTA4ODY4NDFmMDZiNzdkZjRjMzA5ZWNmYThiMWRiYjE5ZTRhYjE2ZjJlMzgwZTAyNWU2MzNlODJlOTc0MzQ5Mjg1ZDQwZWRhZmNiZjgzNWZkZTRjNGI3MWYyOTBiMDdlNzk5NGQzYWZjYjM3YjFmZWNlNGRiZDg2YTE3NTczYTBlYWIzMzJkYjA5ZmJmNTgwOWUyOTNkNQ==; antiBot={"data":"f2b821616de261df9ceb6548254506b05410351964a00718f376e3d64b834a2b014ccd420d97f4954ddc6c308e476e7d607a26fac259bcaa7bd4059716c29aae5ebc8178b06b1f813f8fbfcb320d572978741169ffd9d056154a4444ab1acfec","key_id":"29","sign":"84d62907"}',
};

module.exports = {
  OilInfo,
  OkxInfo,
  ProcessEnv,
  CoinMap,
  FundMap,
  MonthsMap,
  StockMap,
  GoldMap,
  WeatherMap,
  CarInfo
}