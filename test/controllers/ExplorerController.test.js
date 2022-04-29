const ExplorerController= require ("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController",() =>{
    test("Requerimiento 1: Calcular todos los explorers en una misión",()=>{  
        const explorersInNode =ExplorerController.getExplorersByMission("node");


        //lee la lista y me da el numero total de esa lista
        expect(explorersInNode.length).toBe(10);
    });

     test("Requerimiento 2: Calcular cantidad de todos los explorers en una misión",()=>{   
        const explorersInNode =ExplorerController.getExplorersAmonutByMission("node");
        //Ya no se usa el .length pues ya se regresa un numero
        expect(explorersInNode).toBe(10);
    });

     test("Requerimiento 3: mostrar username de todos los explorers en una misión",()=>{  
        const explorersInNode =ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersInNode[0]).toBe("ajolonauta1");
    });  
});