import express from 'express'
import {createApp} from "./app.js";
import {renderToString} from 'vue/server-renderer'

const app = express()

app.use(express.static('.'))

app.get('/', (req, res) => {
  renderToString(createApp()).then(html => {
    res.send(`
      <html>
        <head></head>
        <body>
          <div id="app">${html}</div>
        </body>
        <script type="importmap">
        {
          "imports": {
            "vue": "/node_modules/vue/dist/vue.esm-browser.prod.js"
          }
        }
        </script>
        <script type="module" src="/client.js"></script>
      </html>
    `)
  })
})

app.listen(1024, () => {
  console.log(`server start on: http://127.0.0.1:1024`)
})