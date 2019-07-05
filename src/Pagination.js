import React from 'react';

export default class ItemCard extends React.Component {
  getPageButton() {
    return [...Array(this.props.pageCount).keys()].map(i =>
      <li key={i+1} className={`page-item ${i+1 === this.props.currentPage ? 'active' : ''}`}>
        <button className="page-link" onClick={() => this.props.onChangePage(i+1)}>{i+1}</button>
      </li>
    );
  }

  isFirstPage() {
    return this.props.currentPage <= 1
  }
  isLastPage() {
    return this.props.currentPage >= this.props.pageCount
  }

  render() {
    return (
      <div>
        <span className='float-right'>
          <select className='custom-select' onChange={event => this.props.onChangeItemPerPage(parseInt(event.target.value))}>
            <option hidden>Items per page</option>
            <option value='4'>4 per page</option>
            <option value='8'>8 per page</option>
            <option value='12'>12 per page</option>
          </select>
        </span>
        <nav className='float-right'>
          <ul className="pagination">
            <li className={`page-item ${this.isFirstPage() ? 'disabled' : ''}`}><button className="page-link" onClick={() => this.props.onChangePage(this.props.currentPage - 1)}>&lt;</button></li>
            {this.getPageButton()}
            <li className={`page-item ${this.isLastPage() ? 'disabled' : ''}`}><button className="page-link" onClick={() => this.props.onChangePage(this.props.currentPage + 1)}>&gt;</button></li>
          </ul>
        </nav>
      </div>
    );
  }
}