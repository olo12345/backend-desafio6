import axios from 'axios'

export const apiProducts = axios.create({
    baseUrl: 'https://devsapihub.com/api-ecommerce'
})

export const apiUsers = axios.create({
    baseUrl: 'https://devsapihub.com/api-users'
})
