# dynamic import issue
Reproduction of dynamic import issue

## Versions
Deno
```
deno 1.36.0 (release, x86_64-unknown-linux-gnu)
v8 11.6.189.12
typescript 5.1.6
```

System
```
Distributor ID: Ubuntu
Description:    Ubuntu 20.04.6 LTS
Release:        20.04
Codename:       focal
```

## Reproduction
```bash
> deno run -A run_dynamic1.ts ./npm_import.ts
# [Module: null prototype] { default: true }

> deno run -A run_dynamic2.ts ./npm_import.ts
# [Module: null prototype] { default: true }

> deno run -A run_dynamic3.ts ./npm_import.ts
# error: Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'platform')
#     at Object.<anonymous> (file:///root/.cache/deno/npm/registry.npmjs.org/lightningcss/1.21.5/node/index.js:1:276)
#     at Object.<anonymous> (file:///root/.cache/deno/npm/registry.npmjs.org/lightningcss/1.21.5/node/index.js:29:4)
#     at Module._compile (node:module:731:36)
#     at Object.Module._extensions..js (node:module:745:12)
#     at Module.load (node:module:656:34)
#     at Function.Module._load (node:module:539:16)
#     at Module.require (node:module:675:23)
#     at require (node:module:789:20)
#     at file:///root/.cache/deno/npm/registry.npmjs.org/lightningcss/1.21.5/node/index.js:3:13
```

## Tests
Somehow all three work withing `Deno.test`
```bash
# deno test -A -- ./npm_import.ts
# running 4 tests from ./run_test.ts
# dynamic import with const module name ... ok (15ms)
# dynamic import with absolute "file://" path ... ok (6ms)
# dynamic import with absolute "file://" path and Deno.args ... ok (6ms)
# dynamic import with path from Deno.args ... ok (6ms)

# ok | 4 passed | 0 failed (52ms)
```