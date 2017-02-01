# vue-video-player

## This is work in progress!!!

# Installation

```
npm install --save @doctrina/vue-video-player
```

## Default import

```javascript
import Vue from 'vue'
import VueVideoPlayer from 'vue-video-player'

Vue.use(VueVideoPlayer)
```

Or:

```javascript
import Vue from 'vue'
import { VueVideoPlayer } from 'vue-video-player'

Vue.component('vue-video-player', VueVideoPlayer)
```

**⚠️ A css file is included when importing the package. You may have to setup your bundler to embed the css in your page.**

## Distribution import

Install all the components:

```javascript
import 'vue-video-player/dist/style.css'
import VueVideoPlayer from 'vue-video-player/dist/index.js'

Vue.use(VueVideoPlayer)
```

Use specific components:

```javascript
import 'vue-video-player/dist/style.css'
import { VueVideoPlayer } from 'vue-video-player/dist/index.js'

Vue.component('vue-video-player', VueVideoPlayer)
```

**⚠️ You may have to setup your bundler to embed the css file in your page.**

## Browser

```html
<link rel="stylesheet" href="vue-video-player/dist/style.css"/>

<script src="vue.js"></script>
<script src="vue-video-player/dist/index.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually:

```javascript
Vue.use(VueVideoPlayer)
```

Or:

```javascript
Vue.component('vue-video-player', VueVideoPlayer)
```


# Usage

```html
<template>
<div class="container">
  <vue-video-player>
    <source src="video.mp4" type="video/mp4">
  </vue-video-player>
</div>
</template>

<script>
import {
  VueVideoPlayer
} from 'vue-video-player';

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
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
