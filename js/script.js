        let jugueteSeleccionado = '';
        let cantidadSeleccionada = 0;
        let precioUnitario = 0;
        let subtotal = 0;
        const descuentoPorUnidades = 50; // Descuento de S/50 por cada 5 unidades compradas

        function seleccionarJuguete() {
            jugueteSeleccionado = window.prompt("Ingrese el juguete deseado (Monopolio, Ajedrez, Lego, Dama, Laberinto):");
            document.getElementById('jugueteseleccionado').textContent = jugueteSeleccionado;
        }

        function seleccionarCantidad() {
            cantidadSeleccionada = parseInt(window.prompt("Ingrese la cantidad deseada:"));
            document.getElementById('cantidadseleccionada').textContent = cantidadSeleccionada;
        }

        function calcularTotal() {
            switch (jugueteSeleccionado.toLowerCase()) {
                case 'monopolio':
                    precioUnitario = 70;
                    break;
                case 'ajedrez':
                    precioUnitario = 78;
                    break;
                case 'lego':
                    precioUnitario = 100;
                    break;
                case 'dama':
                    precioUnitario = 58;
                    break;
                case 'laberinto':
                    precioUnitario = 35;
                    break;
                default:
                    precioUnitario = 0;
                    break;
            }


            subtotal = precioUnitario * cantidadSeleccionada;

            const unidadesDescuento = Math.floor(cantidadSeleccionada / 5);
            const descuento = unidadesDescuento * descuentoPorUnidades;

            const total = subtotal - descuento;

            document.getElementById('preciounitario').textContent = precioUnitario;
            document.getElementById('subtotal').textContent = subtotal;
            document.getElementById('descuento').textContent = descuento;
            document.getElementById('total').textContent = total;
            document.getElementById('recibo').style.display = 'block';
        }