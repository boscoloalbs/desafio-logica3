//Código para Classe do Herói
class hero{
    constructor(heroName, heroAge, heroClass){
      this.heroName = heroName
      this.heroAge = heroAge
      this.heroClass = heroClass
    }
//Método para ataque do Herói
    atack(){
      console.log(`o ${this.heroName} de ${this.heroAge} anos, atacou usando ${this.heroClass}`)
    }
  }
  
//Definição das Classes
let classMage = new hero("Mago", "78", "Magia")
let classWarrior = new hero("Guerreiro", "32", "Espada")
let classMonk = new hero("Monge", "57", "Artes Marciais")
let classNinja = new hero("Ninja", "25", "Shuriken")

//Saída
classMage.atack()
classWarrior.atack()
classMonk.atack()
classNinja.atack()