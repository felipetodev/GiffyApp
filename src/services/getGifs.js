const apiKey = 'PSBv18pHagbYvIof1KR3GTY97VtgrIOG'

export default function getGifs({ keyword = 'Kimetsu no Yaiba' } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    
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