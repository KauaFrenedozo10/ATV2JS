function ValidarMaxCaracter() {
        let regex = document.getElementById('inputCaracter').value
        let tamanho = regex.length;
        if (tamanho > 10) {
            console.log("Só pode até 70 caracacteres")
            
        }else {
            
            console.log("enviado com sucesso")
        }
   
}