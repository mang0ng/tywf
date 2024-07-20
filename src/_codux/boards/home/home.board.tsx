import { createBoard } from '@wixc3/react-board';
import { Home } from '../../../components/home/home';

export default createBoard({
    name: 'Home',
    Board: () => <Home />,
    isSnippet: true,
    tags: ['Pages'],
    environmentProps: {
        windowWidth: 1327,
        canvasWidth: 772,
    },
});
