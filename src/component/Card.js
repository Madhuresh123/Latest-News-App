import { Link } from 'react-router-dom'

import React, { Component } from 'react'

export default class Card extends Component {
  render() {

    let {title, description,news,img} = this.props

    return (
        <div className='card'>
                     <img src={img} alt='' />
                     <div className='card_content'>
                     <p style={{ fontWeight : "bold"}}>{title.slice(0,45)}...</p>
                     <p>{!description? "null" : description.slice(0,88)}...</p>
                     </div>
                     <button><Link to={news} target='_black'>Read more</Link></button>
                 </div>
    )
  }
}

