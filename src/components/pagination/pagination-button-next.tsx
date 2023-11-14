import { useNavigate, useSearchParams } from 'react-router-dom';

type PaginationButtonProps = {
  currentPage: number;
  direction: string;
}

function PaginationButtonNext(props: PaginationButtonProps): React.JSX.Element {
  const {currentPage, direction} = props;

  const step = (page: number, dir: string) => (dir === 'Далее' ? page + 1 : page - 1).toString();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleSetParams = (param: string, value: string) => {
    searchParams.set(param, value);
    navigate(`?${searchParams.toString()}`);
  };
  return (
    <div style={{cursor: 'pointer', margin: '16px'}}
      className="pagination__link pagination__link--text"
      onClick={() => {
        handleSetParams('page', step(currentPage, direction));
      }}
      data-testid="pagination-button"
    >
      {direction}
    </div>
  );
}

export default PaginationButtonNext;
