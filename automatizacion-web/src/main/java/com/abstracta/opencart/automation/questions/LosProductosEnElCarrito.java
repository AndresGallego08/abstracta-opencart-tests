package com.abstracta.opencart.automation.questions;

import com.abstracta.opencart.automation.userinterfaces.OpenCartLocators;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;

import java.util.List;
import java.util.stream.Collectors;

public class LosProductosEnElCarrito implements Question<List<String>> {

    public static Question<List<String>> obtenidos() {
        return new LosProductosEnElCarrito();
    }

    @Override
    public List<String> answeredBy(Actor actor) {
        return OpenCartLocators.PRODUCTOS_EN_CARRITO.resolveAllFor(actor)
                .stream()
                .map(element -> element.getText().trim()) // Extraer texto de cada producto
                .collect(Collectors.toList());
    }
}
