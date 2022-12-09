const { read } = require("../../utils/file")

const main = () => {
  const input = read("./input.txt")
  const lines = input.split("\n").filter((line) => line !== "")

  let currentDirectory = []
  let directories = {}

  lines.forEach((line) => {
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
        const directoryPath = currentDirectory.length
          ? currentDirectory.join("/") + "/" + directory
          : directory
        directories[directoryPath] = 0
      } else {
        const fileSize = parseInt(line.split(" ")[0], 10)
        const directory = currentDirectory.length
          ? currentDirectory.join("/")
          : "/"
        if (!directories[directory]) {
          directories[directory] = fileSize
        } else {
          directories[directory] += fileSize
        }
      }
    }
  })

  let totalSize = 0

  function findSize(directory, directories) {
    let size = directories[directory]
    for (const subDirectory in directories) {
      if (subDirectory.startsWith(directory + "/")) {
        size += findSize(subDirectory, directories)
      }
    }
    return size
  }
  
  for (const directory in directories) {
    const size = findSize(directory, directories)
    if (size <= 100000) {
      totalSize += size
    }
  }

  return totalSize;
}

console.log(main())
