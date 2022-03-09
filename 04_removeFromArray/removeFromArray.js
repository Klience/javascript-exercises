const removeFromArray = function (...args) {
  const arr = args[0];
  const cleanArr = [];
  arr.forEach((el) => {
    if (!args.includes(el)) {
      cleanArr.push(el);
    }
  });
  return cleanArr;
};

// Do not edit below this line
module.exports = removeFromArray;
