<template>
    <div class="container">
      <h1>Keranjang Belanja</h1>
      <div v-if="cart.length === 0">
        <p>Keranjang kosong.</p>
      </div>
      <div v-else>
        <ul class="list-group">
          <li v-for="(item, index) in cart" :key="index" class="list-group-item">
            <div class="d-flex justify-content-between">
              <div>
                <h5>{{ item.name }}</h5>
                <p>Harga: {{ formatPrice(item.totalPrice) }}</p>
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
  </style>
  