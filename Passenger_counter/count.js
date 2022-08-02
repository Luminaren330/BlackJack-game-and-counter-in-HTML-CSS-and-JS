let pr_ent = document.getElementById("P_Ent");
let people = document.getElementById("count_pl");
// Zmienia wartośc w html
// people.innerText = 5;

function CountUp() {
    people.innerText++;
}
function CountDown() {
    people.innerText--;
    if (people.innerText < 0) {
        people.innerText = 0;
    }

}
function Reset() {
    people.innerText = 0;
}

function Save(){
    pr_ent.innerText += ' ' + people.innerText + ' - '
    console.log(people.innerText);
}

function Alert() {
    // Pokazauje okienko wiadomości
    alert("Okienko")


    // Pokazauje okienko wiadomości z opcją wpisania czegoś
    // promptprompt("Test", '');

    // Pokazauje okienko wiadomości z opcją wybrania 2 przycisków (np. Ok i Cancel)
    //let isBoss = confirm("Are you the boss?");
    //alert( isBoss ); // true if OK is pressed
}