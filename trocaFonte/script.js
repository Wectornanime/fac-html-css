let isModfied = false;
const frase = document.querySelector('p#frase');
const imgs = document.querySelector('div#imgs');
const creditos = document.querySelector('div#creditos');

viewMod();

function swap(opc) {
    switch (opc) {
        case 1:
            isModfied = true;
            frase.innerText = 'Você apertou a opc 1';
            frase.style.color = 'red';
            frase.style.fontFamily = 'Times New Roman';
            frase.style.fontSize = '20px';

            frase.style.fontStyle = 'italic';
            frase.style.textDecoration = 'none';
            break;
        case 2:
            frase.innerText = 'Você apertou a opc 2';
            frase.style.color = 'blue';
            frase.style.fontFamily = 'cursive';
            frase.style.fontSize = '30px';

            frase.style.fontStyle = 'none';
            frase.style.textDecoration = 'underline';
            imgs.innerHTML = '<img src="img/kobby-mendez-d0oYF8hm4GI-unsplash.jpg"> <img src="img/winston-chen-_sN38KiOPMk-unsplash.jpg">';
            creditos.style.visibility = 'visible';
            isModfied = true;
            break;
        case 3:
            frase.innerText = 'Aperte uma das opcs abaixo';
            frase.style.color = 'black';
            frase.style.fontFamily = 'Arial';
            frase.style.fontSize = '10px';

            frase.style.fontStyle = 'normal';
            frase.style.textDecoration = 'none';
            imgs.innerHTML = '';
            creditos.style.visibility = 'hidden';
            isModfied = false;
            break;
    };
    viewMod();
};

function viewMod(){
    document.querySelector('button#but3').disabled = !isModfied;
};
