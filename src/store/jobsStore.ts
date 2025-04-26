import { create } from 'zustand'

/**
 * Jobs store interface
 */
interface JobsState {
  jobListings: any[]
  filterTags: string[]
  setJobListings: (_jobs: any[]) => void
  setFilterTags: (_tags: string[]) => void
  fetchJobListings: () => Promise<void>
}

/**
 * Create jobs store with Zustand
 * Replaces Vuex store from the original Vue.js project
 */
const useJobsStore = create<JobsState>((set) => ({
  jobListings: [],
  filterTags: [],

  setJobListings: (jobs) => set({ jobListings: jobs }),

  setFilterTags: (tags) => set({ filterTags: tags }),

  fetchJobListings: async () => {
    try {
      const response = await fetch('/data.json')
      const data = await response.json()
      set({ jobListings: data })
    } catch (error) {
      console.error('Error fetching job listings:', error)
    }
  },
}))

export default useJobsStore
