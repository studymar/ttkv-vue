<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/structure/Header.vue'
import Navmenu from '@/components/structure/Navmenu.vue'
import Footer from '@/components/structure/Footer.vue'
</script>

<template>
  <span>
      <div id="bar"></div>
      <div id="wrapper">

        <Header></Header>
        
        <Navmenu></Navmenu>

        <hr class="noscreen" />
        <div id="skip-menu"></div>

        <div id="content"> 

          <div id="column-1">
            <RouterView />
          </div>

          <div class="cleaner">&nbsp;</div>
        </div>
        <!-- Content of the site end -->

        <Footer></Footer>

      </div> <!-- Wrapper end -->
  </span>


</template>

<style>


</style>
