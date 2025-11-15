
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './src/sanity/schemaTypes'

export default defineConfig({
  title: 'Dende',
  projectId: 'fvoh5via',
  dataset: 'production',
  plugins: [structureTool()],
  schema,
})
