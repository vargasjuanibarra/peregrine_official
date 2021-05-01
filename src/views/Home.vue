<template>
  <hr class="col-sm-12"/>
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
      performances: [
        {
          id: 1,
          link: "https://www.youtube.com/embed/nmBtrixL1H4",
          text: '"French Toast" Official Music Video',
        },
        {
          id: 2,
          link: "https://www.youtube.com/embed/lsipDZkGWG0",
          text:
            '"French Toast" live performance of peregrine for Sonik Music Conference last October 2020',
        },
        {
          id: 3,
          link: "https://www.youtube.com/embed/SP_ulzYXT-A",
          text:
            '"Coming home to you" live performance of peregrine for Sonik Music Conference last October 2020',
        },
        {
          id: 4,
          link: "https://www.youtube.com/embed/A5eBYTQEM7k",
          text:
            '"I Won\'t Stay" live performance of peregrine for Playground Sessions last September 2019 ',
        },
        {
          id: 5,
          link: "https://www.youtube.com/embed/mrl3oOk4Ngk",
          text:
            '"Coffee in the Evening" live performance of peregrine for Playground Sessions last September 2019 ',
        },
        {
          id: 6,
          link: "https://www.youtube.com/embed/L-2F8Cecywg",
          text:
            '"Comming Home To You" live performance of peregrine for Playground Sessions last September 2019 ',
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
