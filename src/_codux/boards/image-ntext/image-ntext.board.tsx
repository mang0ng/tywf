import { createBoard } from '@wixc3/react-board';
import { ImageNtext } from '../../../components/image-ntext/image-ntext';

export default createBoard({
    name: 'ImageNtext 1',
    Board: () => (
        <ImageNtext
            buttonText="Button"
            isFlipped={true}
            imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
            description="Studio Description"
        />
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1064,
        canvasHeight: 640,
        windowHeight: 637,
    },
    tags: ['Sections'],
});
