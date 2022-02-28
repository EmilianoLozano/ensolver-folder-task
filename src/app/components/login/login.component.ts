import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form : FormGroup; 

  message = '';

  correct=false;


  constructor(private fb : FormBuilder, private router: Router) { 
    this.form = fb.group({
      email: ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){

    if(this.form.value.email == 'emi_task' && this.form.value.password == 'folder123'){
    this.router.navigate(['folders']);
    }
    else{
      this.correct=true;
    }


    
  }


}
