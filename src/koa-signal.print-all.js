import { dim } from 'chalk'
import Signal from './koa-signal.js'
const signal = new Signal()

console.log()
console.log(dim('-- Process functions'))

signal.start('Starting!')
signal.end('Stopping!')
signal.success('Everything worked out okay')

console.log()
console.log(dim('-- Runtime functions'))

signal.trace({
  state: { id: '123456-7890=1232' },
  timeDiff: 1232,
  initDiff: 5423,
  scope: 'scope'
}, 'This is happening')

signal.info('This is an info message')
signal.warn('This is a warning message')
signal.error('Error message', new Error('This is an error'))

console.log()
console.log(dim('-- Logging functions'))

signal.access({ req: { path: '/post/to/a/path', method: 'POST' }, res: { responseTime: 200, statusCode: 503 } })
signal.access({ req: { path: '/get/a/resource', method: 'GET' }, res: { responseTime: 1232, statusCode: 200 } })
signal.access({ req: { path: '/unknown', method: 'GET' }, res: { responseTime: 1232, statusCode: 404 } })
