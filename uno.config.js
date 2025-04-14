import { defineConfig, presetUno, presetAttributify, transformerDirectives } from 'unocss'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  presets: [
    presetWind({
      dark: 'media',
    }),
    presetAttributify()
  ],
  transformers: [
    transformerDirectives()
  ],
  theme: {},
  shortcuts: {
    // Define any component-specific classes here
    'date': 'text-sm text-gray-600',
    'details': 'mb-2 text-sm px-2',
    'tools': 'text-sm text-gray-500 mb-2 px-2',
    'services': 'text-sm text-gray-500 px-2'
  }
})
