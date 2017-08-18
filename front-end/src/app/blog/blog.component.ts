import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Post } from './../shared/models/post';
import { ServicePost } from './../shared/services/posts/ServicePost';
import { Component, OnInit } from '@angular/core';
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
  inscricao: Subscription;
  constructor(private servicePost: ServicePost, private router: Router) {

    if (localStorage.getItem('currentUser')) {
      this.adicionarPost = false;
    } else {
      this.adicionarPost = true;
    }
  }
  LOGO = { 'background': 'url(./assets/img/logo.jpg) center center / cover no-repeat' }


  ngOnInit() {
    this.inscricao = this.servicePost.getAll().subscribe(data => this.Posts = data, erro => console.log('Erro'));
    this.servicePost.emitterDelivery.subscribe(post => this.Posts.push(post))
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  Remove(post: Post) {
    this.servicePost.remove(post)
      .subscribe(data => {this.Posts.splice(this.Posts.indexOf(post), 1), console.log(post)}, err => console.log(err));
  }

}
