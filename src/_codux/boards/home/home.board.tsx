import { createBoard } from '@wixc3/react-board';
import { Home } from '../../../components/home/home';

export default createBoard({
    name: 'Home',
    Board: () => <Home />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        windowWidth: 1301,
        canvasHeight: 2000,
    },
    tags: ['Pages'],
});
