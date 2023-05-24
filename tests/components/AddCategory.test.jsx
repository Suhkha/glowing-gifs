import {fireEvent, render, screen} from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Testing <AddCategory> component', () => { 
    test('it should change the value of the input', () => { 
        render(<AddCategory onNewCategory={() =>{}}/>)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'bts'}})

        expect(input.value).toBe('bts');
        //screen.debug()
    })

    test('call onNewCategory if input has a new value', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={(onNewCategory)}/>)

        const inputValue = 'bts';
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue}})
        fireEvent.submit(form);

        screen.debug();

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('it  should not called onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={(onNewCategory)}/>)

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        //expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})