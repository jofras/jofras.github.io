import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        projects: 'projects.html',
        timeline: 'timeline.html',
        blog: 'blog.html',
        project1: 'project-1.html',
        project2: 'project-2.html',
        project3: 'project-3.html',
        project4: 'project-4.html',
        blogGhostInTheMachine: 'blog-ghost-in-the-machine.html',
        blogMakingToolsHuman: 'blog-making-tools-human.html',
        blogAsrHallucinations: 'blog-asr-hallucinations.html',
      }
    }
  }
})
