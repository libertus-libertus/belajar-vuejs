<template>
  <div class="container text-center">
    <h1>Selamat Datang di Toko Online</h1>
    <p>Belanja produk terbaik dengan mudah dan cepat.</p>
    <!-- Tombol untuk navigasi ke halaman ListProduk -->
    <router-link to="/list-produk">
      <button class="btn btn-primary mt-3">Belanja Sekarang</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Home",
  };
</script>

<style scoped>
  h1 {
    margin-top: 50px;
    color: #333;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    border: none;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>