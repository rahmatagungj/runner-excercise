const Runner = require('./scripts/runner')

const runner = new Runner()

function caseThree() {
  runner.initialize(() => console.log("case three primary"))
  
  console.log("Runner three status are", runner.getStatus())

  runner.run()

  runner.initialize(() => {
    [1,2,3].forEach(number => console.log("case three", number))
  })

  runner.run()
}

caseThree()

console.log("Case Three is done")