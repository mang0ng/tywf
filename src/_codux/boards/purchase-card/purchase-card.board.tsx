import { createBoard } from '@wixc3/react-board';
import { PurchaseCard } from '../../../components/purchase-card/purchase-card';

export default createBoard({
    name: 'PurchaseCard',
    Board: () => (
        <PurchaseCard imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
    ),
    isSnippet: true,
    tags: ['Parts'],
});
