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

module.exports = {
  OilInfo
}