module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-uses-react': 'on',
    'react/react-in-jsx-scope': 'on',
    "@babel/plugin-transform-react-jsx": {
      "throwIfNamespace": false
    }
  }
}
