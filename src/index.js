import app from './app.js'
import './config/database'
import "core-js/stable"
import "regenerator-runtime/runtime"
import conf from './config/config-env'

app.listen(conf.PORT, () => console.log(`App server listen on port: ${conf.PORT}, for ${conf.NODE_ENV}`))