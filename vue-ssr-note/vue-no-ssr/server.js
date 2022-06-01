import express from "express";
import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";

const server = express();

server.get("/", (req, res) => {
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `
            <div>
                <div> {{ count }} </div>
                <button @click="count++">+</button>
            </div>
        `,
  });
  renderToString(app).then((html) => {
    res.send(`
        <html>
            <head></head>
            <body>
                <div id="app">${html}</div>
            </body>
        </html>
    `);
  });
});

server.listen(1024, () => {
  console.log(`server start on: http://127.0.0.1:1024`);
});
