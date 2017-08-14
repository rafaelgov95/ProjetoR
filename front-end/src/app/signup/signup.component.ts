import { User } from './../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from  '../shared/services/alert.service'
import { FormGroup, FormBuilder
    ,  Validators
 } from '@angular/forms';
import {LoginService } from '../shared/services/login/LoginService.service'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
      user:User;
      confirmaSenha=''; 
      message:any;
      UserForm: FormGroup;
      erro:boolean = false;
      sucesso:boolean = false;
   constructor(
     private fb: FormBuilder,
        private router: Router,
        private loginService: LoginService,
        private alertService: AlertService) { 
          this.user = new User('', '', '');
        }

    ngOnInit(){
   this.buildForm();
        // this.alertService.getMessage().subscribe(message => { this.message = message; console.log(message)});
  }

   buildForm(): void {
    this.UserForm = this.fb.group({
      'nome': [this.user.nome, [
          Validators.required,
          Validators.minLength(4),
        ]
      ]
      ,
      'email': [this.user.email, [
          Validators.required,
          Validators.minLength(4),
        ]
      ]
      ,
      'senha': [this.user.senha,[
            Validators.required,
            Validators.minLength(4)
           ]
      ],
       'confirmaSenha': [this.confirmaSenha,[
            Validators.required,
            Validators.minLength(4)
           ]],

    });

    this.UserForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 
  }

   onValueChanged(data?: any) {
    if (!this.UserForm) { return; }
    const form = this.UserForm;
    
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
    'nome':'',
    // 'email': ''
    // 'senha': '',
    // 'confirmaSenha':''
  };

  validationMessages = {
    'nome': {
      'required': 'Nome de usuário requerido.',
      'minlength': 'Nome tem que possuir mais de 4 caracteres'
    }
    //,
    // 'email': {
    //  'required': 'Nome de usuário requerido.',
    //   'minlength': 'Nome tem que possuir mais de 4 caracteres'
    // }
    // ,
    // 'senha': {
    //   'required': 'required.',
    //    'minlength':     'Name must be at least 4 characters long.',
    //    'maxlength':     'Name cannot be more than 24 characters long.'
    // },
    // 'confirmaSenha': {
    //   'required': 'required.',
    //    'minlength':     'Name must be at least 4 characters long.',
    //   'maxlength':     'Name cannot be more than 24 characters long.'
    // }
  };
     register() {

       this.user.nome=this.UserForm.get('nome').value;
       this.user.email=this.UserForm.get('email').value;
       this.user.senha=this.UserForm.get('senha').value;
      console.log("aqui",this.user);
        this.loginService.create(this.user)
            .subscribe(
                data => {
                    this.alertService.success('Registrado com Sucesso', true);
                    // this.router.navigate(['/login']);
                    this.sucesso = true;
                    
                    // setTimeout(() => this.router.navigate(['/login']), 15000);
                },
                error => {
                  console.log("erro")
                    this.alertService.error(error);
                    setTimeout(() => this.erro = true, 10000);

                });
    }
}
