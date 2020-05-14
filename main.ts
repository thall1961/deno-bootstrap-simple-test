import { listenAndServe } from './server.bundle.js'
import html from './index.js'

(async function start() {
    const body = new TextEncoder().encode(html);
    const options = { port: 8000 };
    listenAndServe(options, (req: any) => {
        console.log(options);
        req.respond({ body });
    });
})();