'use strict';

module.exports = function(config, data, next) {
    data.hostname = config.env.host();
    next(data);
};