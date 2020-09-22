const sentence = 'Today is a good day!\n';

let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, time)
  time += 150;
};