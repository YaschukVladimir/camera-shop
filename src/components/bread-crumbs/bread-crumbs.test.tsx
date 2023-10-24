import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import BreadCrumbs from './bread-crumbs';

describe('Component: BreadCrumbs', () => {
  it('should render correct', () => {
    const expectedText = 'Главная';
    const preparedComponent = withHistory(<BreadCrumbs />);

    render(preparedComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
