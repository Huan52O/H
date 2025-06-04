const utils = require('./utils');
const CONSTANT = require('./constant');

const {
  dateFormater,
  getNowSeconds,
  writeMdFile
} = utils;

const { MonthsMap } = CONSTANT;

const isDateBeforeToday = (inputDate) => {
  const today = new Date();

  // 清除时间部分，只比较日期
  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return inputDate < today;
}


const getYearCalendar = (year) => {
  // 如果没有传入年份，则使用当前年份
  const currentYear = year || new Date().getFullYear();
  const allMonthsCalendar = [];

  const generateDays = (day, holidays) => {
    const obj = {}
    for (let i = 0; i < 12; i++) {
        obj[new Date(currentYear, i, day).getTime()] = holidays
    }
    return obj
  }

  // 常见节日日期
  const holidays = {
      [new Date(currentYear, 0, 1).getTime()]: ["元旦"],
      ...generateDays(6, ['招行']),
      ...generateDays(10, ['光大']),
      ...generateDays(24, ['广发', '车贷']),
      ...generateDays(25, ['花呗']),
      [new Date(currentYear, 1, 14).getTime()]: ["情人节"],
      [new Date(currentYear, 2, 8).getTime()]: ["妇女节"],
      [new Date(currentYear, 2, 12).getTime()]: ["植树节"],
      [new Date(currentYear, 3, 1).getTime()]: ["愚人节"],
      [new Date(currentYear, 3, 4).getTime()]: ["清明节"],
      [new Date(currentYear, 4, 1).getTime()]: ["劳动节"],
      [new Date(currentYear, 4, 4).getTime()]: ["青年节"],
      [new Date(2025, 4, 31).getTime()]: ["端午节"], //农历
      [new Date(currentYear, 5, 1).getTime()]: ["儿童节"],
      [new Date(currentYear, 6, 1).getTime()]: ["建党节"],
      [new Date(currentYear, 7, 1).getTime()]: ["建军节"],
      [new Date(currentYear, 8, 10).getTime()]: ["教师节"],
      [new Date(currentYear, 9, 1).getTime()]: ["国庆节"],
      [new Date(2025, 9, 6).getTime()]: ["中秋节"], //农历
      [new Date(2025, 9, 29).getTime()]: ["重阳节"], //农历
      [new Date(currentYear, 11, 24).getTime()]: ["平安夜"],
      [new Date(currentYear, 11, 25).getTime()]: ["圣诞节"],
      [new Date(2026, 0, 26).getTime()]: ["腊八"], //农历
      [new Date(2026, 1, 16).getTime()]: ["除夕"], //农历
      [new Date(2026, 3, 24).getTime()]: ["车贷清"],
      [new Date(2025, 3, 17).getTime()]: ["油价"], //油价调整
      [new Date(2025, 3, 30).getTime()]: ["油价"],
      [new Date(2025, 4, 19).getTime()]: ["油价"],
      [new Date(2025, 5, 3).getTime()]: ["油价"],
      [new Date(2025, 5, 17).getTime()]: ["油价"],
      [new Date(2025, 6, 1).getTime()]: ["油价"],
      [new Date(2025, 6, 15).getTime()]: ["油价"],
      [new Date(2025, 6, 29).getTime()]: ["油价"],
      [new Date(2025, 7, 12).getTime()]: ["油价"],
      [new Date(2025, 7, 26).getTime()]: ["油价"],
      [new Date(2025, 8, 9).getTime()]: ["油价"],
      [new Date(2025, 8, 23).getTime()]: ["油价"],
      [new Date(2025, 9, 13).getTime()]: ["油价"],
      [new Date(2025, 9, 27).getTime()]: ["油价"],
      [new Date(2025, 10, 10).getTime()]: ["油价"],
      [new Date(2025, 10, 24).getTime()]: ["油价"],
      [new Date(2025, 11, 8).getTime()]: ["油价"],
      [new Date(2025, 11, 22).getTime()]: ["油价"],
  };

  for (let month = 0; month < 12; month++) {
    const monthCalendar = [];
    const firstDay = new Date(currentYear, month, 1);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
    let dayCounter = 1;
    while (monthCalendar.length < Math.ceil((firstDayOfWeek + daysInMonth) / 7)) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        if (monthCalendar.length === 0 && i < firstDayOfWeek) {
          week.push({
            day: '',
            isToday: false,
            holiday: [],
            opacity: 0
          });
        } else if (dayCounter <= daysInMonth) {
          const thisDate = new Date(currentYear, month, dayCounter);
          const isToday =
            thisDate.getFullYear() === new Date().getFullYear() &&
            thisDate.getMonth() === new Date().getMonth() &&
            thisDate.getDate() === new Date().getDate();
          const holiday = holidays[thisDate.getTime()] || [];
          week.push({
            day: dayCounter,
            isToday: isToday,
            isBefore: isDateBeforeToday(thisDate),
            holiday: isToday ? ['今天', ...holiday] : holiday,
            opacity: 1
          });
          dayCounter++;
        } else {
          week.push({
            day: '',
            isToday: false,
            holiday: [],
            opacity: 0
          });
        }
      }
      monthCalendar.push(week);
    }
    allMonthsCalendar.push(monthCalendar);
  }
  return allMonthsCalendar;
}

const createWeekHeader = () => {
  const headers = ['日', '一', '二', '三', '四', '五', '六']
  const html = headers.map(item => {
    return `<div style="text-align: center;">${item}</div>`
  }).join('')
  return html
};

const sendCalendar = () => {
  const year = new Date().getFullYear();
  const years = [year, year + 1];
  const calendars = years.map(item => {
    return getYearCalendar(item)
  })
  const Time = dateFormater('YYYY-MM-DD HH:mm:ss', getNowSeconds());
  
  const mdContent = `<div style="max-width:600px; margin:0 auto; border-radius:20px; box-shadow:0 12px 40px rgba(90,70,180,0.1);">
  <div style="padding:30px 20px; border-radius:20px 20px 0 0;">
    <h1 style="margin:0; font-size:36px; text-align:center; font-weight:800; letter-spacing:-0.5px;">
        ⏳ DIGITAL HORIZON
    </h1>
  </div>
  ${calendars.map((year, yearIndex) => {
    return `<div style="padding:25px 15px; display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
    ${year.map((month, i) => {
      return `<div style="border-radius:14px; padding:16px; box-shadow:0 4px 16px rgba(90,70,180,0.08);">
      <div style="color:#6D5DFD; font-weight:700; margin-bottom:12px; font-size:16px; display:flex; justify-content: space-between; align-items:center;">
        <div style="font-size: 14px;">${years[yearIndex]}-<span style="font-size: 18px; font-weight: 700;">${i+1}</span></div>
        <div>${MonthsMap[i]}</div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:5px; font-size:13px; padding: 5px 0; color: #505be5;">${createWeekHeader()}</div>
      <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:5px; font-size:13px;">
        ${month.flat().map(m => {
          return `<div style="text-align:center; padding:6px; opacity:${m.opacity}; background:
          ${m.isToday ? 
          '#eb87bf' : 
            m.holiday.length > 0 ?
              m.holiday.includes('油价') ? '#ffcf47' : '#cc76ff' :
                m.isBefore ? '#cacaca' : 
          '#87d8eb'}; border-radius: 15px;">
              ${m.day}
              ${m.holiday.map(h => {
                return `<div style="font-size:12px; font-weight: 600; line-height:1.2;">
                          ${h}
                        </div>`
              }).join('')}
          </div>`
        }).join('')}
      </div>
    </div>`
    }).join('')}
  </div>`
  }).join('')} 
  <div style="padding:25px; background:#2A2840; border-radius:0 0 20px 20px; text-align:center;">
    <p style="margin:0; color:#A5B3FD; font-size:12px; line-height:1.6;">
        🕒 最后更新：${Time}<br>
        © 2025 TimeWarp 日历实验室
    </p>
  </div>
</div>`;

  writeMdFile('calendar', mdContent);
};

sendCalendar();