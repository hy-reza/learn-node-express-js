const fs = require("fs").promises;

const createFile = async () => {
  for (let i = 1; i < 1000; i++) {
    await fs.writeFile("./content/bigOne.txt", `Hello world - ${i}\n`, {
      flag: "a"
    });
  }
};

createFile();
