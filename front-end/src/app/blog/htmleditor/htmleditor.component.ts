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
  constructor(private fb: FormBuilder,
              private servicePost :ServicePost) {
    this.post = new Post('', '', '', '');
  }

  onSubmit(evento) {
    console.log(evento)
    this.servicePost.create(evento).subscribe(data =>console.log("Sucesso"),err => console.log("Erro"))
  }

  ngOnInit() {
    this.buildForm();

  }
  buildForm(): void {
    this.HtmlEditor = this.fb.group({
      'titulo': [this.post.titulo, [Validators.required]],
      'resumo': [this.post.resumo, [Validators.required]],
      'autor': [this.post.autor, [Validators.required]],
      'texto': [this.post.texto, [Validators.required]],
    });


    this.HtmlEditor.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.HtmlEditor) { return; }
    const form = this.HtmlEditor;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
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
    'autor': '',
    'texto': ''
    // ,
    // 'senha': ''
  };

  validationMessages = {
    'titulo': {
      'required': 'Titulo de usuário requerido.'
      // 'minlength': 'Nome tem que possuir mais de 4 caracteres',
      // 'pattern': 'Email esta incorreto'
      // ,
      // 'maxlength': 'Name cannot be more than 24 characters long.'
    }
    ,
    'resumo': {
      'required': 'Resumo requerido.'
    },
    'autor': {
      'required': 'Autor requerido.'
    },
    'texto': {
      'required': 'Texto Requerido'
    }
  };


}