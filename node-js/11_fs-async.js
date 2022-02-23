const fs = require("fs");

const firstPath = "./content/first.txt";
const secondPath = "./content/second.txt";


//read file async using callback
fs.readFile(secondPath, (err, content) => {
  if (err) console.error(err);
  console.info(content.toString());
});


//write file async using callback
fs.writeFile(secondPath, "This is the new second text file", "utf-8", (err) => {
  if (err) console.error(err);
});
 