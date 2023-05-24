// ARRAY SPESA
elementi_spesa = [
    'Sedano',
    'Carote',
    'Cipolle',
    'Patate',
    'Guanciale',
    'Olio',
    'Provola',
    'Pasta Mista'
]
// RECUPERO CON getElementbyId l'id dato all'ul dell'html
const lista_spesa = document.getElementById('lista-spesa');

// creo una variabile con indice 0
let elementi = 0;

while(elementi < elementi_spesa.length) {
    
    // creo le li attraverso una variabile e le mostro a schermo con innerHTML
    let contenuto = `<li>${elementi_spesa[elementi]}</li>`
    lista_spesa.innerHTML += contenuto

    elementi++;
}