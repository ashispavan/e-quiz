import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName : string;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  public onSubmit() : void {
    if (this.userName) {
      window.localStorage.setItem('userName', this.userName);
      this.router.navigate(['/quiz']);
    }
    else {
      alert('Enter a name');
    }

  }

}
