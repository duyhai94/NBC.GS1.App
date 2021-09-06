import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class DataRegisterService{
    constructor(){}
    data = new BehaviorSubject('');

    currentData = this.data.asObservable();

    pushData(data){
        this.data.next(data);
    }
}