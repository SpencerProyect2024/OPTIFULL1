document.addEventListener('DOMContentLoaded', () => {
    const listaDeGafasElement = document.getElementById('lista-de-gafas');
    const totalItemsElement = document.getElementById('total-items');
    const irAComprarBtn = document.getElementById('ir-a-comprar');
    const seleccionVaciaElement = document.getElementById('seleccion-vacia');

    let gafasDisponibles = [
        { id: '1.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/1.jpg' },
        { id: '2.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/2.jpg' },
        { id: '3.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/3.jpg' },
        { id: '4.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/4.jpg' },
        { id: '5.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/5.jpg' },
        { id: '6.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/6.jpg' },
        { id: '7.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/7.jpg' },
        { id: '8.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/8.jpg' },
        { id: '9.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/9.jpg' },
        { id: '10.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/10.jpg' },
        { id: '11.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/11.jpg' },
        { id: '12.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/12.jpg' },
        { id: 'baner2.png', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/baner2.png' },
        { id: 'ca1.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/ca1.jpg' },
        { id: 'carru1.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/carru1.jpg' },
        { id: 'carru2.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/carru2.jpg' },
        { id: 'carru3.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/carru3.jpg' },
        { id: 'carru4.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/carru4.jpg' },
        { id: 'carru5.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/carru5.jpg' },
        { id: 'gA1.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/gA1.jpg' },
        { id: 'GA2.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/GA2.jpg' },
        { id: 'ma1.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/ma1.jpg' },
        { id: 'ma2.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/ma2.jpg' },
        { id: 'ma3.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/ma3.jpg' },
        { id: 'ma4.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/ma4.jpg' },
        { id: 'ma5.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/ma5.jpg' },
        { id: 'ma6.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/ma6.jpg' },
        { id: 'ma7.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/ma7.jpg' },
        { id: 'ma8.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/ma8.jpg' },
        { id: 'mo1.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/mo1.jpg' },
        { id: 'mo2.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/mo2.jpg' },
        { id: 'mo3.jpg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/mo3.jpg' },
        { id: 'niño4.jpeg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/niño4.jpeg' },
        { id: 'niño5.jpeg', marca: 'Marca Desconocida', modelo: 'Modelo Desconocido', precio: 0, imagen: 'imagen/niño5.jpeg' }
        // Puedes seguir añadiendo más gafas si tienes más imágenes
    ];

    let seleccion = cargarSeleccion();
    console.log('ANTES CARGAR - Seleccion:', seleccion);
    console.log('DESPUES CARGAR - Seleccion:', seleccion);
    mostrarListaDeGafas();
    console.log('ANTES ACTUALIZAR TOTAL - Seleccion:', seleccion);
    actualizarTotalSeleccion();
    igualarAlturaGafas();

    function cargarSeleccion() {
        const seleccionGuardada = localStorage.getItem('seleccion');
        const cargado = seleccionGuardada ? JSON.parse(seleccionGuardada) : [];
        console.log('cargarSeleccion() - Cargado desde localStorage:', cargado);
        return cargado;
    }

    function guardarSeleccion() {
        localStorage.setItem('seleccion', JSON.stringify(seleccion));
        console.log('guardarSeleccion() - Guardado en localStorage:', seleccion);
    }

    function igualarAlturaGafas() {
        const gafas = document.querySelectorAll('#lista-de-gafas .gafa-disponible');
        let maxHeight = 0;
        gafas.forEach(gafa => {
            gafa.style.height = 'auto';
            maxHeight = Math.max(maxHeight, gafa.offsetHeight);
        });
        gafas.forEach(gafa => {
            gafa.style.height = `${maxHeight}px`;
        });
    }

    function mostrarListaDeGafas() {
        listaDeGafasElement.innerHTML = '';
        console.log('mostrarListaDeGafas() - Seleccion actual:', seleccion);
        gafasDisponibles.forEach(gafa => {
            const yaSeleccionado = seleccion.some(item => item.id === gafa.id);
            const botonTexto = yaSeleccionado ? 'Seleccionado' : 'Seleccionar';
            const botonClase = yaSeleccionado ? 'seleccionado' : 'seleccionar-btn';

            const gafaDiv = document.createElement('div');
            gafaDiv.classList.add('gafa-disponible');
            gafaDiv.innerHTML = `
                <img src="${gafa.imagen}" alt="${gafa.marca} ${gafa.modelo}">
                <div class="gafa-info">
                    <p>${gafa.marca} ${gafa.modelo}</p>
                </div>
                <button class="${botonClase}" data-id="${gafa.id}">${botonTexto}</button>
            `;
            listaDeGafasElement.appendChild(gafaDiv);
        });
        setTimeout(igualarAlturaGafas, 100);
    }

    function actualizarTotalSeleccion() {
        console.log('actualizarTotalSeleccion() - Seleccion length:', seleccion.length);
        totalItemsElement.textContent = seleccion.length;
        irAComprarBtn.disabled = seleccion.length === 0;
        seleccionVaciaElement.style.display = seleccion.length === 0 ? 'block' : 'none';
    }

    listaDeGafasElement.addEventListener('click', (event) => {
        const targetButton = event.target;
        const id = targetButton.dataset.id;
        if (targetButton.classList.contains('seleccionar-btn')) {
            console.log('CLICK - Seleccionar:', id, 'Seleccion antes:', [...seleccion]);
            const gafaSeleccionada = gafasDisponibles.find(gafa => gafa.id === id);
            if (gafaSeleccionada) {
                seleccion.push({ id: gafaSeleccionada.id, marca: gafaSeleccionada.marca, modelo: gafaSeleccionada.modelo, precio: gafaSeleccionada.precio, imagen: gafaSeleccionada.imagen });
                guardarSeleccion();
                mostrarListaDeGafas();
                actualizarTotalSeleccion();
                console.log('CLICK - Seleccionar:', id, 'Seleccion despues:', [...seleccion]);
            }
        } else if (targetButton.classList.contains('seleccionado')) {
            console.log('CLICK - Deseleccionar:', id, 'Seleccion antes:', [...seleccion]);
            seleccion = seleccion.filter(item => item.id !== id);
            guardarSeleccion();
            mostrarListaDeGafas();
            actualizarTotalSeleccion();
            console.log('CLICK - Deseleccionar:', id, 'Seleccion despues:', [...seleccion]);
        }
    });

    irAComprarBtn.addEventListener('click', () => {
        if (seleccion.length > 0) {
            const idsSeleccionados = seleccion.map(item => item.id).join(',');
            window.location.href = `seleccion.html?ids=${idsSeleccionados}`;
        } else {
            alert('No has seleccionado ninguna gafa.');
        }
    });

    window.addEventListener('resize', igualarAlturaGafas);
});