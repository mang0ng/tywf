import { createBoard } from '@wixc3/react-board';
import { Classes } from '../../../components/classes/classes';

export default createBoard({
    name: 'Classes',
    Board: () => <Classes />,
    isSnippet: true,
    tags: ['Pages'],
    environmentProps: {
        windowWidth: 1238,
        canvasWidth: 1309,
    },
});
