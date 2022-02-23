const fs = require("fs");

const firstPath = "./content/first.txt";

//read file sync
const fileSync = fs.readFileSync(firstPath);
console.info(fileSync.toString());

//write file sync
fs.writeFileSync(firstPath, "This is the new first text file", {
  flag: "a", //untuk membuat contnet di new line (append) gak di tumpuk (overide)
});


console.log("end")