import React from 'react';

export default class ItemCard extends React.Component {
  getPageButton() {
    const currentPage = this.props.currentPage;
    const pageCount = this.props.pageCount;
    const range = 2;
    const minPage = Math.max(1, currentPage - range)
    const maxPage = Math.min(pageCount, currentPage + range);
    const result = [];
    for (let i = minPage; i <= maxPage; i++) {
      const active = i === currentPage;
      result.push(<li className={`page-item ${active ? 'active' : ''}`}><button className="page-link" onClick={() => this.props.onClick(i)}>{i}</button></li>)
    }
    return result;
  }

  isFirstPage() {
    return this.props.currentPage <= 1
  }
  isLastPage() {
    return this.props.currentPage >= this.props.pageCount
  }

  render() {
    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${this.isFirstPage() ? 'disabled' : ''}`}><button className="page-link" onClick={() => this.props.onClick(this.props.currentPage - 1)}>&lt;</button></li>
          {this.getPageButton()}
          <li className={`page-item ${this.isLastPage() ? 'disabled' : ''}`}><button className="page-link" onClick={() => this.props.onClick(this.props.currentPage + 1)}>&gt;</button></li>
        </ul>
      </nav>
    );
  }
}