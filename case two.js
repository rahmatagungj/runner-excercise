const Runner = require('./scripts/runner')

const runner = new Runner()

function caseTwo() {
  runner.initialize(() => console.log("case two"))
  
  console.log("Runner two status are", runner.getStatus())
  
  runner.run().log()

  runner.run()
}

caseTwo()

console.log("Case Two is done")