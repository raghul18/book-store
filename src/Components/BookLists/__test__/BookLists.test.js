import {render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import BookLists from '../BookLists'


test('BookLists is not visible',()=> {
    const books = []

    const {queryByTestId} = render(<BookLists books={books}/>);
    const PageElement = queryByTestId('bookLists')

    
    expect(PageElement).not.toBeInTheDocument();
    
})