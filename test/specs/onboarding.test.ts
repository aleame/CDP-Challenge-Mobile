import OnboardingPage from '../Pages/Onboarding.page.ts';
import TicketsPage from '../Pages/Tickets.page.ts';

describe('Realizamos el onboarding de la aplicacion', () => {
    it('should complete onboarding', async () => {
        //Realizamos el flujo de onboarding
        await OnboardingPage.waitPopUp();
        await OnboardingPage.clickClosePopUp();
        await OnboardingPage.waitBuscaTuPasaje();
        await OnboardingPage.clickContinuar();
        await OnboardingPage.waitElegiComoViajar();
        await OnboardingPage.clickContinuar();
        await OnboardingPage.waitSeleccionaTusAsientos();
        await OnboardingPage.clickContinuar();
        await OnboardingPage.waitCompletaTuInformacion();
        await OnboardingPage.clickContinuar();
        await OnboardingPage.waitCompraYPreparaLasValijas();
        await OnboardingPage.clickContinuar();
        await OnboardingPage.waitQuizasMasTarde();
        //Verificamos que se encuentrá en la pantalla principal
        const text = await TicketsPage.waitTextBuscar();
        expect(text).toBe('Buscar');
    });
});
