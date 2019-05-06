import axios from "axios";


const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key:"a1093d024b297a718e88b5a7b969aac8"
    }
})


export const movieApi = {
    nowplaying : () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => api.get(`movie/${id}`,{params : {append_to_response : videos}}),
    search :(term) => api.get("search/movie", {params : {query:encodeURIComponent(term)}})
}


export const showApi = {
    topRated : () => api.get("tv/top_rated"),
    latest: () => api.get("tv/latest"),
    popular:  () =>api.get("tv/now_playing"),
    showDetail:  (id) => api.get(`tv/${id}`,{params : {append_to_response : videos}}),
    search :(term) => api.get("search/tv", {params : {query:encodeURIComponent(term)}})
}









