import * as Rx from 'rxjs/Rx';


Rx.Observable
    .interval(300)
    .take(10)
    .subscribe(
        (x)=> console.log(x)
    )
; 

let sample = "babylon";

let check = (word :string)=> {
    return !word.split('').some((letter :string, index :number)=> {
        return word.split('').indexOf(letter) != index
    })
}
 
 
console.log(check(sample));