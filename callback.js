const newTimer = (timer, cb) => {
  return new Promise((r, e) => {
    setTimeout(() => {
      console.log(`After ${timer / 1000}s!`);
      r(cb);
    }, timer);
  });
};

//callback hell!
setTimeout(() => {
  console.log("after 1s");
  setTimeout(() => {
    console.log("after 2s");
    setTimeout(() => {
      console.log("after 3s");
      setTimeout(() => {
        console.log("after 4s");
        setTimeout(() => {
          console.log("after 5s");
        }, 1000);
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

//non async await
newTimer(1000, newTimer)
  .then(cb => cb(2000, newTimer))
  .then(cb => cb(3000, newTimer))
  .then(cb => cb(4000, newTimer))
  .then(cb => cb(4000, newTimer))
  .then(cb => cb(4000, newTimer));

//async await
async function someNewTimer() {
  const cb = await newTimer(1000, newTimer);
  const cb2 = await cb(2000, newTimer);
  const cb3 = await cb2(2000, newTimer);
}

someNewTimer();
