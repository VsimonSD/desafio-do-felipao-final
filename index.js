//Declarando classe com construtor
class hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.tipoAtaque = this.ataque();
  }

  //Criando método para verificar o tipo de ataque baseado na classe/tipo do herói
  ataque() {
    let tipoAtaque = "";

    if (this.tipo === "mago") {
      tipoAtaque = "magia";
    } else if (this.tipo === "guerreiro") {
      tipoAtaque = "espada";
    } else if (this.tipo === "monge") {
      tipoAtaque = "artes marciais";
    } else if (this.tipo === "ninja") {
      tipoAtaque = "shuriken";
    } else {
      tipoAtaque = undefined;
    }
    return tipoAtaque;
  }

  //Método para retornar o texto final
  retornoAtaque() {
    console.log(`O tipo ${this.tipo} atacou usando ${this.tipoAtaque}`);
  }
}

//Declarando variável para atribuir valor aos parâmetros do construtor na classe hero
let heroiBolado = new hero("vitor", 23, "ninja");

//Retornando o texto final
heroiBolado.retornoAtaque();

//Iniciando loop para jogar novamente
console.log(`Deseja jogar novamente? Digite sim ou não`);

let playAgain = "sim";
let repeat = 1;

//Se o jogador escolher jogar novamente, pode escolhar em qual nível o loop deve parar. Até lá, o código incrementa mais um na variável 'repeat' para repetir apenas uma vez
if (playAgain === "nao") {
  console.log("Atualize abaixo os atributos que deseja alterar");

  do {
    repeat++;
    heroiBolado = new hero("rotiv", 32, "mago");
  } while (repeat <= 2);

  heroiBolado.retornoAtaque();

  //Caso o jogador escolha encerrar, aparece o agradecimento
} else {
  console.log("Obrigado por jogar conosco!");
}
