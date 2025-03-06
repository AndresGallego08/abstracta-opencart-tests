$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/gestion_carrito.feature");
formatter.feature({
  "name": "Compra y eliminación de un producto en OpenCart",
  "description": "",
  "keyword": "Característica"
});
formatter.scenario({
  "name": "Agregar y eliminar un producto del carrito de compras",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@gestionCarrito"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que el usuario agrega los siguientes productos al carrito:",
  "rows": [
    {
      "cells": [
        "producto"
      ]
    },
    {
      "cells": [
        "iPhone"
      ]
    },
    {
      "cells": [
        "Samsung SyncMaster 941BW"
      ]
    },
    {
      "cells": [
        "MacBook"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "GestionCarritoSteps.agregarProductosAlCarrito(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.exceptions.ElementShouldBeEnabledException: Expected enabled element was not enabled\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilEnabled(WebElementFacadeImpl.java:1149)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilElementAvailable(WebElementFacadeImpl.java:954)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.click(WebElementFacadeImpl.java:1229)\r\n\tat net.serenitybdd.screenplay.actions.ClickOnTarget.performAs(ClickOnTarget.java:13)\r\n\tat net.serenitybdd.screenplay.actions.ClickOnTarget$ByteBuddy$dTPj9hX7.performAs$accessor$NDL1zdSX(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:466)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:450)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:425)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:180)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:167)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:74)\r\n\tat net.serenitybdd.screenplay.actions.ClickOnTarget$ByteBuddy$dTPj9hX7.performAs(Unknown Source)\r\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:233)\r\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:214)\r\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:171)\r\n\tat com.abstracta.opencart.automation.tasks.AgregarProductosAlCarrito.performAs(AgregarProductosAlCarrito.java:36)\r\n\tat com.abstracta.opencart.automation.tasks.AgregarProductosAlCarrito$ByteBuddy$TbwRgtIf.performAs$accessor$qbtF0RTH(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:466)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:450)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:425)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:180)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:167)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:74)\r\n\tat com.abstracta.opencart.automation.tasks.AgregarProductosAlCarrito$ByteBuddy$TbwRgtIf.performAs(Unknown Source)\r\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:233)\r\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:214)\r\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:171)\r\n\tat com.abstracta.opencart.automation.stepdefinitions.GestionCarritoSteps.agregarProductosAlCarrito(GestionCarritoSteps.java:33)\r\n\tat ✽.que el usuario agrega los siguientes productos al carrito:(src/test/resources/features/gestion_carrito.feature:7)\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for By.xpath: //button[contains(@onclick, \u0027cart.add\u0027)] to be enabled (tried for 5 second(s) with 100 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilEnabled(WebElementFacadeImpl.java:1146)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilElementAvailable(WebElementFacadeImpl.java:954)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.click(WebElementFacadeImpl.java:1229)\r\n\tat net.serenitybdd.screenplay.actions.ClickOnTarget.performAs(ClickOnTarget.java:13)\r\n\tat net.serenitybdd.screenplay.actions.ClickOnTarget$ByteBuddy$dTPj9hX7.performAs$accessor$NDL1zdSX(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:466)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:450)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:425)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:180)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:167)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:74)\r\n\tat net.serenitybdd.screenplay.actions.ClickOnTarget$ByteBuddy$dTPj9hX7.performAs(Unknown Source)\r\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:233)\r\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:214)\r\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:171)\r\n\tat com.abstracta.opencart.automation.tasks.AgregarProductosAlCarrito.performAs(AgregarProductosAlCarrito.java:36)\r\n\tat com.abstracta.opencart.automation.tasks.AgregarProductosAlCarrito$ByteBuddy$TbwRgtIf.performAs$accessor$qbtF0RTH(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat net.thucydides.core.steps.StepInterceptor.invokeMethod(StepInterceptor.java:466)\r\n\tat net.thucydides.core.steps.StepInterceptor.executeTestStepMethod(StepInterceptor.java:450)\r\n\tat net.thucydides.core.steps.StepInterceptor.runTestStep(StepInterceptor.java:425)\r\n\tat net.thucydides.core.steps.StepInterceptor.runOrSkipMethod(StepInterceptor.java:180)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:167)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:74)\r\n\tat com.abstracta.opencart.automation.tasks.AgregarProductosAlCarrito$ByteBuddy$TbwRgtIf.performAs(Unknown Source)\r\n\tat net.serenitybdd.screenplay.Actor.performTask(Actor.java:233)\r\n\tat net.serenitybdd.screenplay.Actor.perform(Actor.java:214)\r\n\tat net.serenitybdd.screenplay.Actor.attemptsTo(Actor.java:171)\r\n\tat com.abstracta.opencart.automation.stepdefinitions.GestionCarritoSteps.agregarProductosAlCarrito(GestionCarritoSteps.java:33)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:112)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:40)\r\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:54)\r\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:53)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\r\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)\r\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:92)\r\n\tat com.sun.proxy.$Proxy4.processTestClass(Unknown Source)\r\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker$2.run(TestWorker.java:183)\r\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.executeAndMaintainThreadName(TestWorker.java:132)\r\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.execute(TestWorker.java:103)\r\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.execute(TestWorker.java:63)\r\n\tat org.gradle.process.internal.worker.child.ActionExecutionWorker.execute(ActionExecutionWorker.java:56)\r\n\tat org.gradle.process.internal.worker.child.SystemApplicationClassLoaderWorker.call(SystemApplicationClassLoaderWorker.java:121)\r\n\tat org.gradle.process.internal.worker.child.SystemApplicationClassLoaderWorker.call(SystemApplicationClassLoaderWorker.java:71)\r\n\tat worker.org.gradle.process.internal.worker.GradleWorkerMain.run(GradleWorkerMain.java:69)\r\n\tat worker.org.gradle.process.internal.worker.GradleWorkerMain.main(GradleWorkerMain.java:74)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[contains(@onclick, \u0027cart.add\u0027)]\"}\n  (Session info: chrome\u003d133.0.6943.142)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-JUT4BMHG\u0027, ip: \u0027192.168.39.146\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.23\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 133.0.6943.142, chrome: {chromedriverVersion: 133.0.6943.141 (2a5d6da0d61..., userDataDir: C:\\Users\\Andres\\AppData\\Loc...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61955}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 3da7ba67c3b298c7e55d7dc1bef7c200\n*** Element info: {Using\u003dxpath, value\u003d//button[contains(@onclick, \u0027cart.add\u0027)]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.serenitybdd.core.pages.WebElementResolverByLocator.resolveForDriver(WebElementResolverByLocator.java:18)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:221)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:63)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$3.apply(WebElementExpectations.java:55)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\t... 91 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "los productos deben estar en el carrito de compras",
  "keyword": "Entonces "
});
formatter.match({
  "location": "GestionCarritoSteps.validarProductosEnElCarrito()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "el usuario elimina los siguientes productos del carrito:",
  "rows": [
    {
      "cells": [
        "producto"
      ]
    },
    {
      "cells": [
        "iPhone"
      ]
    },
    {
      "cells": [
        "Samsung SyncMaster 941BW"
      ]
    },
    {
      "cells": [
        "MacBook"
      ]
    }
  ],
  "keyword": "Cuando "
});
formatter.match({
  "location": "GestionCarritoSteps.eliminarProductosDelCarrito(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "los productos eliminados no deben estar en el carrito de compras",
  "keyword": "Entonces "
});
formatter.match({
  "location": "GestionCarritoSteps.validarProductosEliminadosDelCarrito()"
});
formatter.result({
  "status": "skipped"
});
});