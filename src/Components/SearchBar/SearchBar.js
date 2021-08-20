import React from 'react'
import './SearchBar.css'

const SearchBar = React.forwardRef((props, ref) => {
    return (
        <div data-testid='searchbar' className='searchbar'>
            <form data-testid='form' className='searchbar__form' onSubmit={props.submit}>
                <input data-testid='inputField' className='searchbar__forminput'
                    type='text'
                    placeholder='Search Books'
                    ref={ref}
                />
                <button data-testid='button' className='searchbar__formbutton' type='submit'>Search</button>
            </form>
        </div>
    )
})



export default SearchBar
