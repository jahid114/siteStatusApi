/*
 * Title: SampleHandler
 * Description: Handles the sample route
 * Author: MD.zanea alam
 * Date: 03/08/2021
 *
 */

// module scaffolding

const handler = {};

handler.sampleHandler = (reqProp, callback) => {
    console.log(reqProp);

    callback(200, {
        message: 'This is the sample url',
    });
};

module.exports = handler;
