function buscarProducto() {
    let Buscar = true;
    while (Buscar) {
        let categoria = prompt("¿Qué producto desea comprar? Digita A para amperimetros, V para voltimetros o P para protectores de tension.");
        let producto;
        let modelo;
        let precio;

        switch (categoria.toUpperCase()) {
            case 'A':
                producto = "Amperimetro";
                modelo = buscarModelo("amperimetros");
                precio = 4000;
                break;
            case 'V':
                producto = "Voltimetro";
                modelo = buscarModelo("voltimetros");
                precio = 3500;
                break;
            case 'P':
                producto = "Protector de tension";
                modelo = buscarModelo("protectores de tension");
                precio = 6000;
                break;
            default:
                alert("Opción no válida. Por favor eliga A para amperimetros, V para voltimetros o P para protectores de tension.");
                continue;
        }

        alert("Tenemos " + producto + " del modelo " + modelo + " a $" + precio);

        let comprar = confirm("¿Desea comprarlo?");
        if (comprar) {
            alert("Gracias por comprar en VEFBEN");
            Buscar = false;
        } else {
            Buscar = confirm("¿Querés seguir buscando otros productos?");
        }
    }
}

function buscarModelo(tipoDeProducto) {
    let diferentesProductos;
    switch (tipoDeProducto) {
        case "amperimetros":
            diferentesProductos = ["3FPLA-01(220V)", "3FPLA-02(380V)", "3FPLA-03(24V)"];
            break;
        case "voltimetros":
            diferentesProductos = ["3FPLV-01(220V)", "3FPLV-02(380V)", "3FPLV-03(24V)","VE-01(220V)"];
            break;
        case "protectores de tension":
            diferentesProductos = ["Portable", "Riel DIN", "Trifasico"];
            break;
        default:
            diferentesProductos = [];
            break;
    }

    let productoSeleccionado;
    let productoEncontrado = false;

    while (!productoEncontrado) {
        productoSeleccionado = prompt("¿Qué modelo de " + tipoDeProducto + " buscas? Tenemos " + diferentesProductos.join(", ") + ".");

        if (!diferentesProductos.includes(productoSeleccionado)) {
            alert("No contamos con ese modelo de " + tipoDeProducto);
        } else {
            productoEncontrado = true;
        }
    }

    return productoSeleccionado;
}

function iniciarCompra() {
    alert("Bienvenido a Vefben, tienda de electrónica");
    let consulta = confirm("¿Desea comprar alguno de nuestros productos?");
    if (consulta === true) {
        buscarProducto();
    } else {
        alert("Gracias por visitarnos, tenga un buen día");
    }
}

iniciarCompra();