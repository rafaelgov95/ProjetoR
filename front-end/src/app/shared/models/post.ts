

export class Post {
  public _id: string;

  constructor(
    public titulo: string,
    public resumo: string,
    public texto: string,
    public autor: string,
    public criada_em: Date
  ) { }


}