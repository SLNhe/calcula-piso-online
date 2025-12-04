// Pegando inputs 

let larguraAmbiente = document.getElementById('larguraAmbiente');
let comprimentoAmbiente = document.getElementById('comprimentoAmbiente');

let larguraPiso = document.getElementById('larguraPiso');
let comprimentoPiso = document.getElementById('comprimentoPiso');

let perdaEstimada = document.getElementById('perda');
let consumoArgamassa = document.getElementById('consumoArgamassa');
let tamanhoRejunte = document.getElementById('tamanhoRejunte');

let enviarBtn = document.getElementById('enviar');
let limparBtn = document.getElementById('limpar');

main = document.getElementById('resultadoConta');

// ação no botao de enviar
enviarBtn.addEventListener('click', calcular);



//CALCULAR 

function calcular(){
    
    if (!larguraAmbiente.value || !comprimentoAmbiente.value  || !larguraPiso.value || !comprimentoPiso.value) {
    alert("Por Favor verifique os itens não");
    return;
}else{


    //area do ambiente
    let areaAmbiente = parseFloat(larguraAmbiente.value) * parseFloat(comprimentoAmbiente.value);


    //area piso 
    let areaPiso = parseFloat(larguraPiso.value/100) * parseFloat (comprimentoPiso.value/100);

    //quantidade de piso
    let quantidadePiso = Math.ceil(areaAmbiente / areaPiso);

    //quantidade piso com perda
    let pisoComPerda = Math.ceil(quantidadePiso * (1 + parseFloat(perdaEstimada.value)/100));

    //quantidade rejunte

    let largura = parseFloat(larguraPiso.value);           // cm
    let comprimento = parseFloat(comprimentoPiso.value);   // cm
    let junta = parseFloat(tamanhoRejunte.value);          // mm
    let espessura = 8;                                     // mm (padrão)

    // consumo por m² (rejunte)
    let quantidadeRejunte = ((largura + comprimento) / (largura * comprimento)) 
                        * espessura 
                        * junta 
                        * 1.6;

    // total Rejunte para o ambiente
    let totalRejunte = Math.ceil(quantidadeRejunte * areaAmbiente);


    //Quantidade de Argamassa
    let quantidadeArgamassa = areaAmbiente * parseFloat(consumoArgamassa.value);

    //Quantidade de Argamassa em pacote de 20kg
    let quantidadeArgamassaKg = Math.ceil(quantidadeArgamassa / 20);

    let resultado = `  <div class="resultado">
        <h2> Resultados </h2>

        <div class="resultadoAmbiente">
            <h3>Ambiente</h3> 
            <p>Area do ambiente: ${areaAmbiente.toFixed(2)}m²</p>
        </div>
        
        <div class="resultadoPiso">
            <h3>Quantidade de Pisos</h3>
            <p>Quantidade necessaria: ${quantidadePiso} unidades</p> 
            <p>Quantidade necessaria com perda estimada: ${pisoComPerda} unidades</p>
        </div>
        
        <div class="resultadoArgamassa">
            <h3>Quantidade de Argamassa</h3>
            <p>Quantidade necessaria em Kg: ${quantidadeArgamassa}kg</p> 
            <p>Quantidade de pacotes de 20kg: ${quantidadeArgamassaKg} pacotes</p>
        </div>
        
        <div class="resultadoRejunte">
            <h3>Rejunte</h3>
            <p>Quantidade de Rejunte: ${totalRejunte}kg</p> 
        </div>
        
    </div>`

    // add resultado
        main.innerHTML = resultado;
  
  }    
}

// FUNÇÃO BOTAO LIMPAR
limparBtn.addEventListener("click", () => {
    document.querySelectorAll("input").forEach(input => input.value = "");
    main.innerHTML = "";
});



