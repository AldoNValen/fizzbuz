const fs = require("fs");

class Reader {
   
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
        //const explorers = JSON.parse(rawdata); // lista del archivo json
    } 
}

module.exports=Reader