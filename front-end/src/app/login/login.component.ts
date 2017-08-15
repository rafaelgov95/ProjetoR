import { Usuario } from './../shared/models/usuario';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder
  , Validators
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// import { forbiddenNameValidator } from '../shared/directivas/forbidden-name.directive';
import { LoginService } from '../shared/services/login/LoginService.service';
import { AlertService } from '../shared/services/alert.service';
// import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  alert = true;
  returnUrl: string;
  UserForm: FormGroup;
  user: Usuario;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

    private loginService: LoginService,
    private alertService: AlertService

  ) {
    this.user = new Usuario('', '', '');
    
  }

  ngOnInit(): void {
    this.buildForm();
    this.alertService.getMessage();
    // reset login status
    this.loginService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'logado';
  }

  buildForm(): void {
    this.UserForm = this.fb.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(this.emailRegex)
      ]
      ],
      'senha': [this.user.senha, [
        Validators.required,
        Validators.minLength(4)
      ]]
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
    'email': ''
    // ,
    // 'senha': ''
  };

  validationMessages = {
    'email': {
      'required': 'Nome de usuário requerido.',
      'minlength': 'Nome tem que possuir mais de 4 caracteres',
      'pattern':'Email esta incorreto'
      // ,
      // 'maxlength': 'Name cannot be more than 24 characters long.'
    }
    // ,
    // 'senha': {
    //   'required': 'Power is required.'
    // }
  };

  
  login() {

    this.loginService.logar(this.UserForm.get('email').value, this.UserForm.get('senha').value)
      .subscribe(
      data => {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate([this.returnUrl]);

      },
      error => {
        console.log('Erro');
        this.alertService.error(error);
        this.alert = false;
        setTimeout(() => this.alert = true, 10000);

      });
  }
}
