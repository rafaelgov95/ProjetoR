import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }
  LOGO = {'background': 'url(./assets/img/logo.jpg) center center / cover no-repeat'}
  Posts = []

 
  ngOnInit() {
    this.Posts.push({Id:'post',Titulo:'Como utilizar o CLION como IDE para programar o seu Micro-Controlador',Texto:'Chega de ficar adivinhando as funções das bibliotecas de seu micro-controlor.',Autor:'Rafael Viana'})
    this.Posts.push({Id:'post',Titulo:'Como utilizar o CLION como IDE para programar o seu Micro-Controlador',Texto:'Chega de ficar adivinhando as funções das bibliotecas de seu micro-controlor.',Autor:'Rafael Viana'})
  }



}
