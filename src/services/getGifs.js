import { API_KEY, API_URL } from './settings'

export default function getGifs({ limit = 20, keyword = 'Kimetsu no Yaiba', rating = 'g', page = 0 } = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`
    
    return fetch(apiURL)
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(response => {
        const { data } = response
        const gifs = data.map(image => {
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
      })
      .catch(err => console.log(err))
}