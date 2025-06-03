function separar(){
    console.log("oi");
    const nomes = document.getElementById("nomes").value;
    const erro = document.getElementById("erro");
    const resul = document.getElementById("resultados");

    if(!nomes.trim()){
        erro.textContent = "Insira pelo menos dois nomes";
    } else if(/[0-9]/.test(nomes)){
        erro.textContent = "Não insira números no lugar de nomes";
    }

    let entrada = nomes.split(",").map( n => n.trim()).filter(n => n.length > 0);
    
    console.log(entrada);

    if(entrada.length % 2 !== 0){
        erro.textContent = "Insira uma quantidade de nomes PAR, sem repetir e/ou usar símbolos";
        return;
    }

    const oi = [... new Set(entrada.filter(n => /^[A-Za-zÀ-ÿ ] + $/.test(n)))];
    //pega e instancia o set, que ja remove coisas duplicadas
    //usa regex

    //sorteia
    const aleatorio = entrada.sort(() => Math.random() - 0.5);
  
    for(let i = 0; i < aleatorio.length; i+=2){
        const dupla = `${aleatorio[i]} e ${aleatorio[i + 1]}`;
        resul.innerHTML += `<li>${dupla}</li>`;
        console.log(dupla);
    }
}