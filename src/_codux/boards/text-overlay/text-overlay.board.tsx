import { createBoard } from '@wixc3/react-board';
import { TextOverlay } from '../../../components/text-overlay/text-overlay';

export default createBoard({
    name: 'TextOverlay',
    Board: () => <TextOverlay />,
    isSnippet: true,
    tags: ['Parts'],
});
