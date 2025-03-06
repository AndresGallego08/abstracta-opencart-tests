package com.abstracta.opencart.automation.stepdefinitions;

import com.abstracta.opencart.automation.models.Producto;
import com.abstracta.opencart.automation.questions.LosProductosEnElCarrito;
import com.abstracta.opencart.automation.tasks.AgregarProductosAlCarrito;
import com.abstracta.opencart.automation.tasks.EliminarProductosDelCarrito;
import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Entonces;
import org.junit.Assert;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class GestionCarritoSteps {

    private List<String> productosAgregados; // Lista de productos esperados en el carrito
    private List<String> productosEliminados; // Productos eliminados del carrito


    @Cuando("que el usuario agrega los siguientes productos al carrito")
    public void agregarProductosAlCarrito(List<Map<String, String>> productos) {
        List<Producto> listaProductos = productos.stream()
                .map(mapa -> new Producto(mapa.get("producto")))
                .collect(Collectors.toList());

        productosAgregados = listaProductos.stream()
                .map(Producto::getNombre) // Suponiendo que Producto tiene un método getNombre()
                .collect(Collectors.toList()); // Guardar los nombres de los productos

        theActorInTheSpotlight().attemptsTo(AgregarProductosAlCarrito.deCompras(listaProductos));
    }

    @Entonces("los productos deben estar en el carrito de compras")
    public void validarProductosEnElCarrito() {
        // Obtener los productos reales desde la UI
        List<String> productosEnCarrito = theActorInTheSpotlight().asksFor(LosProductosEnElCarrito.obtenidos());

        // Validar que la lista obtenida no sea null
        if (productosEnCarrito == null) {
            throw new IllegalStateException("La lista de productos en el carrito es null");
        }

        // Verificar que los productos esperados están en el carrito
        Assert.assertTrue("Los productos esperados no están en el carrito. Esperado: " + productosAgregados + ", Obtenido: " + productosEnCarrito,
                productosEnCarrito.containsAll(productosAgregados));
    }

    @Cuando("el usuario elimina los siguientes productos del carrito")
    public void eliminarProductosDelCarrito(List<Map<String, String>> productos) {
        List<String> listaProductosAEliminar = productos.stream()
                .map(mapa -> mapa.get("producto")) // Extraer nombres de productos
                .collect(Collectors.toList());

        productosEliminados = listaProductosAEliminar; // Guardamos los productos eliminados

        theActorInTheSpotlight().attemptsTo(EliminarProductosDelCarrito.delCarrito(listaProductosAEliminar));
    }

    @Entonces("los productos eliminados no deben estar en el carrito de compras")
    public void validarProductosEliminadosDelCarrito() {
        List<String> productosEnCarrito = theActorInTheSpotlight().asksFor(LosProductosEnElCarrito.obtenidos());

        Assert.assertFalse("Algunos productos eliminados aún están en el carrito. Eliminados: " + productosEliminados + ", Carrito: " + productosEnCarrito,
                productosEnCarrito.stream().anyMatch(productosEliminados::contains));
    }
}
