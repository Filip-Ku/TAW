import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
 selector: 'app-navbar',
 standalone: true,
 imports: [RouterModule, FormsModule, CommonModule],
 providers: [AuthService],
 templateUrl: './navbar.component.html',
 styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
constructor(public authService: AuthService, public router: Router) {
 }

 ngOnInit(): void {
 }

 signOut() {
   this.authService.logout().subscribe((result: any) => {
     this.router.navigate(['/']);
     return result;
   });
 }

}
