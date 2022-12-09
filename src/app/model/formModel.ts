export class FormModel {
  id?: string;
  name: string;
  lastName: string;
  adress: string;
  phone: string;
  createdAt: string;

  constructor(name: string, lastName: string, adress: string, phone: string,
    createdAt: string) {
    this.name = name;
    this.lastName = lastName;
    this.adress = adress;
    this.phone = phone;
    this.createdAt = createdAt;
  }
}
