import { useState} from 'react';

function Execicio2 () {

    function registarTipoDeDado(evento){
        evento.preventDefault()
        console.log("Expressões numéricas!");
        console.log(questaoA);
        console.log(questaoB);
        console.log(questaoC);
        console.log(questaoD);
        console.log(questaoE);
        console.log(questaoF);
        console.log(questaoG);
        console.log(questaoH);
        console.log(questaoI);
        console.log(questaoJ);
        console.log(questaoK);
        console.log(questaoL);
        console.log(questaoM);
        console.log(questaoN);
        console.log(questaoO);
        console.log(questaoP);
        console.log(questaoQ);
        console.log(questaoR);
        console.log(questaoS);
        console.log(questaoT);
        console.log(questaoU);
        console.log(questaoV);

        console.log("Explicaçao!");
        console.log(explicacaoA);
    }


    const [questaoA, setQuestaoA] = useState();
    const [explicacaoA, setExplicacaoA] = useState();
    const [questaoB, setQuestaoB] = useState();
    const [explicacaoB, setExplicacaoB] = useState();
    const [questaoC, setQuestaoC] = useState();
    const [explicacaoC, setExplicacaoC] = useState();
    const [questaoD, setQuestaoD] = useState();
    const [explicacaoD, setExplicacaoD] = useState();
    const [questaoE, setQuestaoE] = useState();
    const [explicacaoE, setExplicacaoE] = useState();
    const [questaoF, setQuestaoF] = useState();
    const [explicacaoF, setExplicacaoF] = useState();
    const [questaoG, setQuestaoG] = useState();
    const [explicacaoG, setExplicacaoG] = useState();
    const [questaoH, setQuestaoH] = useState();
    const [explicacaoH, setExplicacaoH] = useState();
    const [questaoI, setQuestaoI] = useState();
    const [explicacaoI, setExplicacaoI] = useState();
    const [questaoJ, setQuestaoJ] = useState();
    const [explicacaoJ, setExplicacaoJ] = useState();
    const [questaoK, setQuestaoK] = useState();
    const [explicacaoK, setExplicacaoK] = useState();
    const [questaoL, setQuestaoL] = useState();
    const [explicacaoL, setExplicacaoL] = useState();
    const [questaoM, setQuestaoM] = useState();
    const [explicacaoM, setExplicacaoM] = useState();
    const [questaoN, setQuestaoN] = useState();
    const [explicacaoN, setExplicacaoN] = useState();
    const [questaoO, setQuestaoO] = useState();
    const [explicacaoO, setExplicacaoO] = useState();
    const [questaoP, setQuestaoP] = useState();
    const [explicacaoP, setExplicacaoP] = useState();
    const [questaoQ, setQuestaoQ] = useState();
    const [explicacaoQ, setExplicacaoQ] = useState();
    const [questaoR, setQuestaoR] = useState();
    const [explicacaoR, setExplicacaoR] = useState();
    const [questaoS, setQuestaoS] = useState();
    const [explicacaoS, setExplicacaoS] = useState();
    const [questaoT, setQuestaoT] = useState();
    const [explicacaoT, setExplicacaoT] = useState();
    const [questaoU, setQuestaoU] = useState();
    const [explicacaoU, setExplicacaoU] = useState();
    const [questaoV, setQuestaoV] = useState();
    const [explicacaoV, setExplicacaoV] = useState();
    

    return(
        <div>
            <h1>Tipos de dados</h1>
            <form onSubmit={registarTipoDeDado}>
                <label htmlFor="tiposDeDados"></label>

                <div>
                    <table border="25" align='CENTER'>
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="explicacaoA"
                    name="explicacaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>

                <div>
                    <table border="25">
                    <th>A- O número de irmãos que você tem?</th> 
                    <tr><th>Escolha o melhor tipo de dados</th> </tr>
                    
                    <tr><th>
                    STRING
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="STRING"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    NUMBER
                    <input 
                    type="RADIO" 
                    id="questaoA"
                    name="questaoA"
                    value="NUMBER"
                    onChange={(evento) => setQuestaoA(evento.target.value)}
                    />
                    </th></tr>

                    <tr><th>
                    forneça um exemplo de um valor típico que seria mantido pela variável
                    e explique por que você escolheu o tipo escolhido.
                    </th></tr>

                    <tr><th>
                    <input 
                    type="text"
                    required
                    id="questaoA"
                    name="questaoA"
                    placeholder="Explique"
                    value={explicacaoA}
                    onChange={(evento) => setExplicacaoA(evento.target.value)}
                    />
                    </th></tr>
                    </table> 
                </div>




                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Execicio2;



// Tipos de dados – Escolha o melhor tipo de dados para cada uma das situações
// abaixo e forneça um exemplo de um valor típico que seria mantido pela variável
// e explique por que você escolheu o tipo escolhido.
// a. o número de irmãos que você tem
// b. seu conceito nesta aula
// c. a quantidade de minutos de um ano
// d. a idade de uma pessoa
// e. a média da idade dos estudantes dessa classe
// f. a população da terra
// g. a temperatura média de ontem
// h. o nome de uma novela brasileira
// i. a potência nominal de uma lâmpada
// j. a potência real de uma lâmpada, aferida pelo Inmetro
// k. a população de um município
// l. o peso de uma pessoa
// m. a velocidade do vento na região de uma determinada usina eólica
// n. a altura de uma pessoa em metros
// o. a altura de uma pessoa em centímetros
// p. a cotação do dólar em reais
// q. pontuação de um time em um jogo de basquete
// r. o preço de uma TV
// s. o salário de um ministro de Estado
// t. o nome de um presidente da velha república
// u. o número de pernas de um animal
// v. o preço de um automóvel