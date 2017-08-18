import { ServicePost } from './../../shared/services/posts/ServicePost';
import { Post } from './../../shared/models/post';
import { Component, Input, Output, forwardRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'htmleditor-component',
  templateUrl: 'htmleditor.component.html'

})
export class HtmleditorComponent implements OnInit {
  post: Post;
  HtmlEditor: FormGroup;
  esconder = false;
  constructor(private fb: FormBuilder,
    private servicePost: ServicePost) {

    this.post = new Post('', '', '', '');
    if (localStorage.getItem('currentUser')) {
      this.post.autor = JSON.parse(localStorage.getItem('currentUser'))['nome']
    }
  }

  onSubmit(evento) {

    this.servicePost.create(evento).subscribe(data => console.log(data), err => console.log("Erro"))
    this.servicePost.emitterDelivery.emit(evento)
    this.HtmlEditor.reset()
    
    this.buildForm();
  }

  ngOnInit() {
    this.buildForm();

  }
  buildForm(): void {
    this.HtmlEditor = this.fb.group({
      'titulo': [this.post.titulo, [Validators.required, Validators.minLength, Validators.maxLength]],
      'resumo': [this.post.resumo, [Validators.required, Validators.minLength, Validators.maxLength]],
      'texto': [this.post.texto, [Validators.required, Validators.minLength]],
      'autor': [this.post.autor, [Validators.required]],
      'criada_em':[this.post.criada_em]
    });


    this.HtmlEditor.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.HtmlEditor) { return; }
    const form = this.HtmlEditor;
    console.log(form)
    for (const field in this.formErrors) {
      // console.log(field)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'titulo': '',
    'resumo': '',
    'texto': ''
  };

  validationMessages = {
    'titulo': {
      'required': 'Titulo de usuário requerido.',
      'minlength': 'Titulo tem que possuir mais de 6 caracteres.',
      'maxlength': 'Titulo tem que possuir menos de 120 caracteres.'
    }
    ,
    'resumo': {
      'required': 'Resumo requerido.',
      'minlength': 'Resumo tem que possuir mais de 20 caracteres',
      'maxlength': 'Resumo tem que possuir menos de 120 caracteres.'
    },
    'texto': {
      'required': 'Texto Requerido',
      'minlength': 'Texto tem que possuir mais de 120 caracteres'
    }
  };


}