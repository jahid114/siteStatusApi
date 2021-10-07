/*
 * Title: Environment
 * Description: Handle the environment variables
 * Author: MD Zanea Alam
 * Date: 03/08/2021
 *
 */
// dependencies

// module scaffolding
const environments = {};

// staging environment

environments.staging = {
    port: 3000,
    envName: 'staging',
};

// production environment

environments.production = {
    port: 5000,
    envName: 'production',
};

// determine which environment was passed

// eslint-disable-next-line operator-linebreak
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object

// eslint-disable-next-line operator-linebreak
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// module export

module.exports = environmentToExport;
