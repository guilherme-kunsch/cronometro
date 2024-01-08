window.onload = function () {
  function mostraHora(segundos) {
    const hora = new Date(segundos * 1000)
    return hora.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    })
  }

  const relogio = document.querySelector('.relogio');

  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++,
        relogio.innerHTML = mostraHora(segundos)
    }, 1000)
  }

  document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado')
      clearInterval(timer);
      iniciaRelogio()
    }

    if (el.classList.contains('pausar')) {
      relogio.classList.add('pausado')
      clearInterval(timer);
    }

    if (el.classList.contains('resetar')) {
      relogio.classList.remove('pausado')
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }
  })
}




