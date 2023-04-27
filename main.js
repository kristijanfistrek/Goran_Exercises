// *****************//
// 1. Osnovni termini
// *****************//

// U programiranju ćemo prvenstveno pisati logiku koja će manipulirati sa nekim podacima.
// Podatke moramo u aplikacijama negdje spremiti. 
// Najosnovniji podatkovni tip za spremanje nekih vrijednosti, ćemo zasad nazvati varijable.
// Za spremanje podataka, koristiti ćemo operatore. 
// Najčešći operator za dodijeljivanje vrijednosti je znak =

// *******************************//
// 2. Definiranje + Inicijalizacija
// *******************************//

// Kod spremanja podataka u neku varijablu, prije moramo napraviti dvije stvari.
// a) definirati ispravno varijable, pri vrhu skripte.
// b) prije korištenja te varijable, potrebno joj je dodijeliti vrijednost.
// Inicijalizacija -> dodijeljivanje određene vrijednosti nečemu -> postavljanje nečega na neku vrijednost.

var a; // Definiranje | Definicija varijable
var b = 2; // Definiranje + inicijalizacija (dodijeljivanje vrijednosti) na određenu vrijednost.

console.log("Ispis prije inicijalizacije: ", a);

a = 3; // Inicijaliziranje na određenu vrijednost. 

console.log("Ispis poslije inicijalizacije: ", a);

// **************************//
// 3. Tipovi podataka i podaci
// **************************//

// U programiranju ćemo se susresti s raznim tipovima podataka.
// Najosnovniji od njih su: number, string i boolean.

var ime = "Goran"; // -> string -> bitno ga je navesti između ovih znakova -> ""
var godine = 28; // -> number
var isOldEnough = false; // -> boolean -> praksa je da se ime piše kao upitna rečenica.

console.log("Scope #0: ", ime);

// ****************************************//
// 4. Type of variable declarations & Blocks
// ****************************************//

// Pod blok koda se mislim sve što je unutar vitičastih zagrada. 
// Odnosno blokovi koda se odvajaju vitičastim zagradama.

// Postoje 3 standardna načina definiranja varijabli.
// Mogu se definirati kao var, let i const.

{
    let ime = 0;
    {
        console.log("Scope #1: ", ime);
    }
}

