function randomGame() {
    let count = 0;
    const timerId = setInterval(() => {
      const num = Math.random();
      count++;
      console.log(num);
      if (num > 0.75) {
        clearInterval(timerId);
        console.log(count);
      }
    }, 1000);
  }
  
  randomGame();
  