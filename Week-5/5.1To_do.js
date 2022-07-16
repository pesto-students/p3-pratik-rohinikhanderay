const doTheTask = (taskNumber) => {
    return `Task ${taskNumber} completed`;
  };
  
  async function* completeTheTask(fn, taskNumber) {
    const response = await fn(taskNumber);
    yield response;
  }
  
  completeTheTask(doTheTask, "one")
    .next()
    .then(({ value, done }) => {
      console.log(value);
    });
  
  completeTheTask(doTheTask, "two")
    .next()
    .then(({ value, done }) => {
      console.log(value);
    });
  
  completeTheTask(doTheTask, "three")
    .next()
    .then(({ value, done }) => {
      console.log(value);
    });