require('dotenv').config()

const config = {
  "development": {
    "config_id": "development",
    "app_name": process.env.APP_NAME,
    "app_desc": "Api para o aplicativo do hospital",
    "node_port": process.env.PORT,
    "database": process.env.DATA_BASE,
    "jwt_key": "api-hospital",
    "redis_port": process.env.REDIS_PORT,
    "redis_host": process.env.REDIS_HOST,
    "key_prefix": process.env.KEY_PREFIX
  },
  "testing": {
    "config_id": "testing",
    "database": "mongodb://localhost:27017/api-hospital",
    "jwt_key": "api-hospital"
  },
  "staging": {
    "config_id": "staging",
    "node_port": 8080,
    "database": "mongodb://localhost:27017/api-hospital",
    "jwt_key": "api-hospital"
  },
  "production": {
    "config_id": "production",
    "node_port": 8080,
    "database": "mongodb://localhost:27017/api-hospital",
    "jwt_key": "api-hospital"
  }
}

module.exports = config;
