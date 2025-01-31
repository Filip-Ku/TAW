import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
 selector: 'app-signup',
 standalone: true,
 imports: [FormsModule],
 providers: [AuthService],
 templateUrl: './signup.component.html',
 styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

 public credentials = {
   name: '',
   email: '',
   password: '',
 };

 constructor(private authService: AuthService, public router: Router) {
 }

 ngOnInit() {
 }

 create() {
   this.authService.createOrUpdate(this.credentials).subscribe((result) => {
     return result;
   });
   this.router.navigate(['/']);
 }
}
