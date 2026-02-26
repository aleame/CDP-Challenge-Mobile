import { driver } from '@wdio/globals';

class MobileHelpers {
    /**
     * Oculta el teclado si está visible
     */
    async hideKeyboard() {
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
    }

    /**
     * Espera y hace click de forma segura
     */
    async safeClick(element: any, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
        await element.click();
    }

    /**
     * Obtiene el contexto actual (NATIVE_APP o WEBVIEW)
     */
    async getContext() {
        return await driver.getContext();
    }
}

export default new MobileHelpers();
