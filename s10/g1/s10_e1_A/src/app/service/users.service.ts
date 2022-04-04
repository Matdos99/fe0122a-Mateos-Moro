import { User } from './../interface/user';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
private users: User[]=[{
  id:1,
  email: '',
  name:'',
  role: 'admin'
}]
  constructor() { }


  getUsers(){
    return this.users
}
getUser(id:number){
    return this.users.find(user => user.id == id)
}
}
