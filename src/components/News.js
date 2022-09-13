import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'

export default function News() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [total, setTotal] = useState(0)
    const [page, setpage] = useState(1)
   
    const loadNews = async() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=fd76533610124902a867cd522c2ff6ae'
        let data = await fetch(url)
        let parseData = await data.json()
        setArticles(parseData['articles'])
    }

    useEffect(() => {
        // loadNews()
        console.log('hello')
      })
      console.log('hello 2')
  return (
    <div>
        <h3 className='text-center' style= {{margin:"80px 0px 30px 0px"}}>newsRabbit - Top Headlines :)</h3>
        <div className='row mx-2'>
            {articles.map((elem) => {
                return <div className='col-md-4' key={elem.url}><Newsitem title={elem.title} description={elem.description} imageUrl={elem.urlToImage}/></div>
            })}
        </div>
    </div>
  )
}

