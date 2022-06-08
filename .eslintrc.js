module.exports = {
  /**
    * 默认情况下，ESLint会在所有父级目录里寻找配置文件，一直到根目录。
    * 为了将ESLint限制在一个特定的项目，设置root: true；
    * ESLint一旦发现配置文件中有 root: true，就会停止在父级目录中寻找。
    */
  root: true,
  // 指定脚本运行环境
  env: {
    browser: true,
    node: true
  },
  // 基础配置
  'extends': [
    '@vue/standard',
    'plugin:vue/recommended'
  ],
  // 指定解析器
  // babel-eslint：一个对babel解析器的包装，使其能够参与Eslint兼容
  parserOptions: {
    parser: 'babel-eslint',
    // ECMAScript 版本
    "ecmaVersion": 6,
    "sourceType": "script",//module
    // 想使用的额外的语言特性:
    "ecmaFeatures": {
      // 允许在全局作用域下使用 return 语句
      "globalReturn": true,
      // impliedStric
      "impliedStrict": true,
      // 启用 JSX
      "jsx": true
    },

    // 规则配置
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'vue/name-property-casing': 'off',
      'vue/require-prop-types': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      "camelcase": 'off',
      'semi': [
        'error',
        'always'
      ],
      'semi-spacing': 'error',
      'vue/max-attributes-per-line': [
        'error', {
          'singleline': 2,
          'multiline': {
            'max': 1,
            'allowFirstLine': false
          }
        }
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'never',
          objects: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'ignore'
        }
      ],
      'eqeqeq': [
        'error',
        'allow-null'
      ]
    }
  };
