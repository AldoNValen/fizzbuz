const FizzbuzzService= require ("./../../lib/services/FizzbuzzService")

describe("Test para FizzbuzzService",() =>{
    test("Requerimiento 1: Enviar un explorer que tenga un score 1",()=>{
            const explorers= {name: "Explorer1", score: 1, trick : 1};
            const explorersScore =FizzbuzzService.applyValidationInExplorer(explorers);
            expect(explorersScore.trick).toBe(1);
    });

    test("Requerimiento 2: Enviar un explorer que tenga un score 3, debe ser 'FIZZ' ",()=>{
        const explorers= {name: "Explorer3", score: 3, trick : "prueba"};
        const explorersScore =FizzbuzzService.applyValidationInExplorer(explorers);
        expect(explorersScore.trick).toBe("FIZZ");
    });

    test("Requerimiento 3: Enviar un explorer que tenga un score 5, debe ser 'BUZZ' ",()=>{
        const explorers= {name: "Explorer5", score: 5, trick : "prueba"};
        const explorersScore =FizzbuzzService.applyValidationInExplorer(explorers);
        expect(explorersScore.trick).toBe("BUZZ");
    });
 
    test("Requerimiento 4: Enviar un explorer que tenga un score 5, debe ser 'FIZZBUZZ' ",()=>{
        const explorers= {name: "Explorer15", score: 15, trick : "prueba"};
        const explorersScore =FizzbuzzService.applyValidationInExplorer(explorers);
        expect(explorersScore.trick).toBe("FIZZBUZZ");
    });
});
