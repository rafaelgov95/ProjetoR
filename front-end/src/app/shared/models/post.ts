

export class Post {
  public _id: string;
  public criada_em = new Date();

  constructor(
    public titulo: string,
    public resumo: string,
    public texto: string,
    public autor: string) { }

}
