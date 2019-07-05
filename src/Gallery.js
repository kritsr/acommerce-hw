import React from 'react';
import ItemCard from './ItemCard';
import Pagination from './Pagination'


export default class Gallery extends React.Component {
  componentDidMount() {
    fetch('list.json')
      .then(res => res.json())
      .then(list => {
        this.setState({ list })
      });
  }

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currentPage: 1,
      itemPerPage: 8
    }
  }

  changePage = (i) => {
    this.setState({
      currentPage: i
    })
  }

  changeItemPerPage = (i) => {
    if (!Number.isInteger(i) || i === this.state.itemPerPage) return;
    this.setState({
      itemPerPage: i
    })
  }

  render() {
    const i = (this.state.currentPage - 1) * this.state.itemPerPage
    const pageItems = this.state.list.slice(i, i + this.state.itemPerPage)
    return (
      <div className='container'>
        <div className='row'>
          {pageItems.map(item => <ItemCard item={item} key={item.id} />)}
        </div>
        <Pagination
          onChangePage={this.changePage}
          onChangeItemPerPage={this.changeItemPerPage}
          currentPage={this.state.currentPage}
          itemPerPage={this.state.itemPerPage}
          pageCount={Math.ceil(this.state.list.length / this.state.itemPerPage)}
        />
      </div>
    );
  }
}
