process.on('SIGINT', () => {
  process.stdout.write("\nThanks for using me, ciao!");
  process.exit();
}
);

let args = process.argv.slice(2);

if (args[0] == "b") {
  process.stdout.write('beep 🔊\n');
  process.stdout.write('\x07');
} else {
  let argsNum = parseInt(args[0]);
  if (!isNaN(argsNum) && argsNum > 0 && argsNum < 10) {
    process.stdout.write(`Setting timer for ${args[0]} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write('beep 🔊\n');
    }, argsNum * 1000);
  }
}