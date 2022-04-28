//const fs = require("fs");

/* // Part 1 Read json file ===========================
const rawdata = fs.readFileSync("explorers.json");
const explorers = JSON.parse(rawdata); // lista del archivo json 
console.log("hola estoy aqui")

console.log(explorers)           */

//refactorizado ,/* // Part 1 Read json file ===========================
//se esta enviando un path a la clase , esta lo recibe , lo regresa con sus funciones, en este caso la de leer un json
const Reader = require("./lib/utils/reader");
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
console.log(explorers)


// // Part 2: Get the quantity of explorers names in node
 // const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
 //console.log("explorar en node:" + explorersInNode.length) 

// Part4: Get the explorer's usernames in Node
/* const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
console.log(usernamesInNode) */

//EXPLORER SERVICE
// Aplicación del ExplorerService sobre la lista de explorers
const ExplorerService= require("./lib/services/ExplorerService")
console.log("lista filtrada***************************************************")


//explorers que estan en la mision "node"
console.log(ExplorerService.filterByMission(explorers, "node"));

//cantidad de explorerers en mision "node"
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));

//nombre de usuarios 
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));


const FizzbuzzService= require("./lib/services/FizzbuzzService")

const explorer1 = {name: "Explorer1", score: 1}
console.log(FizzbuzzService.applyValidationInExplorer(explorer1)) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
console.log(FizzbuzzService.applyValidationInExplorer(explorer15)) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
// Part 8: Get a list of the explorers in node, 
/* if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, 
if is just divisible by 5 set the property trcik and the value BUZZ, 
if is just divisible by 3 set the property trick and the value FIZZ, 
otherwise set the property trick and the score value. TODO */
