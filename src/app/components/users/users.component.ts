import { Component, OnInit, ViewChild} from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User [];
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    address: {
      street:'',
      city:'',
      state:''
    },
    hide: false,
  };
  formHide: boolean = true;
  loaded: boolean = true;
  @ViewChild('userForm', {static: false}) form:any;
  constructor(private userService:DataService) {
    userService.getUser().subscribe(users => this.users = users );
  }
  ngOnInit() {
    this.seeObservable();
  }
  addNewUser({value, valid}: {value:User, valid:boolean}){
    if(!valid){
      console.log('Not a valid form values')
    } else {
      this.userService.addUser({...value, hide: true, registered:new Date()});
      this.form.reset();
    }
  }
  addUserClick(){
    this.formHide=false;
  }
  seeObservable(){
      this.userService.getData().subscribe(data => {
      console.log(data);
    })
  }

}
