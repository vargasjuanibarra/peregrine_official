<template>
  <MusicVideos />
  <hr class="col-sm-12"/>
  <LivePerformance
    v-for="performance in performances"
    :key="performance.id"
    :performance="performance"
  />
  <hr class="col-sm-12"/>
  <Banner v-for="banner in banners" :key="banner.id" :banner="banner" />
</template>

<script>
import MusicVideos from "../components/musicvideo/MusicVideo";
import Banner from "../components/banners/Banner";
import Welcome from "../components/welcome/Welcome";
import LivePerformance from "../components/pornformance/LivePerformance.vue";
import banners from "../components/banners/banners";
import performances from "./performances"
export default {
  name: "Home",
  components: {
    MusicVideos,
    Banner,
    Welcome,
    LivePerformance,
  },
  data() {
    return {
      banners,
      performances
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
