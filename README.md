# supabase-js svelte kit bug repro

## Requirements
- node >= 14

## Start
```bash
npm install
npm run dev -- --open
```

The line causing the bug is in index.svelte:
```js
  import { createClient } from '@supabase/supabase-js'
```

### Error message (browser)
```
500
[778:36]: Unexpected token: 'get'

SyntaxError: [778:36]: Unexpected token: 'get'
    at report (/home/andrew/Code/development/telebum3/web/node_modules/.pnpm/@sveltejs/kit@1.0.0-next.5/node_modules/node_modules/.pnpm/meriyah@3.0.3/node_modules/meriyah/dist/meriyah.esm.js:182:11)
    at matchOrInsertSemicolon (/home/andrew/Code/development/telebum3/web/node_modules/.pnpm/@sveltejs/kit@1.0.0-next.5/node_modules/node_modules/.pnpm/meriyah@3.0.3/node_modules/meriyah/dist/meriyah.esm.js:2096:9)
    at parseLetIdentOrVarDeclarationStatement (/home/andrew/Code/development/telebum3/web/node_modules/.pnpm/@sveltejs/kit@1.0.0-next.5/node_modules/node_modules/.pnpm/meriyah@3.0.3/node_modules/meriyah/dist/meriyah.esm.js:3024:9)
    at parseStatementListItem (/home/andrew/Code/development/telebum3/web/node_modules/.pnpm/@sveltejs/kit@1.0.0-next.5/node_modules/node_modules/.pnpm/meriyah@3.0.3/node_modules/meriyah/dist/meriyah.esm.js:2595:20)
    at parseBlock (/home/andrew/Code/development/telebum3/web/node_modules/.pnpm/@sveltejs/kit@1.0.0-next.5/node_modules/node_modules/.pnpm/meriyah@3.0.3/node_modules/meriyah/dist/meriyah.esm.js:2692:19)
    at parseTryStatement (/home/andrew/Code/development/telebum3/web/node_modules/.pnpm/@sveltejs/kit@1.0.0-next.5/node_modules/node_modules/.pnpm/meriyah@3.0.3/node_modules/meriyah/dist/meriyah.esm.js:2958:19)
    at parseStatement (/home/andrew/Code/development/telebum3/web/node_modules/.pnpm/@sveltejs/kit@1.0.0-next.5/node_modules/node_modules/.pnpm/meriyah@3.0.3/node_modules/meriyah/dist/meriyah.esm.js:2641:20)
    at parseStatementListItem (/home/andrew/Code/development/telebum3/web/node_modules/.pnpm/@sveltejs/kit@1.0.0-next.5/node_modules/node_modules/.pnpm/meriyah@3.0.3/node_modules/meriyah/dist/meriyah.esm.js:2611:20)
    at parseFunctionBody (/home/andrew/Code/development/telebum3/web/node_modules/.pnpm/@sveltejs/kit@1.0.0-next.5/node_modules/node_modules/.pnpm/meriyah@3.0.3/node_modules/meriyah/dist/meriyah.esm.js:3800:19)
    at parseFunctionExpression (/home/andrew/Code/development/telebum3/web/node_modules/.pnpm/@sveltejs/kit@1.0.0-next.5/node_modules/node_modules/.pnpm/meriyah@3.0.3/node_modules/meriyah/dist/meriyah.esm.js:4389:18)
```

## Build
```bash
npm run build
```

### Error message (command line)
```
 andrew  sveltekit-supabase-bug  npm run build

> sveltekit-supabase-bug@0.0.1 build /home/andrew/Code/development/sveltekit-supabase-bug
> svelte-kit build

Transforming...
  ✔ client
  ✔ server
Optimizing...
  ⧗ client
  ⧗ server
> 'process' is imported but could not be bundled
Error: 'process' is imported but could not be bundled
    at error (/home/andrew/Code/development/sveltekit-supabase-bug/node_modules/rollup/dist/shared/rollup.js:5265:30)
    at throwPluginError (/home/andrew/Code/development/sveltekit-supabase-bug/node_modules/rollup/dist/shared/rollup.js:17949:12)
    at Object.error (/home/andrew/Code/development/sveltekit-supabase-bug/node_modules/rollup/dist/shared/rollup.js:18556:24)
    at find_deps (/home/andrew/Code/development/sveltekit-supabase-bug/node_modules/@sveltejs/kit/src/api/build/index.js:164:13)
    at /home/andrew/Code/development/sveltekit-supabase-bug/node_modules/@sveltejs/kit/src/api/build/index.js:159:11
    at Array.forEach (<anonymous>)
    at find_deps (/home/andrew/Code/development/sveltekit-supabase-bug/node_modules/@sveltejs/kit/src/api/build/index.js:154:17)
    at get_deps (/home/andrew/Code/development/sveltekit-supabase-bug/node_modules/@sveltejs/kit/src/api/build/index.js:174:7)
    at /home/andrew/Code/development/sveltekit-supabase-bug/node_modules/@sveltejs/kit/src/api/build/index.js:188:37
    at Array.forEach (<anonymous>)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! sveltekit-supabase-bug@0.0.1 build: `svelte-kit build`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the sveltekit-supabase-bug@0.0.1 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/andrew/.npm/_logs/2020-12-04T19_14_36_594Z-debug.log
```
