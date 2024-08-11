const lista = document.querySelector('#listado')

fetch('../miarchivo.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
            const sueño = document.createElement('div')
            sueño.innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${producto.numero}</h5>
    <p class="card-text">${producto.significado}</p>
    
  </div>
</div>`
    
            lista.append(sueño)
        });
    })