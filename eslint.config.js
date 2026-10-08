import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			tseslint.configs.recommendedTypeChecked,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			globals: globals.browser,

			parserOptions: {
				projectService: {
					allowDefaultProject: ['eslint.config.js'],
				},
				tsconfigRootDir: import.meta.dirname
			}
		},
		rules: {
			'react-hooks/rules-of-hooks': 'error',
			'indent': ['warn', 'tab'],

			// Debug
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-constant-condition': 'error',

			// Code quality
			'eqeqeq': ['error', 'always'],
			'curly': ['error', 'all'],
			'no-var': 'error',
			'prefer-const': 'error',
			'no-duplicate-imports': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unsafe-assignment': 'error',

			// Security
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-new-func': 'error',
			'no-script-url': 'error',
			'no-throw-literal': 'error'
		}
	},
])
