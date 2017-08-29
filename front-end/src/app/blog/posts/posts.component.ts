import { ServicePost } from './../../shared/services/posts/ServicePost';
import { Post } from './../../shared/models/post';
import { ActivatedRoute, Router } from '@angular/router';
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
  LOGO

  constructor(private router: ActivatedRoute, private route: Router, private servicoPost: ServicePost) {
    this.post = new Post('', '', '', '', '', new Date);
 
  }
  ngOnChanges(changes: any) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(caches)
  }
  ngOnInit() {

    this.inscricao = this.inscricao = this.router.params.subscribe(data => {
      this.id = data['id'], console.log(this.id)
    }, err => console.log("erro"))

    this.subpost = this.servicoPost.getPost(this.id).subscribe(data => {
      console.log(data)
      this.post = data
      this.LOGO = {
        'background': 'url(' + this.post.imagen + ')  ',
        'width': '100%',
        'background-attachment': 'fixed',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover'
      }
      console.log(this.post)
    }
      , err => { console.log('erro') })
  }
  ngOnDestroy() {
    this.subpost.unsubscribe();
    this.inscricao.unsubscribe();
  }
}
