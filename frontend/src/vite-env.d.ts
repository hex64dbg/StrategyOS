/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MSW_ENABLED: string | undefined
  // Add more env variables here as needed:
  // readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
