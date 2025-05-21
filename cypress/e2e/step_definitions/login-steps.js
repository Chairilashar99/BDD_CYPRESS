import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pages/LoginPage";
Given("Buka halaman login", () => {
	LoginPage.buka();
});

When("Isi username {string}", (username) => {
	LoginPage.isiUsername(username);
});

When("Isi password {string}", (password) => {
	LoginPage.isiPassword(password);
});

When("Klik tombol login", () => {
	LoginPage.klikLogin();
});

Then("Dialihkan ke halaman produk", () => {
	cy.url().should("include", "/inventory.html");
});

Then("Tampil pesan error {string}", (errorMsg) => {
	LoginPage.pesanErrorShouldContain(errorMsg);
});
