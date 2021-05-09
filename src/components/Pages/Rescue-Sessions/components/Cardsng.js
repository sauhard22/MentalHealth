import React from 'react'

function Cardsng({value, url}) {
    return (
        <div>
            <div className="card mb-4 box-shadow">
                <img className="card-img-top card-fixed" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src={url} />
                <div className="card-body">
                    <p className="center">{value}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardsng
