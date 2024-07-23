import { render, screen,fireEvent } from '@testing-library/react';
import { act } from 'react';
import Sample from './Sample';

describe('toBeInTheDocument event methods', () => {
    test('Sample comopoenent text test case',()=>{
        render(<Sample />);
        let text = screen.getByText('Sample');
        expect(text).toBeInTheDocument();
    })
});
describe('Fire event methods', () => {
    test('onChange event on input in Sample comopoenent test case',()=>{
        act(() => {
            render(<Sample />);
        });
        let checkInput = screen.getByRole('textbox');
        expect(checkInput).toHaveAttribute('name','username')
        fireEvent.change(checkInput,{target:{value:'a'}});
        expect(checkInput.value).toBe('a');

    })
});