'use strict';

module.exports = function(content, contentType, request, config) {

    if (contentType === 'text/html') {
        return content.replace(/World/ig, 'Steve ("World" is replaced by "Steve" in a-output-filter.js)');
    }
};