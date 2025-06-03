function ValidarMaxCaracter() {
        let regex = document.getElementById('inputCaracter').value
        let tamanho = regex.length;
        if (tamanho > 70) {
            console.log("Só pode até 70 caracacteres")
            
        }else {
            
            console.log("enviado com sucesso")
        }
   
}