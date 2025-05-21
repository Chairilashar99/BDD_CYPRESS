Feature: Login

  Scenario: Login berhasil
    Given Buka halaman login
    When Isi username "standard_user"
    And Isi password "secret_sauce"
    And Klik tombol login
    Then Dialihkan ke halaman produk

  Scenario: Login gagal (user tidak valid)
    Given Buka halaman login
    When Isi username "invalid_user"
    And Isi password "wrong_password"
    And Klik tombol login
    Then Tampil pesan error "Epic sadface: Username and password do not match any user in this service"
