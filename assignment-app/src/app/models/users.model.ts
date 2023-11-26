export class User {

ID : string | '';
Email!: string | '';
IsAdmin!: boolean | false;

constructor(Id? : string , Email? : string , IsAdmin? : boolean ){
    this.ID = Id || '' ;
    this.Email = Email || '';
    this.IsAdmin = IsAdmin || false;
}


public get_attributes() : string {
    return this.Email + ' ' + this.IsAdmin;
}
}