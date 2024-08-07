$.noConflict();
jQuery(document).ready(function($) {
    const data = [
        { 
            "id": "1", 
            "imagen": "img/galeria/generador4.png", 
            "descripcion": "6kva - Villa Devoto" 
        },{ 
            "id": "2", 
            "imagen": "img/galeria/generador106kva.png", 
            "descripcion": "106kva - Villa Del Parque"
        },{ 
            "id": "3", 
            "imagen": "img/galeria/generador3.png", 
            "descripcion": "6kva - Lugano" 
        },{ 
            "id": "4", 
            "imagen": "img/galeria/generador2.png", 
            "descripcion": "6kva - Coghlan" 
        },{ 
            "id": "5",  
            "imagen": "img/galeria/generador8.png", 
            "descripcion": "106kva Gvep - Villa Del Parque" 
        },{ 
            "id": "6", 
            "imagen": "img/galeria/generador6.png", 
            "descripcion": "15kva Trif - Efectos Especiales" 
        },{ 
            "id": "7", 
            "imagen": "img/galeria/generador7.png", 
            "descripcion": "5kva - Embajada Venezuela" 
        },{ 
            "id": "8",
            "imagen": "img/galeria/generador5.png", 
            "descripcion": "7kva Honda - Mantenimiento Mensual" 
        },{ 
            "id": "9", 
            "imagen": "img/galeria/generador9.png", 
            "descripcion": "Jhon deer 200kva - Cramaco Industria Nacional" 
        },{ 
            "id": "10", 
            "imagen": "img/galeria/generador10.png", 
            "descripcion": "Logus 40-VDP-Back Up" 
        },
    ];
  
    const galeria = document.getElementById("galeria");
    for (const element of data) {
        console.log(element.id);
        const item = element;

        const elementoDiv = document.createElement("div");
        elementoDiv.className = "col-12 col-md-6 col-lg-4 my-3 mx-0";

        if (element.id == 10) {
            elementoDiv.innerHTML = `
            <div class="card" data-toggle="modal" data-target="#modal${item.id}">
                <div class="card-img">
                    <img src="${item.imagen}" alt="Generadores Devoto">
                    <div class="overlay-text">${item.descripcion}</div>
                </div>
            </div>
    
            <div class="modal fade" id="modal${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content bg-transparent">
                        <div class="modal-body text-center">
                            <video controls>
                                <source src="mp4/logus.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }else{
            elementoDiv.innerHTML = `
            <div class="card" data-toggle="modal" data-target="#modal${item.id}">
                <div class="card-img">
                    <img src="${item.imagen}" alt="Generadores Devoto">
                    <div class="overlay-text">${item.descripcion}</div>
                </div>
            </div>
    
            <div class="modal fade" id="modal${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content bg-transparent">
                        <div class="modal-body text-center">
                            <img src="${item.imagen}" alt="${item.descripcion}" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            `;
        }

        // Agrega el div al contenedor
        galeria.appendChild(elementoDiv);
    }
});