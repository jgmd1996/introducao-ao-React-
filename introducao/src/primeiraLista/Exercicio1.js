

import { useState} from 'react';

function Exercicio1(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Expressões numéricas!");
        console.log(calculo1);
        console.log(calculo2);
        console.log(calculo3);
        console.log(calculo4);
        console.log(calculo5);
        console.log(calculo6);
        console.log(calculo7);
        console.log(calculo8);
        console.log(calculo9);
        console.log(calculo10);
    }

    const [calculo1, setcalculo1] = useState(4 + 6 * 2);
    const [calculo2, setcalculo2] = useState(10 / 5 + 8);
    const [calculo3, setcalculo3] = useState(12 / 4 + 16 / 2);
    const [calculo4, setcalculo4] = useState(17 + 20/ 5);
    const [calculo5, setcalculo5] = useState(22 / 5 + 7);
    const [calculo6, setcalculo6] = useState(39 / 10);
    const [calculo7, setcalculo7] = useState(19 % (2 + 3));
    const [calculo8, setcalculo8] = useState(3 + 4 * 20 / 3);
    const [calculo9, setcalculo9] = useState(36 % (6 + 2));
    const [calculo10, setcalculo10] = useState(8 % 2 * 0);
    

    
    
    return(
        <div>      
            <h1>Expressões numéricas</h1>
            <form onSubmit={cadastrarUsuario}>
                <label htmlFor="calculo1"></label>

                <div>
                    <input 
                    type="readonly" 
                    id="calculo1"
                    calculo1="calculo1"
                    placeholder="Caucular 4 + 6 * 2"
                    readOnly
                     
                    />
                </div>

                <div>
                    <input 
                    type="readonly" 
                    id="calculo2"
                    calculo1="calculo1"
                    placeholder="Caucular 10 / 5 + 8"
                    readOnly
                     
                    />
                </div>

                <div>
                    <input 
                    type="readonly" 
                    id="calculo3"
                    calculo1="calculo1"
                    placeholder="Caucular 12 / 4 + 16 / 2"
                    readOnly
                     
                    />
                </div>

                <div>
                    <input 
                    type="readonly" 
                    id="calculo4"
                    calculo1="calculo1"
                    placeholder="Caucular 17 + 20/ 5"
                    readOnly
                     
                    />
                </div>

                <div>
                    <input 
                    type="readonly" 
                    id="calculo5"
                    calculo1="calculo1"
                    placeholder="Caucular 22 / 5 + 7"
                    readOnly
                     
                    />
                </div>

                <div>
                    <input 
                    type="readonly" 
                    id="calculo6"
                    calculo1="calculo1"
                    placeholder="Caucular 39 / 10"
                    readOnly
                     
                    />
                </div>

                <div>
                    <input 
                    type="readonly" 
                    id="calculo7"
                    calculo1="calculo1"
                    placeholder="Caucular 19 % (2 + 3)"
                    readOnly
                     
                    />
                </div>

                <div>
                    <input 
                    type="readonly" 
                    id="calculo8"
                    calculo1="calculo1"
                    placeholder="Caucular 3 + 4 * 20 / 3"
                    readOnly
                     
                    />
                </div>

                <div>
                    <input 
                    type="readonly" 
                    id="calculo9"
                    calculo1="calculo1"
                    placeholder="Caucular 36 % (6 + 2)"
                    readOnly
                     
                    />
                </div>

                <div>
                    <input 
                    type="readonly" 
                    id="calculo10"
                    calculo1="calculo1"
                    placeholder="Caucular 8 % 2 * 0"
                    readOnly
                     
                    />
                </div>
              
                <div>
                    <input type="submit" value="Calcular" />
                </div>
                <div>
                <h1>Ezibir Expressões numéricas</h1>
                <p>Expressões numérica A : {calculo1}</p>
                <p>Expressões numérica B : {calculo2}</p>
                <p>Expressões numérica C : {calculo3}</p>
                <p>Expressões numérica D : {calculo4}</p>
                <p>Expressões numérica E : {calculo5}</p>
                <p>Expressões numérica F : {calculo6}</p>
                <p>Expressões numérica G : {calculo7}</p>
                <p>Expressões numérica H : {calculo8}</p>
                <p>Expressões numérica I : {calculo9}</p>
                <p>Expressões numérica J : {calculo10}</p>
                </div>
                
            </form>  
            
           
        </div>
        
    )
    
}

export default Exercicio1;




// Expressões numéricas – Qual é o valor numérico de cada uma das seguintes
// expressões numéricas? Considere as regras de prioridade dos operadores
// aritméticos ao responder.
// Dica: o operador MOD (ou %) retorna o resto da divisão inteira. Por exemplo, 7
// MOD 2 = 7 % 2 = 1 (a divisão inteira de 7 por 2 é 3 e o resto dessa divisão é 1. O
// operador MOD retorna esse resto).
// a. 4 + 6 * 2
// b. 10 / 5 + 8
// c. 12 / 4 + 16 / 2
// d. 17 + 20/ 5
// e. 22 / 5 + 7
// f. 39 / 10
// g. 19 % (2 + 3)
// h. 3 + 4 * 20 / 3
// i. 36 % (6 + 2)
// j. 8 % 2 * 0