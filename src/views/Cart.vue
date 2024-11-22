<template>
  <div class="container">
    <h1>Keranjang Belanja</h1>
    <div v-if="cart.length === 0">
      <span>Keranjang belanja Anda sudah kosong nih, yuk </span>

      <!-- Tombol untuk navigasi ke halaman ListProduk -->
      <router-link to="/list-produk">
        <span>Belanja</span>
      </router-link>

      <span> lagi.</span>

    </div>
    <div v-else>
      <ul class="list-group">
        <li v-for="(item, index) in cart" :key="index" class="list-group-item">
          <div class="d-flex justify-content-between">
            <div>
              <h5>{{ item.name }}</h5>
              <p>Harga: {{ formatPrice(item.plain_price) }}</p>
            </div>
            <button class="btn btn-danger btn-sm" @click="removeFromCart(index)">
              Hapus
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    data() {
      return {
        cart: [],
      };
    },
    methods: {
      formatPrice(price) {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(price);
      },
      removeFromCart(index) {
        this.cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      },
    },
    mounted() {
      this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    },
  };
</script>

<style scoped>
  h1 {
    margin-top: 20px;
    margin-bottom: 20px;
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