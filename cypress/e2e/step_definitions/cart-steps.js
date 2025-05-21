import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "https://www.saucedemo.com/";

Given("Pengguna telah berhasil login", () => {
	cy.visit(baseUrl);
	cy.get('[data-test="username"]').type("standard_user");
	cy.get('[data-test="password"]').type("secret_sauce");
	cy.get('[data-test="login-button"]').click();
	cy.url().should("include", "/inventory.html");
});

Given("Pengguna sudah login dan telah menambahkan produk ke keranjang", () => {
	cy.visit(baseUrl);
	cy.get('[data-test="username"]').type("standard_user");
	cy.get('[data-test="password"]').type("secret_sauce");
	cy.get('[data-test="login-button"]').click();
	cy.url().should("include", "/inventory.html");

	cy.get(".inventory_item").first().contains("Add to cart").click();
});

When("Pengguna menambahkan produk pertama ke dalam keranjang", () => {
	cy.get(".inventory_item").first().contains("Add to cart").click();
});

When("Pengguna membuka halaman keranjang belanja", () => {
	cy.get(".shopping_cart_link").click();
	cy.url().should("include", "/cart.html");
});

When("Pengguna menghapus produk dari dalam keranjang", () => {
	cy.get(".cart_item").contains("Remove").click();
});

Then("Produk tersebut harus tampil di dalam keranjang", () => {
	cy.get(".cart_item").should("have.length.at.least", 1);
});

Then("Keranjang belanja seharusnya kosong", () => {
	cy.get(".cart_item").should("not.exist");
});
