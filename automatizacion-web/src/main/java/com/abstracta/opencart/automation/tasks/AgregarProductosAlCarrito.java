package com.abstracta.opencart.automation.tasks;

import com.abstracta.opencart.automation.models.Producto;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Hit;
import net.serenitybdd.screenplay.targets.Target;
import org.openqa.selenium.Keys;

import java.util.List;

import static com.abstracta.opencart.automation.userinterfaces.OpenCartLocators.*;
import static net.serenitybdd.screenplay.Tasks.instrumented;

public class AgregarProductosAlCarrito implements Task {

    private final List<Producto> productos;

    public AgregarProductosAlCarrito(List<Producto> productos) {
        this.productos = productos;
    }

    public static AgregarProductosAlCarrito deCompras(List<Producto> productos) {
        return instrumented(AgregarProductosAlCarrito.class, productos);
    }

    @Override
    public <T extends Actor> void performAs(T actor) {

        for (Producto producto : productos) {
            Target PRIMER_PRODUCTO = Target.the("Primer producto listado")
                    .locatedBy("//div[@class='product-thumb']//a[contains(text(),'" + producto.getNombre() + "')]");

            actor.attemptsTo(
                    Enter.theValue(producto.getNombre()).into(BUSCADOR),
                    Hit.the(Keys.ENTER).into(BUSCADOR),
                    //Click.on(PRIMER_PRODUCTO),
                    Click.on(BOTON_AGREGAR)
            );
        }

        // Ir al carrito después de agregar todos los productos
        actor.attemptsTo(Click.on(ICONO_CARRITO));
    }
}
