const path = require('path')

module.exports = {

  webpack(defaults, options) {
    defaults.output.filename = './index.js'
    defaults.plugins.find(el => {
      if (el.constructor.name === 'ExtractTextPlugin') {
        el.filename = './style.css'
      }
    })
    return defaults;
  }

};
