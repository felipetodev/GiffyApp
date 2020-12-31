import { API_KEY, API_URL } from './settings'

export default function getTrendingTerms() {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`
    
    return fetch(apiURL)
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(response => {
        const { data = [] } = response
        return data
      })
      .catch(err => console.log(err))
}