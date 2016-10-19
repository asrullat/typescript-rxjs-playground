import * as Rx from 'rxjs/Rx';
// entry file
// delete whats below and write ur own script




// sample Rx Observable - checking chars for duplicates
let chars :string[] = "qwertzuiopü+^1234567890ß?=)(/&%$§°!asdfghjklöä#-.,mnbvcxy<>_:;QWERTZUqIOPÜÄÖLKJHGFSDAYXCVBNM".split('');
let charsExisting = {};

Rx.Observable
    .interval(100)
    .take(chars.length)
    .map((index :number) => chars[index])
    .map((char :string, index :number)=> {
        if (charsExisting[char]) {
            return `${char} -- is a DUPLICATE!` 
        }
        else {
            charsExisting[char] = true;
            return `${char} -- no duplicate` 
        }
    })
    .subscribe(
        (x)=> console.log(x)
    )
    ;

