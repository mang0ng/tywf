import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'Header',
    Board: () => (
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        canvasHeight: 640,
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
        },
    },
    tags: ['Sections'],
});
