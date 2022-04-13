const typeWritter = async(sentence) => {
  const sentenceValue = sentence + '\n';
  let delayCounter = 0;
  for (const char of sentenceValue) {
    setTimeout(async() => {
      process.stdout.write(char);
    }, delayCounter);
    delayCounter += 50;
  }
};

typeWritter("hello there from lighthouse labs");