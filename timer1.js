let args = process.argv.slice(2);

let delay = 0;

for (let i of args) {
  if (args.length === 0) {
    break;
  } else if (i < 0 || isNaN(i)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);

  delay += i * 1000;
}