import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  uname = "";
  pwd = "";
  err = "";
  users: any;
  //url = 'http://localhost:4200/assets/data/users.json';
  url='https://fakestoreapi.com/users'

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    /*this.uname = this.uname;
    this.pwd = this.pwd;*/
    this.http.get(this.url).subscribe((res) => {
      this.users = res;
    })
  }

  login(){
    if(this.uname.trim().length === 0){
      this.err = "Username is required";
    } else if (this.pwd.trim().length === 0){
      this.err = "Password is required"
    } else{
      this.err = "";
      for (let usr of this.users){
        if((this.uname === "Yash" && this.pwd === "12345") || (this.uname == usr.username && this.pwd == usr.password) ){
          this.router.navigate(["home"]);
        } else{
          this.err = "Invalid Credentials";
        }
      }
    }
  }

  

}
