import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class DataForgotService{
    constructor(){}
    data = new  BehaviorSubject('');
    currentData = this.data.asObservable();
    pushData(data){
        this.data.next(data);
    }
}