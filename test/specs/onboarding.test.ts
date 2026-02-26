import OnboardingPage from '../Pages/Onboarding.page.ts';
import TicketsPage from '../Pages/Tickets.page.ts';
import allureReporter from '@wdio/allure-reporter';

describe('Realizamos el onboarding de la aplicacion', () => {
    it('Se debe completar la navegacion del onboarding', async () => {
        // Realizamos el flujo de onboarding
        await allureReporter.addStep('Esperamos y cerramos el PopUp inicial');
        await OnboardingPage.waitPopUp();
        // Verificamos que el PopUp sea visible
        await expect(OnboardingPage.popUpImage).toBeDisplayed();
        await OnboardingPage.clickClosePopUp();

        await allureReporter.addStep('Verificamos Paso 1: BUSCÁ TU PASAJE');
        await OnboardingPage.waitBuscaTuPasaje();
        // Verificamos el primer paso
        await expect(OnboardingPage.stepTitle).toHaveText('BUSCÁ TU PASAJE');
        await expect(OnboardingPage.continuarButton).toBeDisplayed();
        await OnboardingPage.clickContinuar();

        await allureReporter.addStep('Verificamos Paso 2: ELEGÍ CÓMO VIAJAR');
        await OnboardingPage.waitElegiComoViajar();
        // Verificamos el segundo paso
        await expect(OnboardingPage.stepTitle).toHaveText('ELEGÍ CÓMO VIAJAR');
        await expect(OnboardingPage.continuarButton).toBeDisplayed();
        await OnboardingPage.clickContinuar();

        await allureReporter.addStep('Verificamos Paso 3: SELECCIONÁ TUS ASIENTOS');
        await OnboardingPage.waitSeleccionaTusAsientos();
        // Verificamos el tercer paso
        await expect(OnboardingPage.stepTitle).toHaveText('SELECCIONÁ TUS ASIENTOS');
        await expect(OnboardingPage.continuarButton).toBeDisplayed();
        await OnboardingPage.clickContinuar();

        await allureReporter.addStep('Verificamos Paso 4: COMPLETÁ TU INFORMACIÓN');
        await OnboardingPage.waitCompletaTuInformacion();
        // Verificamos el cuarto paso
        await expect(OnboardingPage.stepTitle).toHaveText('COMPLETÁ TU INFORMACIÓN');
        await expect(OnboardingPage.continuarButton).toBeDisplayed();
        await OnboardingPage.clickContinuar();

        await allureReporter.addStep('Verificamos Paso 5: COMPRÁ Y PREPARÁ LAS VALIJAS');
        await OnboardingPage.waitCompraYPreparaLasValijas();
        // Verificamos el quinto paso
        await expect(OnboardingPage.stepTitle).toHaveText('COMPRÁ Y PREPARÁ LAS VALIJAS');
        await expect(OnboardingPage.continuarButton).toBeDisplayed();
        await OnboardingPage.clickContinuar();

        await allureReporter.addStep('Cerramos recordatorio "Quizá más tarde"');
        await OnboardingPage.waitQuizasMasTarde();

        // Verificamos que se encuentra en la pantalla principal
        await allureReporter.addStep('Verificamos navegación a pantalla principal');
        const text = await TicketsPage.waitTextBuscar();
        expect(text).toBe('Buscar');
    });
});
