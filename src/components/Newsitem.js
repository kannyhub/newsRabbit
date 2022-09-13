import React from 'react'

export default function Newsitem(props) {
    return (
        <div className="card my-3">
            <img src={props.imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="/" className="btn btn-primary btn-sm">read more</a>
                </div>
        </div>
    )
}
