import { Hono } from 'hono';
import { prettyJSON } from 'hono/pretty-json';

const app = new Hono();
app.use('*', prettyJSON()); // With options: prettyJSON({ space: 4 })

app.get('/health-check', ctx => {
  return ctx.json({
    message: 'OK',
  });
});

// Cloudflare Module Worker syntax.
export default app;

// Or Service Worker mode:
// app.fire()
