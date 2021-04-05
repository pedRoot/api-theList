import app from './app.js';
import './config/database';
import "core-js/stable";
import "regenerator-runtime/runtime";

const host = '0.0.0.0'
const port = process.env.port || 3000
const env = app.get('env')

app.listen(host, port, () => console.log(`App server listen on ${host} port: ${port}, for ${env}`))