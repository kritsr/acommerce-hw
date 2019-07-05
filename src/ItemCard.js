import React from 'react';
import moment from 'moment'

function getStarRating(rate) {
  const color = 'FireBrick';
  return <div>{[...Array(5).keys()].map(i =>
    <span key={i} className={`${i < rate ? 'fas' : 'far'} fa-star`} style={{ color }}></span>
  )}
  </div>;
}

export default class ItemCard extends React.Component {
  render() {
    return (
      <div className='col-lg-3 col-md-4 col-sm-6 mb-2'>
        <div className='card'>
          <img alt='' className='card-img-top' src={this.props.item.image_url}></img>
          <div className='card-body'>
            <h6 className='card-title'>{this.props.item.title}</h6>
            <div className='card-text'>
              <span title={this.props.item.created_at}>{moment(this.props.item.created_at).fromNow()}</span>
            </div>
            <div>{getStarRating(this.props.item.vote)}</div>
            <div className='card-text'>฿{this.props.item.price.toLocaleString()}</div>
          </div>
        </div>
      </div>
    );
  }
}