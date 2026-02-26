import TicketsPage from '../Pages/Tickets.page.ts';
import OnboardingPage from '../Pages/Onboarding.page.ts';

describe('Busqueda de pasajes solo de IDA', () => {
    it('Se deben buscar pasajes de IDA de Retiro a Rosario Terminal', async () => {
        //Saltamos el flujo de onboarding
        await OnboardingPage.skipOnboarding();
        //Realizamos la búsqueda de pasajes
        await TicketsPage.selectOrigin();
        await TicketsPage.buscarCiudad('Retiro');
        await TicketsPage.selectFirstPlace();
        await TicketsPage.selectDestination();
        await TicketsPage.buscarCiudad('Rosario Terminal');
        await TicketsPage.selectFirstPlace();
        await TicketsPage.selectDate();
        await TicketsPage.selectOK();
        await TicketsPage.searchTickets();
        //Verificamos que se encuentra en la pantalla de selección de pasajes
        const title = await TicketsPage.waitSelectServiceTitle();
        expect(title).toBe('Elegí tu viaje de IDA');
    });
}); 