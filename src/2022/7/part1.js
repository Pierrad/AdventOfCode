const { read } = require("../../utils/file")

const main = () => {
  const input = read("./input.txt")
  const lines = input.split("\n").filter((line) => line !== "")

  let currentDirectory = []
  let directories = {}

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith("$")) {
      const command = line.split(" ")[1]

      if (command === "cd") {
        const directory = line.split(" ")[2]

        if (directory === "..") {
          currentDirectory.pop()
        } else {
          if (directory !== "/") {
            currentDirectory.push(directory)
          }
        }
      }
    } else {
      if (line.startsWith("dir")) {
        const directory = line.split(" ")[1]
        const directoryPath = currentDirectory.join("/") + "/" + directory
        directories[directoryPath] = 0
      } else {
        const fileSize = parseInt(line.split(" ")[0], 10)
        const directory = currentDirectory.join("/")
        directories[directory] += parseInt(fileSize, 10)
      }
    }
  }

  console.log(directories)

  let sum = 0
  for (let dirName in directories) {
    if (directories[dirName] <= 100000) {
      sum += directories[dirName];
    }
  }
  return sum
}

console.log(main())
