import { createBoard } from '@wixc3/react-board';
import { Icons } from '../../../components/icons/icons';

export default createBoard({
    name: 'Icons',
    Board: () => <Icons imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />, // Provide a valid imgSrc
    isSnippet: true,
    tags: ['Parts'],
});
