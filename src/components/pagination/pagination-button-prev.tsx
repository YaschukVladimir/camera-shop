import { SetURLSearchParams } from 'react-router-dom';


type PaginationButtonProps = {
  currentPage: number;
  direction: string;
  setSearchParams: SetURLSearchParams;
}

function PaginationButtonPrev(props: PaginationButtonProps): React.JSX.Element {
  const {setSearchParams, currentPage, direction} = props;

  const step = (page: number, dir: string) => (dir === 'Далее' ? page + 1 : page - 1).toString();
  return (
    <div style={{cursor: 'pointer', margin: '16px'}}
      className="pagination__link pagination__link--text"
      onClick={() => {
        setSearchParams({page: step(currentPage, direction)});
      }}
      data-testid="pagination-button"
    >
      {direction}
    </div>
  );
}

export default PaginationButtonPrev;
