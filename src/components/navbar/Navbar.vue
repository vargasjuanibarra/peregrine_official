<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <!-- <a class="navbar-brand" href="#"
      ><img class="col-3" src="./peregrine_logo_white.png" alt=""
    /></a> -->
    <button
      class="navbar-toggler bg-dark"
      type="button"
      data-toggle="collapse"
      data-placement="right"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="social-media">
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCPGI1VTpepdN4_KiJSvAXAw"
          ><i class="fab fa-youtube"></i
        ></a>
        <a target="_blank" href="https://www.facebook.com/PeregrinePH"
          ><i class="fab fa-facebook-square"></i
        ></a>
        <a
          target="_blank"
          href="https://www.instagram.com/peregrinemusicph/?fbclid=IwAR06r24VfoGZhK_c0Q4r0Sz1wsl6osNGSz950Yva7BwIS5MUMt3nuHsK658"
          ><i class="fab fa-instagram"></i
        ></a>
        <a
          target="_blank"
          href="https://twitter.com/PeregrinePh?fbclid=IwAR0lRtMcsNbaJDdzvdMc6C6rq1fG6GXOOxLdSPgiYf12JpnkIFuKhAV37Ls"
          ><i class="fab fa-twitter"></i
        ></a>
        <a
          target="_blank"
          href="https://open.spotify.com/artist/3PiJfXhgbfLTxTp4fc0bbx?si=-aE5tddPSbeETPdsxORlJg&fbclid=IwAR1n1qC8-rkTYCLXY_8QlU66DQwDaS_jiK-MtJEDcouUG1e7vEkAs9F7m2k&nd=1"
          ><i class="fab fa-spotify"></i
        ></a>
        <a target="_blank" href="https://peregrineph.bandcamp.com/music"
          ><i class="fab fa-bandcamp"></i
        ></a>
      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/"
            ><a
              class="nav-link text-light"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              >HOME <span class="sr-only">(current)</span></a
            ></router-link
          >
        </li>
        <li class="nav-item active">
          <router-link to="/about"
            ><a
              class="nav-link text-light"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              >ABOUT</a
            ></router-link
          >
        </li>
        <li class="nav-item active">
          <router-link to="/store">
            <a
              class="nav-link text-light"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              >STORE</a
            >
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  width: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.nav-link {
  font-size: 1rem;
  margin-right: 30px;
}
a {
  text-decoration: none;
}
a:hover {
  transition: 0.3s;
}
nav {
  background-color: none;
}
i {
  font-size: 1.6rem;
  padding: 15px;
  color: white;
  transition: 0.3s;
}
i:hover {
  opacity: 0.5;
  transition: 0.3s;
}
</style>