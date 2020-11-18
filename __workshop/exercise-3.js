// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  return new Promise((resolve) => {
    console.log("Waiting 2 seconds...");
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  let theSum = num;
  try {
    theSum = await doublesLater(theSum);
    theSum = await doublesLater(theSum);
    theSum = await doublesLater(theSum);
    return theSum;
  } catch {
    console.log("Error");
  }
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
