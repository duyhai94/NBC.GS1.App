import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LocalStoregeService{

   get(key) {
       return JSON.parse(localStorage.getItem(key));
   }
   set(key, val){
       return localStorage.setItem(key, JSON.stringify(val));
   }

   del(){
       return localStorage.clear();
   }
}