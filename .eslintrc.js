module.exports = {
	env: {
		browser: true,
		es6: true
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb',
		'prettier'
	],
	rules: {
		'no-undef':0,
		'no-console':0,
		'func-names':0,
		'consistent-return':0,
		'react/prop-types': 0,
		'no-unused-expressions':0,
		'react/react-in-jsx-scope': 0,
		'react/jsx-filename-extension':0,
		'react/destructuring-assignment':0,
		'react/display-name': 0,
		'no-extra-semi': 0,
		'import/no-unresolved': 0,
		'import/extensions': 0,
    'import/no-duplicates': 0,
		'import/no-extraneous-dependencies':0,
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/no-extra-semi': ['error'],
		'@typescript-eslint/no-explicit-any': 0,
		'jsx-a11y/no-autofocus': 0,
		'jsx-a11y/label-has-associated-control':0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0
	},
	overrides: [
    {
      files: ['index.css'],
      rules: {
        'parserOptions': 'off'
      },
    },
  ],
}
