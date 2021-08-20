import {render,screen} from '@testing-library/react'
import Header from '../Header'


test('should render the Heading',() => {
    render(<Header />);
    const headingElement = screen.getByText('BookStore')
    expect(headingElement).toBeInTheDocument();
})

test('should render the Heading',() => {
    render(<Header />);
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument();
})