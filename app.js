const { inc, dec, getCount } = require('./myModules');

inc();
inc();
inc();
inc();

console.log(`the count is ${getCount()}`);