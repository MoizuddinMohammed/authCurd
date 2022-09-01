import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material.Module';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MaterialModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService,private route:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  respData:any;
  ProceedLogin(logindata:any){
    // console.log(logindata.valid);
    // console.log(logindata.value);
    if(logindata.valid){
      this.service.ProceedLogin(logindata.value).subscribe(d=>{
        //console.log("Local Data:::",logindata.value.password);
        this.respData=d;
        //console.log('Server Data::',this.respData[0].password);
        if(logindata.value.username==this.respData[0].username && logindata.value.password==this.respData[0].password){
          //console.log('Server Data::',d);
          localStorage.setItem('username',this.respData[0].username);
          this.route.navigate(['home']);
        }else{
          alert("Login failed");
        }
      })
    }
  }
  redirectRegister(){
    this.route.navigate(['access/register']);
  }
}
