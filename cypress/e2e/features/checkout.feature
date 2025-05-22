Feature: Checkout

  Scenario: Berhasil checkout
    Given Pengguna sudah login dan buka halaman keranjang dengan produk
    When Pengguna klik tombol checkout
    And Pengguna isi info checkout dengan "John", "Doe", "12345"
    And Pengguna selesaikan pembelian
    Then Pengguna lihat pesan sukses "Thank you for your order!"

  Scenario: Gagal checkout karena data kosong
    Given Pengguna sudah login dan buka halaman keranjang dengan produk
    When Pengguna klik tombol checkout
    And Pengguna isi info checkout dengan "", "", ""
    Then Pengguna lihat pesan error "Error: First Name is required"
