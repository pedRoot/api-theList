import app from './app.js';
import './config/database';
import "core-js/stable";
import "regenerator-runtime/runtime";

const port = process.env.port || 80
const env = app.get('env')

app.listen(port, () => console.log(`App server listen on port: ${port}, for ${env}`))