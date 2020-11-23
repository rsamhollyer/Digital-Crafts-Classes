const os = require("os");

// console.log(os.freemem());
// console.log(os.networkInterfaces());
// console.log(os.userInfo());

const osArrayFunc = () => [os.freemem(), os.networkInterfaces(), os.userInfo()];

const resultantArray = osArrayFunc();

console.log(resultantArray);
