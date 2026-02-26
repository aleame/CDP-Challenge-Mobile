import BasePage from './base.page.ts';
import { TicketsLocators } from '../Locators/Tickets.locators.ts';
import { $ } from '@wdio/globals';

class TicketsPage extends BasePage {
    get SeleccionarOrigen() { return $(TicketsLocators.SeleccionarOrigen); }
    get OrigenText() { return $(TicketsLocators.OrigenText); }
    get SeleccionarDestino() { return $(TicketsLocators.SeleccionarDestino); }
    get DestinoText() { return $(TicketsLocators.DestinoText); }
    get InputOrigen() { return $(TicketsLocators.InputOrigen); }
    get InputDestino() { return $(TicketsLocators.InputDestino); }
    get BuscarInput() { return $(TicketsLocators.BuscarInput); }
    get BuscarText() { return $(TicketsLocators.BuscarText); }
    get Lugar() { return $(TicketsLocators.Lugar); }
    get Fecha() { return $(TicketsLocators.Fecha); }
    get Calendario() { return $(TicketsLocators.Calendario); }
    get OK() { return $(TicketsLocators.OK); }
    get BuscarPasajes() { return $(TicketsLocators.BuscarPasajes); }
    get selectServiceTitleLabel() { return $(TicketsLocators.selectServiceTitleLabel); }
    get textBuscar() { return $(TicketsLocators.textBuscar); }


    async buscarCiudad(text: string) {
        await this.setValue(TicketsLocators.BuscarInput, text);
    }

    async selectOrigin() {
        await this.helpers.safeClick(this.SeleccionarOrigen);
    }

    async selectDestination() {
        await this.helpers.safeClick(this.SeleccionarDestino);
    }

    async selectFirstPlace() {
        await this.helpers.safeClick(this.Lugar);
    }

    async selectDate() {
        await this.helpers.safeClick(this.Fecha);
    }

    async selectOK() {
        await this.helpers.safeClick(this.OK);
    }

    async searchTickets() {
        await this.helpers.safeClick(this.BuscarPasajes);
    }

    async waitSelectServiceTitle(): Promise<string> {
        await this.selectServiceTitleLabel.waitForDisplayed({ timeout: 10000 });
        const text = await this.selectServiceTitleLabel.getText();
        return text;
    }

    async waitTextBuscar(): Promise<string> {
        await this.textBuscar.waitForDisplayed({ timeout: 10000 });
        const text = await this.textBuscar.getText();
        return text;
    }

}

export default new TicketsPage();
