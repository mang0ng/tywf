import { createBoard } from '@wixc3/react-board';
import { Contact } from '../../../components/contact/contact';

export default createBoard({
    name: 'Contact',
    Board: () => <Contact />,
    isSnippet: true,
    tags: ['Pages'],
    environmentProps: {
        canvasWidth: 1697,
        windowWidth: 1703,
    },
});
