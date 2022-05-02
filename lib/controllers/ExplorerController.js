//importando clases
const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController{

    static getExplorersByMission(mission){
        //Se llama la funcion reader para obtener la lista de los explorers
        const explorers = Reader.readJsonFile("explorers.json");

        //Se manda esta lista para que sea filtrada por mission
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        //Se llama la funcion reader para obtener la lista de los explorers
        const explorers = Reader.readJsonFile("explorers.json");

        //Se manda esta lista para que nos regrese la lista de usuarios
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);

    }

    static getExplorersAmonutByMission(mission){
        //Se llama la funcion reader para obtener la lista de los explorers
        const explorers = Reader.readJsonFile("explorers.json");

        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);

    }

    static applyFizzbuzz(score){
        return FizzbuzzService.applyValidationInNumber(score);
    }

}
    
module.exports = ExplorerController;