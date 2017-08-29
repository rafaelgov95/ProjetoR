

export class Post {
  public _id: string;

  constructor(
    public titulo: string,
    public resumo: string,
    public imagen: string,
    public texto: string,
    public autor: string,
    public dev: boolean,
    public criada_em: Date
  ) { }


}
