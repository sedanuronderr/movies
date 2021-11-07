import { CartItemService } from '../services/cart-item.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-sepetekle',
  templateUrl: './sepetekle.component.html',
  styleUrls: ['./sepetekle.component.scss'],
  providers:[CartItemService]
})
export class SepetekleComponent implements OnInit {
    product:any=[];
    pro=[];
  constructor(private cardservice:CartItemService,private firestore:AngularFirestore) { }

  ngOnInit() {

   /* this.cardservice.getProducts().subscribe(data=>{
      this.product=data;
    });*/
    this.getAll();
  }
  removeItem(item){

    this.firestore.collection('favori').doc(item).delete();

    this.cardservice.removeCartItem(item);
  }




  getAll(){
    this.firestore.collection('favori').snapshotChanges().subscribe((response) => {
      this.pro =[];
         response.forEach(item =>{
          let a:any= item.payload.doc.data();
          a.id = item.payload.doc.id;
          this.pro.push(a);
        }
        );
      });

    }


}

