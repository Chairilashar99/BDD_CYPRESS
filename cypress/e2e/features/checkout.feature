Feature: Checkout

  Scenario: Berhasil checkout
    Given User sudah login dan buka halaman keranjang dengan produk
    When User klik tombol checkout
    And User isi info checkout dengan "John", "Doe", "12345"
    And User selesaikan pembelian
    Then User lihat pesan sukses "Thank you for your order!"

  Scenario: Gagal checkout karena data kosong
    Given User sudah login dan buka halaman keranjang dengan produk
    When User klik tombol checkout
    And User isi info checkout dengan "", "", ""
    Then User lihat pesan error "Error: First Name is required"
