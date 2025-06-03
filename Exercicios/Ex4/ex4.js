function validarData(){
    const entrada = document.getElementById("dataInput").value;
    validar(entrada, calcular);
}

function validar(entrada, callback){
    let padrao = /^\d{4}-\d{2}-\d{2}$/;
    if(!padrao.test(entrada)){
        console.log("Entrada inválida!");
        return;
    }
    let data = new Date(entrada);
    if(isNaN(data.getTime())){
        console.log("Data inválida!");
        return;
    }
    callback(data);
}

function calcular(date){
    let data = new Date();
    let tempodif = Math.abs(Number(data) - date);
    let diaDif = Math.ceil(tempodif / (1000*60*60*24));
    console.log(`A data fornecida está a ${diaDif} dias de hoje`);
}

