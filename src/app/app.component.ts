import { Component } from '@angular/core';
import carddata from './cards.json';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  cardToDisplay: any;
  registerForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.cardToDisplay = carddata['cards-data'];
    
    $(document).ready(function () {
      $('.carousel').carousel();
    });
  
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      societe: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      sujet: ['', Validators.required],
      votremessage: ['', Validators.required],
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  validate(){
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
      $("#exampleModal .close").click()
    } else {
      alert('Form Not Submitted succesfully!!!');
    }
  }
}
