import { Register } from "./register";

export class Product {
  push(arg0: unknown) {
    throw new Error('Method not implemented.');
  }
  id:number;
  cId:string;
  name:string;
  imageUrl:string;
  yorum:string;
  date:string;
  link:string;
  user:Register;

}
