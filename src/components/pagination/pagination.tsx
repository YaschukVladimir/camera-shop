import { PRODUCTS_PER_PAGE } from '../../const';
import { Product } from '../../types/types';

type PaginationProps ={
  products: Product[];
  paginate: (number: number) => void;
  currentPage: number;
}

function Pagination({products, paginate, currentPage}: PaginationProps): React.JSX.Element {

  const pagesQuantity = Array.from({length: Math.ceil(products.length / PRODUCTS_PER_PAGE)}, (_, index) => index + 1);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {pagesQuantity.length && pagesQuantity.map((index) => (
          <li className="pagination__item" key={index} onClick={() => paginate(index)} style={{cursor: 'pointer'}}>
            <div
              className={`pagination__link ${currentPage === index ? 'pagination__link--active' : ''}`}
            >
              {index}
            </div>
          </li>
        ))}
      </ul>
    </div>


  // <div className="pagination">
  //   <ul className="pagination__list">
  //     <li className="pagination__item">
  //       <a
  //         className="pagination__link pagination__link--active"
  //         href={'1'}
  //       >
  //                     1
  //       </a>
  //     </li>
  //     <li className="pagination__item">
  //       <a className="pagination__link" href={'2'}>
  //                     2
  //       </a>
  //     </li>
  //     <li className="pagination__item">
  //       <a className="pagination__link" href={'3'}>
  //                     3
  //       </a>
  //     </li>
  //     <li className="pagination__item">
  //       <a
  //         className="pagination__link pagination__link--text"
  //         href={'2'}
  //       >
  //                     Далее
  //       </a>
  //     </li>
  //   </ul>
  // </div>
  );
}

export default Pagination;
