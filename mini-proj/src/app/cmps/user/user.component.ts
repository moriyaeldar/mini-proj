import { Pipe,PipeTransform,PipeDecorator, Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }
users:any
 async ngOnInit(){
this.users=await this.userService.query()
  }
saveUser(val:any){
  console.log(val);
this.userService._saveLocalUser(val)
}
}
