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
        lostInTranscription: 'lost-in-transcription.html',
        networkPortal: 'network-portal.html',
        stepsAthletics: '3steps-athletics.html',
        graphicsPipeline: 'graphics-pipeline.html',
        blogGhostInTheMachine: 'blog-ghost-in-the-machine.html',
        blogMakingToolsHuman: 'blog-making-tools-human.html',
        blogAsrHallucinations: 'blog-asr-hallucinations.html',
      }
    }
  }
})
