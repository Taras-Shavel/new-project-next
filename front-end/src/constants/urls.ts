const baseURL: string = 'http://localhost:8080'

const urls = {
    getAll:(page:number, limit:number) => `/transactions?page=${page}&limit=${limit}`
}

export{
    baseURL,
    urls
}