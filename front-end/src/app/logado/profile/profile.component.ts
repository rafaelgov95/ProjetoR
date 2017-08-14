import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from './../auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedOption: string;



  profile: any;

  constructor(public dialog: MdDialog) {

    this.profile = JSON.parse(localStorage.getItem("currentUser"));

  }

  
  ngOnInit() {
    var imagem = document.querySelector(".imagem");
    imagem.addEventListener("click", function () {
      alert("Esta funcionalidade ainda não foi implementada.");
    });

    var botaoFeedback = document.querySelector(".enviarFeedback");
    var textArea = document.querySelector(".textArea");


    botaoFeedback.addEventListener("click", function () {
      alert("Sugestão enviada com sucesso!");
      textArea.textContent="lae,,e";
     
    });

  }
   openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}


@Component({
  // selector: 'dialog-result-example-dialog',
  // templateUrl: 'dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}

