//importando clases
const Reader = require("../lib/utils/Reader");
const ExplorerService = require("../lib/services/ExplorerService");
const FizzbuzzService = require("../lib/services/FizzbuzzService");

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

          return ExplorerService.getAmountOfExplorersByMission(explorers, mission)

    }

}
    
module.exports = ExplorerController;