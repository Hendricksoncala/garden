import "./components/clock.js";
import { Mycard } from "./components/myCard.js";
import { Mydetails } from "./components/myDetails.js";


let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")
        
        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`
                <my-details logic="client_6" text="6. Devuelve un listado con el nombre de todos los clientes españoles."></my-details>


                <my-details logic="client_16" text="16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30."></my-details>
                <my-details logic="client_2.1" text="2.1  Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas."></my-details>
                <my-details logic="client_2.2"text= "2.2 Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
                <my-details logic="client_2.3"text= "2.3 Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
                <my-details logic="client_2.4"text= "2.4 Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
                <my-details logic="client_2.5"text= "2.5 Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
                <my-details logic="client_2.6"text= "2.6 Lista la dirección de las oficinas que tengan clientes en Fuenlabrada."></my-details>


                <my-details logic="client_3.1"text= "3.1 Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago."></my-details>
                <my-details logic="client_3.2"text= "3.2 Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido."></my-details>
                <my-details logic="client_3.3"text= "3.3 Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido."></my-details>
                <my-details logic="client_3.11"text= "3.11 Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago."></my-details>


            `
        }
        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`

                <my-details logic="employ_3"text="3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7."></my-details>
                <my-details logic="employ_4"text="4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa."></my-details>
                <my-details logic="employ_5"text="5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas."></my-details>

                <my-details logic="employ_2.8"text="2.8 Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes."></my-details>
                <my-details logic="employ_2.9"text="2.9 Devuelve un listado que muestre el nombre de cada empleados,el nombre de su jefe y el nombre del jefe de sus jefe. "></my-details>
                <my-details logic="employ_3.4"text="3.4 Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada."></my-details>
                <my-details logic="employ_3.5"text="3.5 Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado."></my-details>
                <my-details logic="employ_3.6"text="3.6. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan."></my-details>
                <my-details logic="employ_3.7"text="3.7. Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado."></my-details>
                <my-details logic="employ_3.10"text="3.10 Devuelve las oficinas donde no trabajan ninguno de los empleados que hayan sido los representantes de ventas de algún cliente que haya realizado la compra de algún producto de la gama Frutales."></my-details>
                <my-details logic="employ_3.12"text="3.12. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado."></my-details>

            `;
        }
        if(e.target.innerHTML=="product"){
            report__details.innerHTML = /*html*/`
                <my-details logic="product_15" text="15.Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio."></my-details>
                <my-details logic="product_3.8" text="3.8 Devuelve un listado de los productos que nunca han aparecido en un pedido."></my-details>
                <my-details logic="product_3.9" text="3.9 DDevuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto."></my-details>

            `;
        }
        if(e.target.innerHTML=="offices"){
            report__details.innerHTML = /*html*/`
            <my-details logic="office_1" text="1.Devuelve un listado con el código de oficina y la ciudad donde hay oficinas."></my-details>
            <my-details logic="office_2" text="2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>

            `;
        }
        if(e.target.innerHTML=="requests"){
            report__details.innerHTML = /*html*/`
            <my-details logic="requests_7" text="7. Devuelve un listado con los distintos estados por los que puede pasar un pedido. "></my-details>
            <my-details logic="requests_9" text="9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo."></my-details>
            <my-details logic="requests_10" text="10.Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada."></my-details>
            <my-details logic="requests_11" text="11. Devuelve un listado de todos los pedidos que fueron rechazados en 2009."></my-details>
            <my-details logic="requests_12" text="12.Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier ano"></my-details>



            `;
        }
        if(e.target.innerHTML=="payments"){
            report__details.innerHTML = /*html*/`
            <my-details logic="payments_13" text="13. Devuelve un listado con todos los pagos que se realizaron en el  año 2008 mediante Paypal. Ordene el resultado de mayor a menor."></my-details>
            <my-details logic="payments_14" text="14.Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. tenga en cuantta que no deben aparecer formas de pago repetidas"></my-details>

            `;
        }

    })
})
let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)