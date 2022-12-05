const { read } = require("../../utils/file")

const getNumberOfStacks = (rawStacks) => {
  const lastLine = rawStacks[rawStacks.length - 1]
  return lastLine.replace(/\s/g, "").split("").length
}

const fillStacks = (rawStacks, numberOfStacks) => {
  const stacks = []
  for (let i = 0; i < numberOfStacks; i++) {
    stacks.push([])
  }

  for (let i = 0; i < numberOfStacks; i++) {
    for (let j = rawStacks.length - 2; j >= 0; j--) {
      const line = rawStacks[j].match(/.{3,4}/g)
      const currentCrate = line[i]
      if (currentCrate.replace(/\s/g, "").length === 0) {
        continue
      } else {
        const currentLetter = currentCrate[1]
        stacks[i].push(currentLetter)
      }
    }
  }
  return stacks
}

const trimMoves = (moves) => {
  return moves.map((move) => {
    const splitMove = move.split(" ")
    return (numbers = splitMove
      .map((item) => {
        return item.replace(/\D/g, "")
      })
      .filter((item) => {
        return item.length > 0
      })
      .map((item) => {
        return parseInt(item)
      }))
  })
}

const moveCrate = (stacks, move) => {
  const [numberOfCrates, fromStack, toStack] = move
  const cratesToMove = stacks[fromStack - 1].splice(-numberOfCrates)  // the new crate mover can move multiple crates at a time so no need to reverse
  stacks[toStack - 1].push(...cratesToMove)
}

const getUpperCrates = (stacks) => {
  return stacks.map((stack) => {
    return stack[stack.length - 1]
  })
}

const main = () => {
  const input = read("./input.txt")
  const splitInput = input.split("\n\n")
  const rawStacks = splitInput[0].split("\n")
  const moves = splitInput[1].split("\n").filter((move) => move !== '');

  const numberOfStacks = getNumberOfStacks(rawStacks)
  const stacks = fillStacks(rawStacks, numberOfStacks)

  const trimmedMoves = trimMoves(moves)

  trimmedMoves.forEach((move) => {
    moveCrate(stacks, move)
  });

  return getUpperCrates(stacks).join("")
}

console.log(main())
