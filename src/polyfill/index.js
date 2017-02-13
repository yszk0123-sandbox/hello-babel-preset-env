import 'babel-polyfill';

const promise = new Promise((resolve) => {
  resolve('world');
});

promise.then((name) => {
  console.log(`Hello, ${name}!`);
});
