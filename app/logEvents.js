const fs = require("fs").promises;
const path = require("path");
const { format } = require("date-fns");

const fileName = path.join(__dirname, "./logs", "logs.log");

const logEvent = async (msg) => {
    const datetime = `${format(new Date(), `dd-MM-yyyy\tss:mm:hh`)}`;
    const contentLog = `${datetime}-----${msg}\n`;

    try {
        fs.appendFile(fileName, contentLog);
    } catch (err) {
        console.error(err);
    }
};

module.exports = logEvent;
