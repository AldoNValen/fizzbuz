const Reader= require ("./../../lib/utils/reader")

    describe("Test para Reader",() =>{
        
        test("Requerimiento 1: leer un archivo json",()=>{
                const explorers = Reader.readJsonFile("explorers.json");              
                expect(explorers[0].name).toBe("Woopa1");
        });

   
});