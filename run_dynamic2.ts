import path from 'node:path';

const relPath = './' + path.relative(
  path.dirname(import.meta.url.replace('file://', '')),
  import.meta.resolve(Deno.args[0]).replace('file://', '')
);

console.log(await import(relPath));