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

const lista_spesa = document.getElementById('lista-spesa');

let elementi = 0;

while(elementi < elementi_spesa.length) {
    
    let contenuto = `<li>${elementi_spesa[elementi]}</li>`
    lista_spesa.innerHTML += contenuto

    elementi++;
}