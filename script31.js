const createCounter = () => {
  let count = 0; // Private variable
  return {
    increment: () => { count++; },
    getValue: () => count
  };
};

const myCounter = createCounter();

document.getElementById('add').addEventListener('click', () => {
  myCounter.increment();
  console.log('Incremented (value is private)');
});

document.getElementById('get').addEventListener('click', () => {
  document.getElementById('log').textContent = 'Current Value: ' + myCounter.getValue();
});