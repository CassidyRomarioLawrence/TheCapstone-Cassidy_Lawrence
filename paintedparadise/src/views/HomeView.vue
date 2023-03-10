<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1 navigation">
        <NavBar />
      </div>
      <div class="col main-content">
        <section class="home">
          <HomePage />
        </section>
        <section id="about">
          <h4 class="text-center">ABOUT US</h4>
          <AboutPage />
        </section>
        <section>

        </section>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomePage,
    AboutPage
  }
}
</script>
<style>
.navigation{
  backdrop-filter: blur(5px);
}

#about{
  backdrop-filter: blur(20px);
}
.home{
  backdrop-filter: blur(20px)
}
.main-content{
  margin: 0px;
}
</style>