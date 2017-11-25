const types = ['Array', 'Boolean', 'Date', 'Error', 'Function',
  'Null', 'Number', 'RegExp', 'String', 'Undefined',
];

types.forEach((type) => {
  global[`is${type}`] = obj =>
    Object.prototype.toString.call(obj) === `[object ${type}]`;
});
