import {render,fireEvent} from '@testing-library/react'

import SearchBar from '../SearchBar'

test('searchbar is present',()=> {
    const {getByTestId} = render(<SearchBar />);
    const searchBar = getByTestId('searchbar');

    expect(searchBar).toBeTruthy();
})

test('input field is working',()=> {
    const {getByTestId} = render(<SearchBar />);
    const input = getByTestId('inputField');

    fireEvent.change(input,{
        target: {
            value:'Java'
        }
    })

    expect(input.value).toBe('Java')
})

test('form is working',()=> {
    const onSubmit = () => jest.fn();

    const {getByTestId} = render(<SearchBar submit={onSubmit}/>);
    const button = getByTestId('button')

    fireEvent.click(button)
    
    expect(onSubmit).toBeCalled
    
})
