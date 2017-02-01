<template>
<div class="container">
  <vue-video-player>
    <source src="http://localhost:3000/example/video.mp4" type="video/mp4">
  </vue-video-player>
</div>
</template>

<script>
import VueVideoPlayer from './player.vue';

export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  components: {
    VueVideoPlayer
  }
}
</script>

<style>
.container {
  width: 500px
}
</style>
