export class Assignment {

ID : string | '';
Nom!: string | '';
DateDeRendu!: Date | null;
Rendu!: boolean | false;
Iduser!: string | '';

constructor(Id? : string , Nom? : string , DateDeRendu? : Date , Rendu? : boolean , Iduser? : string ){
    this.ID = Id || '' ;
    this.Nom = Nom || '';
    this.DateDeRendu = DateDeRendu || null;
    this.Rendu = Rendu || false;
    this.Iduser = Iduser || '';
}


public get_attributes() : string {
    return this.Nom + ' ' + this.DateDeRendu +' '+ this.Rendu;

}
}