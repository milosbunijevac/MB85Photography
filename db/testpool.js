var pool = require('./dbindex.js');
 
//to run a query we just pass it to the pool 
//after we're done nothing has to be taken care of 
//we don't have to return any client to the pool or close a connection 
pool.query('SELECT * FROM public.models', function(err, res) {
  if (err) {
    return console.error('error running query', err);
  }
 
  console.log('POSTGRES response:', res.rows[0].name);
});