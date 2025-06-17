function scrollSec(id){
    const section = document.getElementById(id);
    section.scrollIntoView({behavior: 'smooth'});
};

function abrirpop1(){
    document.getElementById('popup1').classList.add("aberto");
};

function fecharpop1(){
    document.getElementById('popup1').classList.remove("aberto");
};

function abrirpop2(){
    document.getElementById('popup2').classList.add("aberto");
};

function fecharpop2(){
    document.getElementById('popup2').classList.remove("aberto");
};

function abrirpop3(){
    document.getElementById('popup3').classList.add("aberto");
};

function fecharpop3(){
    document.getElementById('popup3').classList.remove("aberto");
};

function abrirpop4(){
    document.getElementById('popup4').classList.add("aberto");
};

function fecharpop4(){
    document.getElementById('popup4').classList.remove("aberto");
};