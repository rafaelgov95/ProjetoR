import { EmitterDelivery } from './../../../shared/services/EmitterDelivery/EmitterDelivery';
import { ServicePost } from './../../../shared/services/posts/ServicePost';
import { Post } from './../../../shared/models/post';


import { Component, Input, Output, forwardRef, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'htmleditor-component',
  templateUrl: 'htmleditor.component.html'
  
})
export class HtmleditorComponent implements OnInit {
  post: Post;
  teste 
  id: string;
  autor: string
  HtmlEditor: FormGroup;
  esconder = false;
  editar = false;
  @Output() AvisaPai = new EventEmitter();
  @Input() editarPost;
  constructor(private fb: FormBuilder,

    private servicePost: ServicePost) {

    if (localStorage.getItem('currentUser')) {
      this.autor = JSON.parse(localStorage.getItem('currentUser'))['nome']
    }

    this.post = new Post('', '', '', this.autor, new Date());
    
  }
  ngOnChanges(event) {
    if (this.editarPost != undefined) {
      this.post = this.editarPost
      this.teste = this.post.texto      
      console.log("Editar:", this.post)
      this.buildForm();
      // this.esconder=true 
      this.editar = true;
    }

  }

  cancelar() {
    this.editar = false;
    this.post = new Post('', '', '', this.autor, new Date());

    this.HtmlEditor.reset();

    this.buildForm();
    this.AvisaPai.emit()
  }


  onSubmit(post: Post) {
    if (this.editar) {
      post._id = this.post._id;
      this.servicePost.updatePost(post).subscribe(data => {
        this.servicePost.emitterDelivery.emit(post)
      }, err => console.log("Erro"))

    } else {
      this.servicePost.create(post).subscribe(data =>
        this.servicePost.emitterDelivery.emit(data),
        err => console.log("Erro"))

    }
    this.HtmlEditor.reset()
    this.post = new Post('', '', '', this.autor, new Date());
    this.buildForm();
    this.editar = false;
    console.log("Submetido:", post)
    this.AvisaPai.emit()
  }

  ngOnInit() {
    this.buildForm();

  }

  buildForm(): void {
    console.log('build',this.post.texto)
    this.HtmlEditor = this.fb.group({
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