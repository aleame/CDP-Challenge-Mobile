import TicketsPage from '../Pages/Tickets.page.ts';
import OnboardingPage from '../Pages/Onboarding.page.ts';
import allureReporter from '@wdio/allure-reporter';

describe('Busqueda de pasajes solo de IDA', () => {
    it('Se deben buscar pasajes de IDA de Retiro a Rosario Terminal', async () => {
        // Saltamos el flujo de onboarding
        await allureReporter.addStep('Saltamos el flujo de onboarding');
        await OnboardingPage.skipOnboarding();

        // Verificamos que estamos en la pantalla de tickets
        await allureReporter.addStep('Verificamos navegación a la pantalla de búsqueda de tickets');
        await expect(TicketsPage.SeleccionarOrigen).toBeDisplayed();

        // Realizamos la búsqueda de pasajes - Origen
        await allureReporter.addStep('Seleccionamos Origen: Retiro');
        await TicketsPage.selectOrigin();
        await expect(TicketsPage.BuscarInput).toBeDisplayed();
        await TicketsPage.buscarCiudad('Retiro');
        await TicketsPage.selectFirstPlace();

        // Verificamos que el origen se haya seleccionado correctamente
        await expect(TicketsPage.SeleccionarOrigen).toHaveText('Buenos Aires. Terminal Retiro');

        // Realizamos la búsqueda de pasajes - Destino
        await allureReporter.addStep('Seleccionamos Destino: Rosario Terminal');
        await TicketsPage.selectDestination();
        await expect(TicketsPage.BuscarInput).toBeDisplayed();
        await TicketsPage.buscarCiudad('Rosario Terminal');
        await TicketsPage.selectFirstPlace();

        // Verificamos que el destino se haya seleccionado correctamente
        await expect(TicketsPage.SeleccionarDestino).toHaveText('Rosario Terminal');

        // Selección de fecha
        await allureReporter.addStep('Seleccionamos fecha de viaje');
        await TicketsPage.selectDate();
        await expect(TicketsPage.Calendario).toBeDisplayed();
        await TicketsPage.selectOK();

        // Búsqueda de pasajes
        await allureReporter.addStep('Ejecutamos la búsqueda de pasajes');
        await expect(TicketsPage.BuscarPasajes).toBeDisplayed();
        await TicketsPage.searchTickets();

        // Verificamos que se encuentra en la pantalla de selección de pasajes
        await allureReporter.addStep('Verificamos navegación a la pantalla de selección de servicios');
        const title = await TicketsPage.waitSelectServiceTitle();
        expect(title).toBe('Elegí tu viaje de IDA');
    });
});