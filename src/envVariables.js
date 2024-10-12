require('dotenv').config();

exports.envVariables = {
    urldb:process.env.URL_DB,
    port:process.env.PORT
}