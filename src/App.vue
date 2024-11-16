<script setup>
import Navbar from './components/Navbar.vue';
import Category from './components/Category.vue';
import Footer from './components/Footer.vue';
import ListFoods from './pages/ListFoods.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>

    <!-- Navbar -->
    <Navbar />
    <!-- /.end-navvar -->

    <!-- Menu Section -->
    <Category />
    <!-- /.end-menu-section -->

    <!-- Main Content -->
    <RouterView />
    <!-- /.end-main-content -->
     
    <!-- Footer -->
    <Footer />
    <!-- /.end-footer -->
  </div>
</template>