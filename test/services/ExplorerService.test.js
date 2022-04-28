
const ExplorerService= require ("./../../lib/services/ExplorerService")

describe("Test para ExplorerService",() =>{
    test("Requerimiento 1: Calcular todos los explorers en una misión",()=>{
            const explorers= [{mission:"node"}];
            const explorersInNode =ExplorerService.filterByMission(explorers,"node");
            expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 2: Calcular cantidad de todos los explorers en una misión",()=>{
        const explorers= [{mission:"node"}];
        const explorersInNode =ExplorerService.getAmountOfExplorersByMission(explorers,"node");
        //Ya no se usa el .length pues ya se regresa un numero
        expect(explorersInNode).toBe(1);
    });

    test("Requerimiento 3: mostrar username de todos los explorers en una misión",()=>{
        const explorers= [{mission:"node",githubUsername:"ExplorarConejo"}];
        const explorersInNode =ExplorerService.getExplorersUsernamesByMission(explorers,"node");
        expect(explorersInNode[0]).toBe("ExplorarConejo");
    });
});