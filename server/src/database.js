const mongose = require('mongoose');

mongose.connect('mongodb://localhost/adminpagos')
    .then( db => console.log('bd is conectect'))
    .catch( err => console.error(err));

