const {Pool} = require('pg');
const { envVariables } = require('./envVariables');


exports.pool = new Pool({
    connectionString:envVariables.urldb,
    ssl:{
        rejectUnauthorized:false
    }
});