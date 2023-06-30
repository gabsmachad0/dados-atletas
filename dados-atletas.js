class Atleta{
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

    //para calcular a categoria do atleta;
    calculaCategoria(){
        let idade = this.idade
        if(idade >= 9 && idade <= 11){
            return "Infantil"
        }else if(idade >= 12 && idade <= 13){
            return "Juvenil"
        }else if(idade >= 14 && idade <= 15){
            return "Intermediário"
        }else if(idade >= 16 && idade <= 30){
            return "Adulto"
        }else{
            return "Sem categoria"
        }
    }

    //para calcular o IMC do atleta;
    calculaIMC(){
        let peso = this.peso
        let altura = this.altura
        return peso / (altura * altura)
    }
    
    //para calcular a média válida do atleta.
    calculaMediaValida(){}
    
    //que retorna o nome do atleta
    obtemNomeAtleta(){
        return this.nome
    }
    
    //que retorna a idade do atleta
    obtemIdadeAtleta(){
        return this.idade
    }
    
    //que retorna o peso do atleta
    obtemPesoAtleta(){
        return this.peso
    }

    //que retorna a altura do atleta (não pedia no exerício)
    obtemAlturaAtleta(){
        return this.altura
    }
    
    //que retorna as notas do atleta
    obtemNotasAtleta(){
        return this.notas.join(", ")
    }
    
    //que retorna a categoria do atleta
    obtemCategoria(){
        return this.calculaCategoria()
    }
    
    //que retorna o IMC do atleta
    obtemIMC(){
        return this.calculaIMC
    }
    
    //que retorna a média válida do atleta
    obtemMediaValida(){

        // acha a menor e maior notas
        let menor = 10
        let maior = 0
        for(let i = 0; i < this.notas.length; i++){
            if(this.notas[i] < menor){
                menor = this.notas[i]
            }
            if(this.notas[i] > maior){
                maior = this.notas[i]
            }
        }

        // soma e conta as notas válidas
        let soma = 0
        let qtdNotas = 0        
        for(let i = 0; i < this.notas.length; i++){            
            if(this.notas[i] != menor && this.notas[i] != maior){
                soma = soma + this.notas[i]
                qtdNotas = qtdNotas + 1 
            }
        }
        
        let mediaValida = soma / qtdNotas
        return mediaValida
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + atleta.obtemNomeAtleta())    
console.log("Idade: " + atleta.obtemIdadeAtleta())    
console.log("Peso: " + atleta.obtemPesoAtleta())    
console.log("Altura: " + atleta.obtemAlturaAtleta())
console.log("Notas: " + atleta.obtemNotasAtleta())    
console.log("Categoria: " + atleta.calculaCategoria())
console.log("IMC: " + atleta.calculaIMC())
console.log("Média válida: " + atleta.obtemMediaValida())
