<template lang="html">
  <div class="loading-spinner" v-show="show">
    loading...
  </div>

</template>

<script>
export default {
  data() {
    return {
      ok: false
    }
  },
  props: ['show'],
  computed: {},
  mounted() {

  },
  methods: {},
  components: {}
}
</script>

<style lang="css">

.loading-spinner{
  background-color: red;
  position: absolute;
  top: 0;
  bottom: 0;
  left:0;
  right:0;
  margin: auto;
  width:50px;
  height: 50px;
}

</style>
