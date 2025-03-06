package com.abstracta.opencart.automation.userinterfaces;

import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.screenplay.targets.Target;

public class OpenCartLocators extends PageObject {

    public static final Target BUSCADOR = Target.the("Barra de búsqueda").locatedBy("//input[@name='search']");
    public static final Target BOTON_AGREGAR = Target.the("Botón Agregar al carrito").locatedBy("//button[contains(@onclick, 'cart.add')]");
    public static final Target ICONO_CARRITO = Target.the("Icono del carrito").locatedBy("//a[@title='Shopping Cart']");
    public static final Target PRODUCTOS_EN_CARRITO = Target.the("Productos en el carrito")
            .locatedBy("//table[@class='table table-bordered']//td[@class='text-left']/a");

    public static Target obtenerBotonEliminarProducto(String nombreProducto) {
        return Target.the("Botón eliminar de " + nombreProducto)
                .locatedBy("(//table//td[contains(normalize-space(),'" + nombreProducto + "')]/following-sibling::td//button[contains(@class, 'btn-danger')])[2]");
    }

}
