let config;
try { config = require('../Config/Config.json'); } catch (e) { config = null; }

exports.TOKEN = config ? config.TOKEN : process.env.TOKEN;
exports.PREFIX = (config ? config.PREFIX : process.env.PREFIX) || ";";