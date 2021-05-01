<template>
  <Navbar />
  <Welcome />
  <hr />
  <div class="container">
    <div class="row">
      <router-view />
    </div>
  </div>
  <hr />
  <Footer />
</template>
<script>
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Welcome from "./components/welcome/Welcome.vue";

export default {
  components: {
    Navbar,
    Footer,
    Welcome,
  },
};

</script>

<style>
* {
  padding: 0;
  margin: 0;
}
hr {
  margin-top: 30px;
  margin-bottom: 30px;
}
#app {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.container {
  background: none;
}
body {
  background: url("./luhluh7.jpg")
  fixed 100%;
}


</style>
