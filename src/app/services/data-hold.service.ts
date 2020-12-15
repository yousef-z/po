import { BasicInfo } from './../models/basicInfo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHoldService {
  basicInfo: BasicInfo;
  brand : any; 

  constructor() { }

  saveToLocal(key, val){
    return localStorage.setItem(key, val);
}

  getFromLocal(key){
      return localStorage.getItem(key);
  }

  saveBasicInfo(data){
      this.basicInfo = data;
  }

  saveBrand(data) {
      this.brand = data;
  }

  getDataOfBrand(){        
      return this.brand;
  }

  getDataOfBasicInfo() {
      return this.basicInfo;
}


}
