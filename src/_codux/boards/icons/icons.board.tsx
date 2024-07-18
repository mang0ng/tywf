import { createBoard } from '@wixc3/react-board';
import { Icons } from '../../../components/icons/icons';

export default createBoard({
    name: 'Icons',
    Board: () => <Icons />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
    },
    tags: ['Parts'],
});
