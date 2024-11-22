<template>
  <div class="container">
    <h1 class="my-2">List Produk</h1>
    <div class="row">
      <div v-for="(product, index) in products" :key="index" class="col-md-3 mb-4">
        <div class="card">
          <img :src="product.photo" alt="Product Image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>

            <!-- Tampilkan harga total -->
            <span class="card-text">
              Harga Total: {{ formatPrice(product.plain_price) }}
            </span> <br>

            <!-- Tampilkan harga jual (buyPrice) -->
            <!-- <p class="card-text">
              Harga Jual: {{ formatPrice(product.buyPrice) }}
            </p> -->

            <!-- Tampilkan stok produk -->
            <span class="card-text">
              Stok: {{ product.stock }}
            </span> <br>

            <!-- Tombol untuk menambahkan produk ke keranjang -->
            <button class="btn btn-primary btn-sm mt-2 btn-block" @click="addToCart(product)">
              <i class="bi bi-cart-plus"></i>
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "ListProduk",
    data() {
      return {
        products: [], // Array untuk menyimpan data produk
      };
    },
    methods: {
      // Fungsi untuk format harga ke IDR (Rupiah)
      formatPrice(price) {
        const numericPrice = parseFloat(price); // Pastikan price adalah angka
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(numericPrice);
      },

      // Fungsi untuk menambah produk ke keranjang
      addToCart(product) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product); // Menambahkan produk ke keranjang
        localStorage.setItem("cart", JSON.stringify(cart)); // Menyimpan keranjang ke localStorage
        alert(`${product.name} berhasil ditambahkan ke keranjang!`); // Menampilkan alert
      },
    },
    mounted() {
      // Ambil data produk dari API
      axios
        .get("https://sistemtoko.com/public/demo/product")
        .then((response) => {
          // Periksa apakah price dan buyPrice dalam format angka
          this.products = response.data.aaData.map(product => {
            product.price = parseFloat(product.price); // Mengubah price ke angka
            product.buyPrice = parseFloat(product.buyPrice); // Mengubah buyPrice ke angka
            return product;
          }) || [];
        })
        .catch((error) => console.error(error));
    },
  };
</script>

<style scoped>
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }

  .card-title {
    text-transform: capitalize;
  }
</style>