/**
 * Dev-only Vite middleware: GET/POST /api/profile → src/data/profile.json
 * Not included in production builds.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROFILE_JSON = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  'src/data/profile.json',
);

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

export function profileEditorApi() {
  return {
    name: 'profile-editor-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url !== '/api/profile') return next();

        res.setHeader('Content-Type', 'application/json');

        if (req.method === 'GET') {
          try {
            const raw = fs.readFileSync(PROFILE_JSON, 'utf8');
            res.statusCode = 200;
            res.end(raw);
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: String(err) }));
          }
          return;
        }

        if (req.method === 'POST') {
          try {
            const body = await readBody(req);
            const parsed = JSON.parse(body);
            if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Body must be a profile object' }));
              return;
            }
            for (const key of ['name', 'headline', 'bio', 'about', 'experience']) {
              if (!(key in parsed)) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: `Missing required field: ${key}` }));
                return;
              }
            }
            fs.writeFileSync(PROFILE_JSON, JSON.stringify(parsed, null, 2) + '\n', 'utf8');
            res.statusCode = 200;
            res.end(JSON.stringify({ ok: true }));
          } catch (err) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: String(err) }));
          }
          return;
        }

        res.statusCode = 405;
        res.end(JSON.stringify({ error: 'Method not allowed' }));
      });
    },
  };
}
