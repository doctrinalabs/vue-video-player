<template>
<div class="control-bar">
  <timeline v-on:videoPositionChanged="videoPositionChanged" :currentVideoPosition="currentVideoPosition" :controlBarWidth="width" :mousePositionX="mousePositionX">
  </timeline>
  <br>
  <br>
  <button v-on:click="tooglePlay">{{ playBtn }}</button>
  <button v-on:click="toogleMute">{{ muteBtn }}</button>
</div>
</template>

<script>
import timeline from './timeline.vue';

export default {
  data() {
    return {
      width: 0,
      mousePositionX: 0
    }
  },
  props: ['isPlaying', 'isMute', 'currentVideoPosition'],
  computed: {
    playBtn() {
      return this.isPlaying ? 'Pause' : 'Play';
    },
    muteBtn() {
      return this.isMute ? 'Mute' : 'Unmute';
    }
  },
  mounted() {
    this.width = this.$el.getBoundingClientRect().width;
    document.addEventListener("mousemove", (e) => {
      e.preventDefault();
      this.mousePositionX = e.pageX - this.$el.getBoundingClientRect().left;
    });
  },
  methods: {
    tooglePlay() {
      this.$emit('tooglePlay')
    },
    toogleMute() {
      this.$emit('toogleMute')
    },
    videoPositionChanged() {
      let percent = this.restrictedMousePositionX() / this.width
      this.$emit('videoPositionChanged', percent)
    },
    restrictedMousePositionX() {
      if (this.mousePositionX < 0) return 0
      if (this.mousePositionX > this.width) return this.width
      return this.mousePositionX
    }
  },
  components: {
    timeline
  }
}
</script>

<style lang="css">
.control-bar{
  width: 97%;
  margin: 0 auto;
  position: relative;
  height: 50px;
  background-color: gray;
  text-align: left;
}
</style>
