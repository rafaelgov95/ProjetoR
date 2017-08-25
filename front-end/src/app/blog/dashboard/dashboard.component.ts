import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Post } from './../../shared/models/post';
import { ServicePost } from './../../shared/services/posts/ServicePost';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  autor:string;
  adicionarPost = false;
  editar = false;
  Posts: any;
  editarPost: Post
  inscricao: Subscription;
  constructor(private servicePost: ServicePost, private router: Router) {

    if (localStorage.getItem('currentUser')) {
      this.autor = JSON.parse(localStorage.getItem('currentUser'))['nome'];
      this.adicionarPost = false;
    } else {
      this.adicionarPost = true;
    }
  }


  Editar(post: Post) {
    console.log("Estou enviando isso:",post)
    this.editarPost = post
    this.editar = true;
  }

  CancelarEditar() {
    this.editarPost = null;
    this.editar = false;
    console.log("Vai avisodo")
  }
  ngOnInit() {
    this.inscricao = this.servicePost.getPosts(this.autor).subscribe(data => this.Posts = Array.of(data) , erro => console.log('Erro'));
    
    this.servicePost.emitterDelivery.subscribe((post:any) => {
      let pos = this.Posts.indexOf(this.Posts.find(item => item._id === post._id));
      if (pos > -1){
        this.Posts[pos]=post
      } else {
        console.log(post)
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
