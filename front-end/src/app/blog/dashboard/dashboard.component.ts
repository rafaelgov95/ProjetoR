import { DialogsService } from './../../shared/dialog/dialogs.service';
import { ModalContentComponent } from './../../shared/components/confirmacao/confirmacao';
import { CustomOption } from './../../shared/components/toast/ng2-toast-config';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Post } from './../../shared/models/post';
import { ServicePost } from './../../shared/services/posts/ServicePost';
import { Component, OnInit,ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {DataSource} from '@angular/cdk';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
//-- Paginetor
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  autor: string;
  public result: any;
  adicionarPost = false;
  editar = false;
  Posts: any;
  editarPost: Post
  inscricao: Subscription;
  constructor(private dialogsService: DialogsService, private servicePost: ServicePost, private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    if (localStorage.getItem('currentUser')) {
      this.autor = JSON.parse(localStorage.getItem('currentUser'))['nome'];
      this.adicionarPost = false;
    } else {
      this.adicionarPost = true;
    }
  }

  public openDialogRemove(post) {
    this.dialogsService
      .confirm('Confirmação de Exclusão.', 'Deseja mesmo excluir essa postagem?')
      .subscribe(res => {
        this.result = res
        if (this.result == true) {
          this.servicePost.remove(post)
            .subscribe(data => { this.Posts.splice(this.Posts.indexOf(post), 1), console.log(post), this.RemoveShowSuccess() }, err => console.log(err));
        } else {
          this.CanceladoshowRemoverPost()
        }

      });

  }
  UpdateShowSuccess() {
    this.toastr.success('Post Atualizado !', 'Sucesso!');
  }
  AdicionadoShowSuccess() {
    this.toastr.success('Post Adicionado !', 'Sucesso!');
  }
  RemoveShowSuccess() {
    this.toastr.success('Post Removido !', 'Sucesso!');
  }
  CanceladoShowSuccess() {
    this.toastr.warning('Post Cancelado !', 'Cancelado!');
  }
  CanceladoshowRemoverPost() {
    this.toastr.warning('Remoção Cancelada', 'Cancelado!');
  }
  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  Editar(post: Post) {
    console.log("Estou enviando isso:", post)
    this.editarPost = post
    this.editar = true;
  }

  CancelarEditar() {
    this.editarPost = null;
    this.editar = false;
    console.log("Vai avisado")
    this.CanceladoShowSuccess()
  }
  @ViewChild(MdPaginator) paginator: MdPaginator;
  ngOnInit() {
    this.inscricao = this.servicePost.getPosts(this.autor).subscribe(data => this.Posts = data, erro => console.log('Erro'));
    this.servicePost.emitterDelivery.subscribe((post: any) => {
      let pos = this.Posts.indexOf(this.Posts.find(item => item._id === post._id));
      if (pos > -1) {
        this.UpdateShowSuccess();
        this.Posts[pos] = post
        this.editar = false;
      } else {
        this.AdicionadoShowSuccess();
        this.Posts.push(post);
      }

    })

  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
