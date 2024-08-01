import { createBoard } from '@wixc3/react-board';
import { About } from '../../../components/about/about';

export default createBoard({
    name: 'About',
    Board: () => <About />,
    isSnippet: true,
    tags: ['Pages'],
    environmentProps: {
        canvasWidth: 1602,
        windowWidth: 1778,
        canvasHeight: 1626,
    },
});
