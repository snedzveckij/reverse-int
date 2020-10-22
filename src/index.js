module.exports = function reverse (n) {
    let str = n.toString();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr[i] = str[i];
    if(arr[i] === '-') {
         arr.splice(i, 1);
      }
    }
    return arr.reverse().join('');
}
