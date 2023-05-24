import {render, screen} from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Mock of this path
jest.mock('../../src/hooks/useFetchGifs');

describe('testing <GifGrid /> component', () => {
    const category = 'BTS';

    test('show loading at first', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={category}/>);

        //screen.debug()
        expect(screen.getAllByText('Loading...'));
        expect(screen.getAllByText(category));
    })

    test('it should show items when the images are loaded from useFetchGifs', () => {
        const gifs = [
            {
                id: '123abc',
                title: 'BTS',
                url: 'https://google.com'
            },
            {
                id: '456def',
                title: 'Rap line bts',
                url: 'https://google.com'
            },
            {
                id: '789ghi',
                title: 'Vocal line bts',
                url: 'https://google.com'
            },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        
        render(<GifGrid category={category}/>);

        //screen.debug()
        expect(screen.getAllByRole('img').length).toBe(3);
    })
})
