const PORT = 8000
const cheerio = require('cheerio')
const axios = require('axios')
const express = require('express')

const app = express()

const url = 'https://www.theguardian.com'
const url1 = 'https://www.amazon.in/s?k=deal+of+the+day+sale+today'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        $('.dcr-6ztv3t', html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    })
    .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

