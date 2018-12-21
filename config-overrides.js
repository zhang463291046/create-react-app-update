const path = require('path')
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  config.resolve.alias['@'] = path.join(__dirname, 'src')
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config)
  config = rewireLess.withLoaderOptions({
    // modifyVars: { "@primary-color": "rgb(24, 144, 255)" },
    javascriptEnabled: true,
  })(config, env)
  return config
}
