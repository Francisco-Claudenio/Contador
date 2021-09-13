/*inicio: 5
fim: 12
passo 2
ele vai contar de 5 até 12 de 2 a 2 */


function clicar(){

    let inicio  = window.document.getElementById("entrada")
    let fim     = window.document.getElementById("entrada1")
    let passo   = window.document.getElementById("entrada2")

    //se  não tiver sido declarado nenhum valor ao clicar no button, o comando ativa um alert dizendo que não a dados
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // se o inicio tiver vazio ou o fim tiver vazio ou o passo tiver vazio
            window.alert(`[ERROR] No To Data \u{1F47E}`)
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value) // a variável inicio foi convertida para uma variável do tipo number, antes ela era do tipo string
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert(`Passo inválido \u{1F615}`)
            p = 1
        }
        if (i < f) {
                //contagem crescente
                for(let c = i; c<= f; c += p) {
                    res.innerHTML += `${c} \u{1F47E}`
        }
        res.innerHTML += `\u{1F916} \u{1F47D}`
            } else {
                    //contagem regressiva
                for(let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F47D}`
                }
                res.innerHTML += `\u{1F916} \u{1F47E}`
            }
    }
}
