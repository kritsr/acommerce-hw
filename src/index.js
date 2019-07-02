import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment'

function getStarRating(rate) {
  const color = 'FireBrick';
  return <div>{[...Array(5).keys()].map(i=>
      <span key={i} className={`${i<rate?'fas':'far'} fa-star`} style={{color}}></span>
    )}
    </div>;
}

async function getListJson() {
  return fetch('list.json').then(res => res.json())
}

class Card extends React.Component {
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

class Gallery extends React.Component {
  componentDidMount() {
    getListJson().then(list=>{
      this.setState({list})
    });
  }
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  render() {
    return (
    <div className='container'>
      <div className='row'>
        {this.state.list.map(item=><Card item={item} key={item.id}/>)}
      </div>
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item"><a className="page-link" href="#">&lt;</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">&gt;</a></li>
        </ul>
      </nav>
    </div>
    );
  }
}

ReactDOM.render(
  <Gallery />,
  document.getElementById('root')
);