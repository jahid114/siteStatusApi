const http = require('http');
const { handleReqRes } = require('./helper/handleReqRes');
const environment = require('./helper/environments');

const app = {};

app.config = {
    port: 3000,
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening on port ${environment.port}`);
    });
};

app.handleReqRes = handleReqRes;
app.createServer();
