module.exports = {
    root: true,
    // parser: "vue-eslint-parser",
    parserOptions: {
      // parser: "babel-eslint",
      sourceType: 'module'
    },
    env: {
      browser: true,
      node: true,
      es6: true,
      commonjs: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: "standard",
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};
