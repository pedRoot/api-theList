import conf from "./config-env"

const whileList = [conf.URL_FRONT]

export default corsOptions = {
  origin: function (origin, callback) {
    if (whileList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      if (whileList.indexOf(origin) !== -1 || !origin) {
        const msgError = `Not allowed by CORS: ${origin} || ${conf.URL_FRONT}..`;
        callback(new Error(msgError))
      }
    }
  }  
}
