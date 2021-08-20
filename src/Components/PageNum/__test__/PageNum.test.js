import {render,fireEvent, findByTestId, queryByTestId} from '@testing-library/react'

import PageNum from '../PageNum'


test('Pagination is not visible',()=> {
    const books = []

    const {queryByTestId} = render(<PageNum books={books}/>);
    const PageElement = queryByTestId('pagination')
    
    expect(PageElement).not.toBeInTheDocument();
    
})