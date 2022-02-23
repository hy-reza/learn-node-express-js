const fs = require("fs").promises;

const createFile = async () => {
  for (let i = 1; i < 1000; i++) {
    await fs.writeFile("./big.txt", `Hello world - ${i}`, {
      flag: "a"
    });
  }
};

createFile();
