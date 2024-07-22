import { render, screen,fireEvent } from '@testing-library/react';
import Demo from './Demo';

test('testing demo comopoenent',()=>{
    render(<Demo />);
    let text = screen.getByText('Demo');
    expect(text).toBeInTheDocument();
})

test('testing demo image',()=>{
    render(<Demo />);

    let altText = screen.getByAltText('demo image text');
    expect(altText).toBeInTheDocument();

    let title = screen.getByTitle('demo image');
    expect(title).toBeInTheDocument();
})

test('testing input box',()=>{
    render(<Demo />)

    let checkInput = screen.getByRole('textbox');
    let checkPalceHolderName = screen.getByPlaceholderText('enter your name');

    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute('name','username')
    expect(checkPalceHolderName).toBeInTheDocument();

    
})

// sample button click event
test('click event check',()=>{
    const { container } = render(<Demo />)
    fireEvent.click(container.querySelector('.your-btn-classname'));

})

test('click event check',()=>{
    const { container } = render(<Demo />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
})