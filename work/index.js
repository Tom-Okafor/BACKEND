import fs from "fs";

/*fs.readFile("story.txt", "utf8", (data, err) => {
    if (err) throw err;
    fs.writeFile("story_copy.txt", data, err => {
        if (err) throw err;
        console.log("file created");
    });
});
*/
const DOCUMENT = fs.createReadStream("story.txt");
DOCUMENT.pipe(fs.createWriteStream("story1.txt"));
