const command = new Deno.Command(Deno.execPath(), {
  stdout: 'inherit',
  stderr: 'inherit',
  args: [
    'run',
    '-A',
    '-q',
    '--unstable',
    import.meta.resolve('./cmd.ts'),
    ...Deno.args
  ]
});

command.spawn();