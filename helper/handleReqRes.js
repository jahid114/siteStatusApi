/*
 * Title: haldle Request Response
 * Description: Handle the incoming Request through server ,
 *              work as a boilerplate for routes and handle the response
 * Author: MD Zanea Alam
 * Date: 03/08/2021
 *
 */
// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const { notFoundUrl } = require('../handlers/routeHandlers/notFoundUrl');
const routes = require('../routes');

// model scaffolding

const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the parsed url
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedUrl = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const querystringObject = parsedUrl.query;
    const headerObject = req.headers;

    const requestProperty = {
        parsedUrl,
        path,
        trimmedUrl,
        method,
        querystringObject,
        headerObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realdata = '';

    const chosenRoute = routes[trimmedUrl] ? routes[trimmedUrl] : notFoundUrl;

    req.on('data', (buffer) => {
        realdata += decoder.write(buffer);
    });
    req.on('end', () => {
        realdata += decoder.end();

        chosenRoute(requestProperty, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);
            // return the final response
            res.writeHead(statusCode);
            res.end(payloadString);
        });

        // response handle
        res.end('Hello world');
    });
};

module.exports = handler;
