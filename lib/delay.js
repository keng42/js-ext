// global.delay = setTimeout[require('util').promisify.custom];

// 浏览器并没有 util
global.delay = ms => new Promise(((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms);
}));
