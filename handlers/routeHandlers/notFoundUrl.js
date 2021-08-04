/*
 * Title: not Found Url
 * Description: Handles the endpoint that are not there
 * Author: MD.zanea alam
 * Date: 03/08/2021
 *
 */

// module scaffolding

const handler = {};

handler.notFoundUrl = (reqProp, callback) => {
    console.log(reqProp);

    callback(404, {
        message: 'This is no such endpoints',
    });
};

module.exports = handler;
