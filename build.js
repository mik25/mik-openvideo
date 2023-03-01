const { exec } = require('child_process')

console.log('Building addon...')

const buildProcess = exec('npm run build')

buildProcess.stdout.on('data', data => console.log(data))
buildProcess.stderr.on('data', data => console.error(data))

buildProcess.on('exit', code => {
  if (code !== 0) {
    console.error(`Addon build failed with code ${code}`)
    process.exit(1)
  } else {
    console.log('Addon build succeeded')
  }
})
