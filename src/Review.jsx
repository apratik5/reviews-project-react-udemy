import React from 'react'

const Review = ({ name, job, image, text }) => {
    return (
        <div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{job}</p>
            <p>{text}</p>
        </div>
    )
}

export default Review
