import { assert } from 'https://deno.land/std/assert/assert.ts'

Deno.test('dynamic import with const module name', async () => {
  assert((await import('./npm_import.ts')).default)
});

Deno.test('dynamic import with absolute "file://" path', async () => {
  assert((await import(import.meta.resolve('./npm_import.ts'))).default);
});

Deno.test('dynamic import with absolute "file://" path and Deno.args', async () => {
  assert((await import(import.meta.resolve(Deno.args[0]))).default);
});

Deno.test('dynamic import with path from Deno.args', async () => {
  assert((await import(Deno.args[0])).default);
});