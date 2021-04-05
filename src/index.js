import app from './app.js';
import './config/database';
import "core-js/stable";
import "regenerator-runtime/runtime";

app.listen(3000);
console.log('Server listen on port:', 3000);