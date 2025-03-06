package com.abstracta.opencart.automation.tasks;

import com.abstracta.opencart.automation.userinterfaces.OpenCartLocators;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Scroll;

import java.util.List;

import static net.serenitybdd.screenplay.Tasks.instrumented;

public class EliminarProductosDelCarrito implements Task {

    private final List<String> productosAEliminar;

    public EliminarProductosDelCarrito(List<String> productosAEliminar) {
        this.productosAEliminar = productosAEliminar;
    }

    public static EliminarProductosDelCarrito delCarrito(List<String> productos) {
        return instrumented(EliminarProductosDelCarrito.class, productos);
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        for (String producto : productosAEliminar) {
            actor.attemptsTo(
                    Scroll.to(OpenCartLocators.obtenerBotonEliminarProducto(producto)),
                    Click.on(OpenCartLocators.obtenerBotonEliminarProducto(producto))
            );
        }
    }
}