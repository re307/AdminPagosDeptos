require('./database');
const serverApi = require('./serverApi.js');


serverApi.listen(serverApi.get('port'));
console.log('Server en el puerto',serverApi.get('port'));