import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
   
    const loadNews = async() => {
        props.progress(30)
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&category=${props.category}&page=${page}`
        props.progress(50)
        let data = await fetch(url)
        props.progress(70)
        let parseData = await data.json()
        setArticles(parseData['articles'])
        setTotal(parseData['totalResults'])
        setLoading(false)
        props.progress(100)
    }

    const fetchMoreData = async () => {
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&category=${props.category}&page=${page+1}`
        let data = await fetch(url)
        let parseData = await data.json()
        setArticles(articles.concat(parseData['articles']))
        console.log(total)
        console.log(articles.length)
    }

    useEffect(() => {
        loadNews()
      },[])

  return (
    <div>
        <h3 className='text-center' style= {{margin:"80px 0px 30px 0px"}}>newsRabbit - Top Headlines :)</h3>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={(articles.length + 2) <= total}
          loader={<Spinner/>}
          style={{overflow:"hidden"}}
        >
        <div className='row mx-2'>
            {articles.map((elem) => {
                return <div style={{position:"relative"}} className='col-md-4' key={elem.url}><Newsitem source={elem.source.name} author={elem.author ? elem.author : 'Unknown'} publishedAt={elem.publishedAt} title={elem.title} newsUrl={elem.url} description={elem.description} imageUrl={elem.urlToImage}/></div>
            })}
        </div>
        </InfiniteScroll>
    </div>
  )
}

