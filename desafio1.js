//adicao da string

const stri = 'marrocos';

let reverseStri = '';

for(let i = stri.length -1; i >= 0; i--){
    reverseStri += stri[i];
}

console.log(reverseStri);


/* declarei o loop for dentro a variavel " I "  que ira ler toda a string,
diferent de nos que lemos uma a string como ' marrocos ' o javascript 
reconhece uma estring como um caracter então ele ira retorna
para min da mesma forma que um numero por esse motivo quando ele começar
a ler a variavel " I " se a variavel for maior ou igual azero subtrairemos um 
de " I " cada vez que o loop for executado.
No caso da string vasia a string prenchida com o nome quando chamada retornara o elemento 
da string principal por isso a string vasia " reverseString " recebe a variavel " I " retornado 
" socorram "   */ 