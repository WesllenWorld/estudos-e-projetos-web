function funcMenos(){
    atual = atual - 1;
    atualWrapper.innerHTML = atual;
    negativeCheck();

    if(atual === -10){
        bMenos.disabled = true;
    }
    else{
        bMais.disabled = false;
    }
    
}

function funcMais(){
    atual = atual + 1;
    atualWrapper.innerHTML = atual;
    neutralPositiveCheck();

    if(atual === 10){
        bMais.disabled = true;
    }
    else{
        bMenos.disabled = false;
    }
    
}

function negativeCheck(){
    if(atual < 0){
        atualWrapper.style.color = "red";
    }
}

function neutralPositiveCheck(){
    if(atual >= 0){
        atualWrapper.style.color = "black";
    }
}

console.log("auauau");


let atualWrapper = document.getElementById("atual");
let atual = 0;
const bMenos = document.getElementsByName('subtrai')[0];
const bMais = document.getElementsByName("soma")[0];

bMenos.addEventListener("click", funcMenos);
bMais.addEventListener("click", funcMais);

