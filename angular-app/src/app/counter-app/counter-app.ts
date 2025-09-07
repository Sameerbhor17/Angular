import { Component } from "@angular/core";

@Component({
    selector: "app-counter-app",
    templateUrl: "./counter-app.html",
    styleUrl: "./counter-app.scss"
})
export class Counter {
    public counter: number = 0;

    calculateCounter(val: string){
        if(val === 'decrement') {
            this.counter = this.counter - 1;
            if(this.counter <= 0){
                this.counter = 0;
            }
        } else if(val === 'increment') {
            this.counter = this.counter + 1;
        } else if(val === 'reset') {
            this.counter = 0;
        } else {
            this.counter = 0;
        }
    }
}