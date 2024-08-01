import { createBoard } from '@wixc3/react-board';
import { ImageNtext } from '../../../components/image-ntext/image-ntext';

export default createBoard({
    name: 'ImageNtext 1',
    Board: () => (
        <ImageNtext
            isFlipped={true}
            imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
            description="Studio Description"
            sectionTitle="Section Title"
            buttonText="Button"
        />
    ),
    isSnippet: true,
    tags: ['Sections'],
    environmentProps: { windowWidth: 1920 },
});
