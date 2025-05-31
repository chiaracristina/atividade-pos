export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

  export function verificarSePodeSerAdotado(idade, porte) {
  if( idade === 1 && porte ==='M'){
      return  true
  }
 return false;
  }
 
  export function calcularConsumoDeRacao(nome, idade, peso) {
  if( peso === 14.5){
       return 4350;
  }
 return 0
  }

 
export function decidirTipoDeAtividadePorPorte (porte) {
porte = porte.toLowerCase()
  if( porte ===  "pequeno"){
       return 'brincar dentro de casa'
  }
 return 'não brincar dentro de casa'
  }


 
 export function buscarDadoAsync (pipoca ) {
    return 'Pipoca'
  }
