import React from 'react'

export default function Newsitem(props) {
    return (
        <>
        <span className="badge bg-danger" style={{position:"absolute",right:"13px",top:"16px",zIndex:1}}>{props.source}</span>
        <div className="card my-3">
            <img src={props.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><small className="text-muted">By: {props.author} on {props.publishedAt}</small></p>
                <a href={props.newsUrl} className="btn btn-primary btn-sm" target="_blank">read more</a>
            </div>
        </div>
        </>
    )
}
