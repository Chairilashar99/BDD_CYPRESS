import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Pengguna sudah login dan buka halaman keranjang dengan produk", () => {
	cy.visit("https://www.saucedemo.com/");
	cy.get('[data-test="username"]').type("standard_user");
	cy.get('[data-test="password"]').type("secret_sauce");
	cy.get('[data-test="login-button"]').click();

	cy.get(".inventory_item")
		.first()
		.within(() => {
			cy.contains("Add to cart").click();
		});

	cy.get(".shopping_cart_link").click();
});

When("Pengguna klik tombol checkout", () => {
	cy.get('[data-test="checkout"]').click();
	cy.url().should("include", "/checkout-step-one.html");
});

When(
	"Pengguna isi info checkout dengan {string}, {string}, {string}",
	(firstName, lastName, zip) => {
		if (firstName !== "") {
			cy.get('[data-test="firstName"]').type(firstName);
		}
		if (lastName !== "") {
			cy.get('[data-test="lastName"]').type(lastName);
		}
		if (zip !== "") {
			cy.get('[data-test="postalCode"]').type(zip);
		}
		cy.get('[data-test="continue"]').click();
	}
);

When("Pengguna selesaikan pembelian", () => {
	cy.get('[data-test="finish"]').click();
});

Then("Pengguna lihat pesan sukses {string}", (msg) => {
	cy.get(".complete-header").should("contain", msg);
});

Then("Pengguna lihat pesan error {string}", (msg) => {
	cy.get('[data-test="error"]').should("contain", msg);
});
