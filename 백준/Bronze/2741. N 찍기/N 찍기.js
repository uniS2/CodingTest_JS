const N = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
let result = [];
for (let i = 1; i <= N; i++) {
  result.push(i);
}
console.log(result.join('\n'));