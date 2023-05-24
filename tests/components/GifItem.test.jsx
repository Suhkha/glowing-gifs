import {render, screen} from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Testing GifItem', () => { 
    const title = "Main title";
    const url = "https://google.com";

    test('it should match with the snapshot', () => { 

        const { container } = render(<GifItem title={ title } url={ url }/>)
        expect(container).toMatchSnapshot();
    });

    test('show image with its URL and ALT', () => {
        render(<GifItem title={ title } url={ url }/>)
        //screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const {src, alt} = screen.getByRole('img');
        expect(src).toMatch(url);
        expect(alt).toMatch(title)
    });

    test('show title in the component', () => {
        render(<GifItem title={ title } url={ url }/>)
        expect(screen.getByText(title)).toBeTruthy();
    })
})