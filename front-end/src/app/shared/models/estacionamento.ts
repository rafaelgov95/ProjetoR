class Localizacao {
    constructor(
  ){  }

        public lat: number;
        public lng: number;
}



export class Estacionamento {
  
    constructor(
        public _id: string,
        public proprietario: string,
        public nome: string,
        public nome_fantasia: string,
        public cnpj: string,
        public lat:number,
        public lng:number,
        // public endereco: [{ rua: string, bairro: string, numero: number }],
        // public servicos: [{ nome: string }],
        public situacao: boolean,
      
        // public funcionarios: [{ id_funcionario: string }],
          ) { }
        public criada_em: string
 
  public localizacao:Localizacao = new Localizacao();
}
