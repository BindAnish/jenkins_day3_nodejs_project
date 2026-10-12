
const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./index");

test("Home page returns success", async () => {
    const server = app.listen(0);

    try {
        const port = server.address().port;
        const response = await fetch(`http://127.0.0.1:${port}/`);
        const body = await response.text();

        assert.equal(response.status, 200);
        assert.match(body, /Node.js Docker Jenkins CI\/CD Project is Running/);
    } finally {
        await new Promise((resolve, reject) => {
            server.close(error => error ? reject(error) : resolve());
        });
    }
});

test("Health endpoint returns UP", async () => {
    const server = app.listen(0);

    try {
        const port = server.address().port;
        const response = await fetch(`http://127.0.0.1:${port}/health`);
        const body = await response.json();

        assert.equal(response.status, 200);
        assert.equal(body.status, "UP");
    } finally {
        await new Promise((resolve, reject) => {
            server.close(error => error ? reject(error) : resolve());
        });
    }
});
