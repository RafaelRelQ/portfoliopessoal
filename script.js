function scrollSec(id){
    const section = document.getElementById(id);
    section.scrollIntoView({behavior: 'smooth'});
};

function abrirpop1(){
    document.getElementById('popup1').classList.add("aberto");
}

function fecharpop1(){
    document.getElementById('popup1').classList.remove("aberto");
}