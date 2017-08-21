import { EmitterDelivery } from './../../shared/services/EmitterDelivery/EmitterDelivery';
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
  id : string;
  HtmlEditor: FormGroup;
  esconder = false;
  @Input() editarPost: Post;
  constructor(private fb: FormBuilder,

    private servicePost: ServicePost) {
    this.post = new Post('', '', '', '');

    if (localStorage.getItem('currentUser')) {
      this.post.autor = JSON.parse(localStorage.getItem('currentUser'))['nome']
    }
  }
  
  ngOnChanges() {
    console.log(this.editarPost) 
    if(this.editarPost !=null){
      this.post=this.editarPost;
    }
    
    this.buildForm();
    
  }


  onSubmit(evento) {

    this.servicePost.create(evento).subscribe(data => this.servicePost.emitterDelivery.emit(data), err => console.log("Erro"))

    this.HtmlEditor.reset()
    this.buildForm();
  }

  ngOnInit() {
    this.buildForm();

  }

  buildForm(): void {
    this.HtmlEditor = this.fb.group({
      // '_id': [this.post._id, []],
      'titulo': [this.post.titulo, [Validators.required, Validators.minLength, Validators.maxLength]],
      'resumo': [this.post.resumo, [Validators.required, Validators.minLength, Validators.maxLength]],
      'texto': [this.post.texto, [Validators.required, Validators.minLength]],
      'autor': [this.post.autor, [Validators.required]],
      'criada_em': [this.post.criada_em]
    });


    this.HtmlEditor.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.HtmlEditor) { return; }
    const form = this.HtmlEditor;
    for (const field in this.formErrors) {
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