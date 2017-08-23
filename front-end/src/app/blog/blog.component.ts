import { EmitterDelivery } from './../shared/services/EmitterDelivery/EmitterDelivery';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Post } from './../shared/models/post';
import { ServicePost } from './../shared/services/posts/ServicePost';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  adicionarPost = false;
  Posts: Post[];
  editarPost: Post
  inscricao: Subscription;
  constructor(private servicePost: ServicePost, private router: Router) {

    if (localStorage.getItem('currentUser')) {
      this.adicionarPost = false;
    } else {
      this.adicionarPost = true;
    }
  }

  // LOGO = { 'background': 'url(./assets/img/logo.jpg) center center / cover no-repeat' }

  Editar(post: Post) {
    console.log("Estou enviando isso:",post)
    this.editarPost = post
  }

  CancelarEditar() {
    this.editarPost = null;

  }
  ngOnInit() {
    this.inscricao = this.servicePost.getAll().subscribe(data => this.Posts = data, erro => console.log('Erro'));
    this.servicePost.emitterDelivery.subscribe((post:any) => {
      let pos = this.Posts.indexOf(this.Posts.find(item => item._id === post._id));
      console.log(pos)
      if (pos > -1){
        console.log("Esse cara ja existe vamos atualizar")
        this.Posts.splice(pos,1)
        this.Posts[pos]=post
      } else {
        console.log("novo cara adicionado")
        this.Posts.push(post);
      }

    })
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  Remove(post: Post) {
    this.servicePost.remove(post)
      .subscribe(data => { this.Posts.splice(this.Posts.indexOf(post), 1), console.log(post) }, err => console.log(err));
  }
}
