<template lang="html">

  <div id="vue-video-player">
    <loading-spinner :show="loading"></loading-spinner>
    <video :id="id" controls>
      <slot></slot>
    </video>
    <control-bar
      v-on:tooglePlay="tooglePlay"
      v-on:toogleMute="toogleMute"
      v-on:videoPositionChanged="setVideoByTime"
      :isPlaying="state.isPlaying"
      :isMute="state.isMute"
      :currentVideoPosition="currentVideoPosition">
    </control-bar>
  </div>

</template>

<script>
import loadingSpinner from './loading-spinner.vue';
import controlBar from './control_bar/control-bar.vue';

export default {
  data() {
    return {
      video: null,
      loading: true,
      videoWidth: null,
      videoHeight: null,
      state: {
        isPlaying: false,
        isMute: false
      },
      currentVideoPosition: 0
    }
  },
  props: {
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id() {
      return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
    }
  },
  mounted() {
    this.video = document.getElementById(this.id);
    this.video.autoplay = this.autoplay;
    this.video.controls = false;
    this.video.addEventListener('loadstart', () => console.log(this.video.duration));
    // video.addEventListener('durationchange', () => write('durationchange event fired'));
    // video.addEventListener('progress', () => write('progress event fired'));
    this.video.addEventListener('loadedmetadata', () => {
      // do we really need this?
      this.videoWidth = this.video.videoWidth;
      this.videoHeight = this.video.videoHeight;
    });
    this.video.addEventListener('canplay', () => this.loading = false);
    // video.addEventListener('ended', ended);
    this.video.addEventListener('waiting', () => this.loading = true);
    this.video.addEventListener('playing', () => this.isPlaying = true);
    this.video.addEventListener('timeupdate', this.videoTimeUpdate)
  },
  methods: {
    tooglePlay() {
      if (!this.state.isPlaying) {
        this.video.play();
        this.state.isPlaying = true;
      } else {
        this.video.pause();
        this.state.isPlaying = false;
      }
    },
    toogleMute() {
      this.video.muted = this.state.isMute = !this.state.isMute;
    },
    videoTimeUpdate() {
      this.currentVideoPosition = (this.video.currentTime / this.video.duration) * 100;
    },
    setVideoByTime(percent) {
      this.video.currentTime = Math.floor(percent * this.video.duration)
    },
  },
  components: {
    loadingSpinner,
    controlBar
  }
}
</script>

<style lang="css">
#vue-video-player {
  position: relative;
}
video{
  width: 100%;
  height: 100%;
}
</style>
