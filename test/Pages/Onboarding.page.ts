import BasePage from './base.page.ts';
import { OnboardingLocators } from '../Locators/Onboarding.locators.ts';
import { $ } from '@wdio/globals';

class OnboardingPage extends BasePage {
    get closePopUp() { return $(OnboardingLocators.closePopUp); }
    get continuarButton() { return $(OnboardingLocators.continuarButton); }
    get popUpImage() { return $(OnboardingLocators.popUpImage); }
    get closePopUpAccessibilityId() { return $(OnboardingLocators.closePopUpAccessibilityId); }
    get closePopUpXpath() { return $(OnboardingLocators.closePopUpXpath); }
    get stepTitle() { return $(OnboardingLocators.stepTitle); }
    get btnRemindLater() { return $(OnboardingLocators.btnRemindLater); }
    get saltarButton() { return $(OnboardingLocators.saltarButton); }

    async checkPopUp() {
        try {
            // Esperamos un tiempo razonable por si aparece
            await this.popUpImage.waitForDisplayed({ timeout: 200000 });
            await this.helpers.safeClick(this.closePopUp);
        } catch (error) {
            // Si no aparece, simplemente continuamos
            console.log('PopUp no detectado, continuando...');
        }
    }

    //Saltamos el onboarding
    async skipOnboarding() {
        await this.checkPopUp();
        await this.clickSaltarButton();
        await this.clickBtnRemindLater();
    }

    //Esperamos que se presente el PopUp con la imagen
    async waitPopUp() {
        await this.popUpImage.waitForDisplayed({ timeout: 20000 });
    }

    //Cerramos el PopUp
    async clickClosePopUp() {
        await this.helpers.safeClick(this.closePopUp);
    }

    async waitBuscaTuPasaje() {
        await this.stepTitle.waitForDisplayed({ timeout: 20000 });
        const text = await this.stepTitle.getAttribute('text');
        expect(text).toBe('BUSCÁ TU PASAJE');
    }

    async waitElegiComoViajar() {
        await this.stepTitle.waitForDisplayed({ timeout: 10000 });
        const text = await this.stepTitle.getText();
        expect(text).toBe('ELEGÍ CÓMO VIAJAR');
    }

    async waitSeleccionaTusAsientos() {
        await this.stepTitle.waitForDisplayed({ timeout: 10000 });
        const text = await this.stepTitle.getText();
        expect(text).toBe('SELECCIONÁ TUS ASIENTOS');
    }

    async waitCompletaTuInformacion() {
        await this.stepTitle.waitForDisplayed({ timeout: 10000 });
        const text = await this.stepTitle.getText();
        expect(text).toBe('COMPLETÁ TU INFORMACIÓN');
    }

    async waitCompraYPreparaLasValijas() {
        await this.stepTitle.waitForDisplayed({ timeout: 10000 });
        const text = await this.stepTitle.getText();
        expect(text).toBe('COMPRÁ Y PREPARÁ LAS VALIJAS');
    }

    async waitQuizasMasTarde() {
        try {
            await this.helpers.safeClick(this.btnRemindLater, 5000);
        } catch (error) {
            console.log("Botón 'Quizá más tarde' no apareció, continuando...");
        }
    }

    async clickContinuar() {
        await this.helpers.safeClick(this.continuarButton);
    }

    async clickClosePopUpAccessibilityId() {
        await this.helpers.safeClick(this.closePopUpAccessibilityId);
    }

    async clickClosePopUpXpath() {
        await this.helpers.safeClick(this.closePopUpXpath);
    }

    async clickBtnRemindLater() {
        try {
            await this.helpers.safeClick(this.btnRemindLater, 5000);
        } catch (error) {
            console.log("Botón 'Remind Later' no apareció, continuando...");
        }
    }

    async clickSaltarButton() {
        await this.helpers.safeClick(this.saltarButton);
    }
}

export default new OnboardingPage();
