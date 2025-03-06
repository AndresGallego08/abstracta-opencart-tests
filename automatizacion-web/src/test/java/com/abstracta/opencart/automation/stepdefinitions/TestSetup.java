package com.abstracta.opencart.automation.stepdefinitions;

import com.abstracta.opencart.automation.utils.UrlCertificacion;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;
import net.serenitybdd.screenplay.actions.Open;
import net.serenitybdd.screenplay.actors.Cast;
import net.serenitybdd.screenplay.actors.OnStage;
import net.thucydides.core.util.EnvironmentVariables;
import net.thucydides.core.util.SystemEnvironmentVariables;
import net.thucydides.core.annotations.Managed;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import static net.serenitybdd.screenplay.actors.OnStage.theActorInTheSpotlight;

public class TestSetup {

    @Managed(driver = "chrome")
    private WebDriver hisBrowser;

    private final EnvironmentVariables environmentVariables = SystemEnvironmentVariables.createEnvironmentVariables();

    @Before
    public void setUp() {
        // Leer si headless está habilitado en serenity.properties
        boolean isHeadless = Boolean.parseBoolean(environmentVariables.getProperty("serenity.browser.headless", "false"));

        // Configurar ChromeDriver
        WebDriverManager.chromedriver().setup();

        // Configurar opciones de Chrome
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--incognito");
        options.addArguments("--start-maximized");
        options.addArguments("--ignore-certificate-errors");
        options.addArguments("--disable-web-security");
        options.addArguments("--allow-running-insecure-content");

        // Aplicar modo headless si está activado
        if (isHeadless) {
            options.addArguments("--headless=new");
        }

        // Inicializar navegador con las opciones configuradas
        hisBrowser = new ChromeDriver(options);
        OnStage.setTheStage(new Cast());
        OnStage.theActorCalled("User");
        OnStage.theActorInTheSpotlight().can(BrowseTheWeb.with(hisBrowser));

        // Abrir la URL de prueba
        theActorInTheSpotlight().wasAbleTo(Open.url(UrlCertificacion.OPEN_CART_ABSTRACTA));
    }
}
