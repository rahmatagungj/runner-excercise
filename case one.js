const Runner = require('./scripts/runner')

const runner = new Runner()

function caseOne() {
  runner.initialize(() => console.log("case one"))
  
  console.log("Runner one status are", runner.getStatus())

  runner.run().log()

  runner.reset()

  runner.log()

  runner.run()
}

caseOne()

console.log("Case One is done")