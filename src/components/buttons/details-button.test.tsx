import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import DetailsButton from './details-button';


describe('Component: DetailsButton', () => {
  it('should render correct', () => {
    const expectedProps = {
      id: 1,
    };
    const { id } = expectedProps;
    const expectedText = 'Подробнее';
    const { withStoreComponent } = withStore(<DetailsButton id={id} />, {});
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
