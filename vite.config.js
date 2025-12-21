import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'docs', // Output folder for GitHub
    rollupOptions: {
      input: {
        // List all your HTML pages here:
        main: 'index.html',
        about: 'about.html',
        projects: 'projects.html',
        project1: 'project-1.html',
        project2: 'project-2.html',
        project3: 'project-3.html',
        project4: 'project-4.html',
        // Add project-4 if you created it, otherwise remove this line
        // project4: 'project-4.html', 
      }
    }
  }
})