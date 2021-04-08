const holidays = require("./holidays.json").holidays

const isHoliday = (date)=> {
    date = date.match(/(\d\d\/\d\d)+/)[0];

    const holiday = holidays.filter(i => i.date == date);

    if (holiday.length > 0) {
        return { isHoliday: true, name: holiday[0].name }
    }

    return { isHoliday: false, name: null}
}

module.exports = isHoliday;