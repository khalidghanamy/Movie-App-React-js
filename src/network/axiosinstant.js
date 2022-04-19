import axios from 'axios';


let apiKey = '2c32ce70a33c4568ad864c5b81816c48';
let apiReadAccessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzMyY2U3MGEzM2M0NTY4YWQ4NjRjNWI4MTgxNmM0OCIsInN1YiI6IjYyNWNlODc0MTNhZjVmMTU5MDFlMTljNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QBX0hudj94EwAfq9KWc2Xi7OhqS6b2Y4CPc_qH5XXWo`

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: { api_key: apiKey },
  headers: { 'Authorization': `Bearer ${ apiReadAccessToken }` },
  timeout: 5000,
})



export const axiosInstanceSearch = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie',
  params: { api_key: apiKey },
  headers: { 'Authorization': `Bearer ${ apiReadAccessToken }` },
  timeout: 5000,
})


 