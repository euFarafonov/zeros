module.exports = function zeros(expression) {
  let two = 0;
  let five = 0;
  let arr = expression.split("*");

  arr.forEach(function(el) {
    let numb = parseInt(el);
    let str = el.slice(el.indexOf("!"));

    if (str == "!") {
      five += findCount(numb, 5);
      two += findCount(numb, 2);
    }

    if (str == "!!") {
      if (numb % 2 == 0) {
        two += findCount(numb, 2);
      }

      for (let i = numb; i > 1; i -= 2) {
        let temp_var = i;
        while (temp_var % 5 == 0) {
          five++;
          temp_var /= 5;
        }
      }
    }
  });

  function findCount(num, div) {
    let cnt = 0;
    while (num > 0) {
      cnt += Math.floor(num / div);
      num /= div;
    }
    return cnt;
  }

  return five < two ? five : two;
};
