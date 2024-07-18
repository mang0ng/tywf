import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import Card_module from '../../../components/card/card.module.scss';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            className={Card_module.heading3}
            h3="Heading 3"
            description="Descriptions"
            imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        canvasHeight: 640,
        windowWidth: 1130,
    },
    tags: ['Parts'],
});
