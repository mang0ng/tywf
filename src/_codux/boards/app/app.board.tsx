import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'App',
    Board: () => (
        <MemoryRouter>
            <App />
        </MemoryRouter>
    ),
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 640,
        canvasWidth: 1024,
    },
});
