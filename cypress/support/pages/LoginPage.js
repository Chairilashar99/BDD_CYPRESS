class LoginPage {
	buka() {
		cy.visit(Cypress.env("CYPRESS_BASE_URL"));
	}

	isiUsername(username) {
		cy.get('[data-test="username"]').clear().type(username);
	}

	isiPassword(password) {
		cy.get('[data-test="password"]').clear().type(password);
	}

	klikLogin() {
		cy.get('[data-test="login-button"]').click();
	}

	pesanErrorShouldContain(text) {
		cy.get('[data-test="error"]').should("contain", text);
	}
}

export default new LoginPage();
