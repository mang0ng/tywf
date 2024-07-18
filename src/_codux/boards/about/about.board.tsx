import { createBoard } from '@wixc3/react-board';
import { About } from '../../../components/about/about';

export default createBoard({
    name: 'About',
    Board: () => <About />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 446,
        windowWidth: 982,
        canvasWidth: 982,
    },
    tags: ['Pages'],
});
