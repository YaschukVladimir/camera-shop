
import { render, screen} from '@testing-library/react';
import SortForm from './sort-form';
import { withHistory } from '../../utils/mock-component';

// Добавьте mock для хука useSearchParams
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useSearchParams: jest.fn() as jest.Mock<URLSearchParamsInit>
// }));

describe('Component: SortForm', () => {

  // jest.mock('react-router-dom', () => ({
  //   ...jest.requireActual('react-router-dom'),
  //   useSearchParams: jest.fn() as jest.Mock<URLSearchParams>
  // }));

  // it('SortForm correctly updates search parameters', () => {
  //   // Задайте начальные значения searchParams как строку (query string)
  //   const initialSearchParams = '?page=1&sortType=&sortDirection=';
  //   const mockSearchParams = new URLSearchParams(initialSearchParams);

  //   // Задайте начальные значения для searchParams через mock
  //   // useSearchParams.mockReturnValue(() => [mockSearchParams]);

  //   // const setSearchParams = jest.fn();

  //   render(
  //     <BrowserRouter>
  //       <SortForm setSearchParams={() => [mockSearchParams]} />
  //     </BrowserRouter>
  //   );

  //   // Найдите элементы, которые соответствуют вашим тестовым элементам (например, input элементы)
  //   const priceSortInput = screen.getByLabelText('по цене');
  //   // const popularSortInput = screen.getByLabelText('по популярности');
  //   const ascendingSortInput = screen.getByLabelText('По возрастанию');
  //   // const descendingSortInput = screen.getByLabelText('По убыванию');

  //   // Симулируйте клик на элементы для изменения параметров
  //   fireEvent.click(priceSortInput);
  //   fireEvent.click(ascendingSortInput);

  //   // Проверьте, что параметры были обновлены в соответствии с вашими ожиданиями
  //   expect(setSearchParams).toHaveBeenCalledWith(
  //     'page=1&sortType=byPrice&sortDirection=ascending'
  //   );
  // });
  it('should render correct', () => {
    const expectedText = 'Сортировать:';
    const setSearchParams = () => ['?page=1&sortType=&sortDirection='];
    const preparedComponent = withHistory(<SortForm setSearchParams={setSearchParams} />);

    render(
      preparedComponent
    );
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});

// import { render, screen, fireEvent } from '@testing-library/react';
// import SortForm from './sort-form';
// import { withHistory } from '../../utils/mock-component';

// const mockSetSearchParams = jest.fn();

// describe('SortForm', () => {
//   it('should render and handle user interactions', () => {

//     const preparedComponent = withHistory(<SortForm setSearchParams={mockSetSearchParams}/>);
//     render(
//       preparedComponent
//     );

//     // Simulate user interactions
//     const priceSortRadio = screen.getByLabelText('по цене');
//     const popularSortRadio = screen.getByLabelText('по популярности');
//     const ascendingSortRadio = screen.getByLabelText('По возрастанию');
//     const descendingSortRadio = screen.getByLabelText('По убыванию');

//     fireEvent.click(priceSortRadio);
//     fireEvent.click(ascendingSortRadio);

//     expect(mockSetSearchParams).toHaveBeenCalledWith({
//       page: '1',
//       sortType: 'Price',
//       sortDirection: 'asc',
//     });

//     fireEvent.click(popularSortRadio);
//     fireEvent.click(descendingSortRadio);

//     expect(mockSetSearchParams).toHaveBeenCalledWith({
//       page: '1',
//       sortType: 'Popular',
//       sortDirection: 'desc',
//     });
//   });
// });
