import { mkdir } from "node:fs/promises";
import { writeFile } from "node:fs/promises";
import { appendFile, existsSync, } from "node:fs";


export const logging = () => {
    try {
        if (existsSync("logs")) {
            console.log("folder already exists");
        }
        else {
            mkdir("logs")
            writeFile("logs/log.txt", "welcome!");
            console.log("created folder & file!");
        }
    } catch (error) {
        console.log(error);
    }

    let myData = "happy weekend!"
    appendFile("logs/log.txt", "\n" + myData, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

        // try {
    //     appendFile("logs/log.txt", "hello");
    //     console.log("created file!");
    // } catch (error) {
    //     console.log(error);
    // }
}


