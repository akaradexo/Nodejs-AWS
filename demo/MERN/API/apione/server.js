const express = require('express')
const {setupLogging} = require("./logging");
const {setupProxies} = require("./proxy");
const {setupRateLimit} = require("./ratelimit");
const {setupCreditCheck} = require("./creditcheck");
const {ROUTES} = require("./routes");
const {setupAuth} = require("./auth");
const app = express()
const port = 3000;

setupLogging(app);
setupRateLimit(app, ROUTES);
setupAuth(app, ROUTES);
setupCreditCheck(app, ROUTES);
setupProxies(app, ROUTES);

app.get('/hello', (req, resp) => {
    return resp.send('HELLO WORLD!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})