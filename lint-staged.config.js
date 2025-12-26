export default {
  'frontend/**/*.{ts,tsx}': ['pnpm --filter stragetyos-frontend eslint --fix'],
  'frontend/**/*.{json,css}': ['pnpm --filter stragetyos-frontend prettier --write'],
}




