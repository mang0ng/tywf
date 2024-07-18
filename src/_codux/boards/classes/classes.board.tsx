import { createBoard } from '@wixc3/react-board';
import { Classes } from '../../../components/classes/classes';

export default createBoard({
    name: 'Classes',
    Board: () => <Classes />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        canvasHeight: 640,
    },
    tags: ['Pages'],
});
