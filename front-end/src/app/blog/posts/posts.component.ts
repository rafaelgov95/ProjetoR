import { ServicePost } from './../../shared/services/posts/ServicePost';
import { Post } from './../../shared/models/post';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  private id: string;
  post: Post;
  inscricao: Subscription;
  subpost: Subscription;

  constructor(private router: ActivatedRoute, private servicoPost: ServicePost) {
    this.post = new Post('','','','');


  }

  ngOnInit() {
   this.inscricao = this.router.params.subscribe(data => this.id = data['id'], err => console.log("erro"))
   this.subpost = this.servicoPost.getPost(this.id).subscribe(data => { this.post = data; console.log(this.post) }, err => console.log('erro'))
  //  this.servicoPost.emitterDelivery.emit(this.post)

  }
  ngOnDestroy() {
    this.subpost.unsubscribe();
    this.inscricao.unsubscribe();
  }
}
