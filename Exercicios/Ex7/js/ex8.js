class CalculadoraDeIdade {
    constructor(dataNasc) {
        this.dataNasc = new Date(dataNasc);
    }

    calcularIdade() {
        const hoje = new Date();
        let idade = hoje.getFullYear() - this.dataNasc.getFullYear();

        const m = hoje.getMonth() - this.dataNasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < this.dataNasc.getDate())) {
            idade--;
        } 
        
        return idade;
    }
}

function verIdade() {
    const data = document.getElementById("dataNasc").value;
    const calc = new CalculadoraDeIdade(data);
    const idade = calc.calcularIdade();

    document.getElementById("idade").innerText = `Você tem ${idade} anos.`;
}
