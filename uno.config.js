import { defineConfig, presetUno, presetTypography, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography()
  ],
  transformers: [
    transformerDirectives() // Enable @apply
  ],
  theme: {
    fontFamily: {
      heading: 'var(--font-heading)',
      sans: 'var(--font-sans)'
    }
  }
})
