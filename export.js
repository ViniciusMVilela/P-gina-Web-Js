// window.onload =
 function desafio (){
const buscar = document.querySelector("#botao");
            const cep = document.querySelector("#cep");
            const logradouro = document.querySelector("#logradouro");
            const bairro = document.querySelector("#bairro");
            const estado = document.querySelector("#uf");
            const cidade = document.querySelector("#localidade");

                let buscaCep = async function(c){
                        let viaCep = `https://viacep.com.br/ws/${c}/json/`;
                        try{
                            let bsucaFetch = await fetch(viaCep);
                            let dadosChamada = await bsucaFetch.json();

                            logradouro.value = dadosChamada.logradouro
                            bairro.value = dadosChamada.bairro
                            estado.value = dadosChamada.uf
                            cidade.value = dadosChamada.localidade
                             } catch(erro){
                                alert("error");
                             }
                }
                buscar.addEventListener('click',()=>{
                    buscaCep(cep.value);
                })
            }

           
export{desafio};