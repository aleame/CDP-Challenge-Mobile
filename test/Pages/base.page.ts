import { $ } from '@wdio/globals'
import MobileHelpers from '../Helpers/mobile.helpers.ts';

/**
* Main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {

    /**
     * Acceso directo a helpers móviles
     */
    protected helpers = MobileHelpers;

    /**
     * Helper to find an element
     * @param selector 
     */
    async getElement(selector: string) {
        return $(selector);
    }

    /**
     * Wait for an element to be displayed
     * @param selector 
     * @param timeout 
     */
    async waitForDisplayed(selector: string, timeout = 10000) {
        const el = await this.getElement(selector);
        await el.waitForDisplayed({ timeout });
    }

    /**
     * Click seguro con espera previa
     */
    async click(selector: string, timeout = 10000) {
        const el = await this.getElement(selector);
        await this.helpers.safeClick(el, timeout);
    }

    /**
     * Escribir texto de forma segura
     */
    async setValue(selector: string, value: string, timeout = 10000) {
        const el = await this.getElement(selector);
        await el.waitForDisplayed({ timeout });
        await el.setValue(value);
    }
}
