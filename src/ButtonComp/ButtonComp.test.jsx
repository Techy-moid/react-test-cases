import { render, screen,fireEvent } from '@testing-library/react';
import ButtonComp from './ButtonComp';


describe('toBeInTheDocument event methods', () => {
    test('ButtonComp compoenent text test case',()=>{
        render(<ButtonComp />);
        let text = screen.getByText('ButtonComp');
        expect(text).toBeInTheDocument();
    })
});


describe('toBeInTheDocument event methods', () => {
    test('ButtonComp compoenent text test case',()=>{
        render(<ButtonComp />);
        let text = screen.getByText('ButtonComp');
        expect(text).toBeInTheDocument();
    })

    test('click event check',()=>{
        const { container } = render(<ButtonComp />)
        fireEvent.click(container.querySelector('.your-btn-classname'));

    })

    test('click event check',()=>{
        const { container } = render(<ButtonComp />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
    })
});