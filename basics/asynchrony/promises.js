const myPromise = new Promise((resolve, reject) => {
  let successfulOperation = false;
  setTimeout(() => {
    if (successfulOperation) {
      resolve("Successful operation.");
    } else {
      reject("Not successful, try again.");
    }
  }, 2000);
});

myPromise
  .then((resolveMessage) => console.log(resolveMessage))
  .catch((rejectMessage) => console.log(rejectMessage));
