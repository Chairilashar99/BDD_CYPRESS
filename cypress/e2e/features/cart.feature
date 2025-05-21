Feature: Keranjang Belanja

  Scenario: Menambahkan produk ke keranjang
    Given Pengguna telah berhasil login
    When Pengguna menambahkan produk pertama ke dalam keranjang
    And Pengguna membuka halaman keranjang belanja
    Then Produk tersebut harus tampil di dalam keranjang

  Scenario: Menghapus produk dari keranjang
    Given Pengguna sudah login dan telah menambahkan produk ke keranjang
    When Pengguna membuka halaman keranjang belanja
    And Pengguna menghapus produk dari dalam keranjang
    Then Keranjang belanja seharusnya kosong
