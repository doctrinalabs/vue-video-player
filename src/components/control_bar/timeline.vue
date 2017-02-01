<template>
<div>
  <div class="timeline" :class="{'not-dragging': !down}" v-bind:style="{width: timelineWidth + 'px'}"></div>
  <div class="playhead" :class="{'not-dragging': !down}"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      down: false,
      timeline: null,
      playhead: null
    }
  },
  props: ['currentVideoPosition', 'controlBarWidth', 'mousePositionX'],
  computed: {
    timelineWidth() {
      if (this.down) return false;
      return (this.currentVideoPosition * this.controlBarWidth) / 100;
    }
  },
  watch: {
    timelineWidth(v) {
      if (!this.down) this.updatePlayheadPosition(v);
    },
    mousePositionX(v) {
      if (this.down && v >= 0 && v <= this.controlBarWidth) {
        this.updatePlayheadPosition(v);
        this.timeline.style.width = v + 'px';
      }
    }
  },
  mounted() {
    // console.log(this.$root.$data.rootClassName);
    // console.log(this.$root.$get('rootClassName'));
    this.playhead = this.$el.getElementsByClassName('playhead')[0];
    this.timeline = this.$el.getElementsByClassName('timeline')[0];

    document.addEventListener("mousedown", (e) => {
      e.preventDefault();
      e.target == this.playhead ? this.down = true : this.down = false;
    });

    document.addEventListener("mouseup", (e) => {
      e.preventDefault();
      if (this.down) {
        this.$emit('videoPositionChanged');
        this.down = false;
      }
    });
  },
  methods: {
    updatePlayheadPosition(x) {
      this.playhead.style.left = (x - this.playhead.offsetWidth / 2) + 'px';
    }
  },
  components: {}
}
</script>

<style scoped>
.timeline {
  position: absolute;
  top: 5px;
  height: 10px;
  background-color: red;
  &.not-dragging {
    transition: width .3s linear;
  }
}

.playhead {
  position: absolute;
  top: 0;
  left: -10px;
  background-color: red;
  border-radius: 50% 50%;
  width: 20px;
  height: 20px;
  cursor: default;
  &.not-dragging {
    transition: left .3s linear;
  }
}
</style>
