<template>
  <div>
    <h1>Daftar Produk</h1>
    <!-- Loading State -->
    <div v-if="loading">Loading...</div>
    <!-- Data Produk -->
    <div v-else>
      <div v-for="(product, index) in products" :key="index" class="product-card">
        <img :src="product.photo" alt="Product Image" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>ID: {{ product.id }}</p>
        <p>Harga Total: {{ formatPrice(product.totalPrice) }}</p>
        <p>Harga Beli: {{ formatPrice(product.buyPrice) }}</p>
        <p>Stok: {{ product.stock }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      products: [], // Menyimpan produk yang sudah diformat
      loading: true, // Status loading
    };
  },
  methods: {
    // Fungsi untuk memformat harga menjadi Rupiah
    formatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
    },
    // Fungsi untuk memformat data API
    formatProducts(data) {
      return data.map((item) => ({
        id: item.id,
        name: item.name,
        photo: item.photo,
        totalPrice: item.totalPrice || 0, // Handle jika totalPrice tidak tersedia
        buyPrice: item.childs?.[0]?.buyPrice || 0, // Ambil dari child pertama
        stock: item.stock,
      }));
    },
  },
  mounted() {
    // Mengambil data dari API
    axios
      .get("https://sistemtoko.com/public/demo/product")
      .then((response) => {
        // Ambil array 'aaData'
        const apiData = response.data.aaData || [];
        // Format data dan simpan ke products
        this.products = this.formatProducts(apiData);
        this.loading = false;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.loading = false;
      });
  },
};
</script>


<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
  max-width: 200px;
}
.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 10px;
}
</style>
