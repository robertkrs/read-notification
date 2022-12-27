const btn = document.getElementById('btn-notificacao');

btn.addEventListener('click', () =>{
    const naoLido = document.querySelectorAll('.comentarios');
    console.log(naoLido);

    naoLido.forEach(element => {
        element.classList.remove('nao-lida');
    });

    const notificacao = document.getElementById('numero-de-notificacao');

    notificacao.innerHTML = 0;
})

const naoLido = document.querySelectorAll('.comentarios');

naoLido.forEach(e => {
    e.addEventListener('click', ()=>{
        e.classList.remove('nao-lida');
        const notificacao = document.getElementById('numero-de-notificacao');
        if(notificacao.innerHTML === '0'){
        }else{
            notificacao.innerHTML -= 1;
        }
    })
})


