import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  constructor() { }

  getproduct():any{
    return [
      {"prodid":101,"prodname":"samsung TV","prodprice":30000,"prodimg":"./../../assets/samsung.jpg"},
      {"prodid":102,"prodname":"LG TV","prodprice":20000,"prodimg":"./../../assets/LG.jpg"},
      {"prodid":103,"prodname":"Onida TV","prodprice":25000,"prodimg":"./../../assets/onida.jpg"},
      {"prodid":104,"prodname":"Oneplus TV","prodprice":35000,"prodimg":"./../../assets/oneplus.jpg"},
      {"prodid":105,"prodname":"Chinese TV","prodprice":3000,"prodimg":"./../../assets/chinese.jpg"}
  ]
  }
}
