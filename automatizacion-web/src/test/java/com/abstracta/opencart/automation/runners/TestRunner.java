package com.abstracta.opencart.automation.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = "src/test/resources/features/",
        glue = "com.abstracta.opencart.automation.stepdefinitions",
        snippets = SnippetType.CAMELCASE,
        plugin = {"pretty", "html:target/cucumber-reports", "json:target/cucumber.json"},
        tags = "@gestionCarrito "
)
public class TestRunner {
}