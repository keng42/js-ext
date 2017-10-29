/* eslint import/no-dynamic-require:off */
/* eslint global-require:off */

const clss = ['date', 'number'];

module.exports = (...args) => {
  if (args.length === 0) {
    clss.forEach((cls) => {
      require(`./lib/${cls}`);
    });
  }
  args.forEach((cls) => {
    if (clss.includes(cls)) {
      require(`./lib/${cls}`);
    }
  });
};
