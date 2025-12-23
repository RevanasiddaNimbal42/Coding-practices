function add(a, b) {
  return a + 2;
}

function sub(a, b) {
  return a - 1;
}

module.exports = { add, sub };

//OR

exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;

//OR

module.exports = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
};
