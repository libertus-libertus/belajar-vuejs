<template>
  <div class="container">
    <h1>List Produk</h1>
    <div class="row">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="col-md-3 mb-4"
      >
        <div class="card">
          <img :src="product.photo" alt="Product Image" class="card-img-top" />
          <div class="card-body text-center">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Harga: {{ formatPrice(product.totalPrice) }}</p>
            <button class="btn btn-primary" @click="addToCart(product)">
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
      products: [],
    };
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
    },
    addToCart(product) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} berhasil ditambahkan ke keranjang!`);
    },
  },
  mounted() {
    axios
      .get("https://sistemtoko.com/public/demo/product")
      .then((response) => {
        this.products = response.data.aaData || [];
      })
      .catch((error) => console.error(error));
  },
};
</script>
