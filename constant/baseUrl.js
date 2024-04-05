// const baseUrl = 'https://sieghart-blog-api.vercel.app/v1'
const baseUrl = import.meta.env.VITE_ENVIRONMENT == 'dev' ? 'http://localhost:5000/v1':  'https://sieghart-blog-api.vercel.app/v1'

export default baseUrl;