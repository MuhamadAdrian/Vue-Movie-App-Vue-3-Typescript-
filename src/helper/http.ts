import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: 'f9656d768ee8ad105e2e71ec2db9ad91',
    language: 'en-US',
  }
});