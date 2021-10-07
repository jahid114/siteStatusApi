/*
 * Title: Routes
 * Description: Connect with the routes
 * Author: MD Zanea Alam
 * Date: 11/15/2020
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandlers');
// module scaffolding
const routes = {
    sample: sampleHandler,
};

module.exports = routes;
