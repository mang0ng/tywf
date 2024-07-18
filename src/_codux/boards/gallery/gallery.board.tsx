import { createBoard } from '@wixc3/react-board';
import { Gallery } from '../../../components/gallery/gallery';

export default createBoard({
    name: 'Gallery',
    Board: () => <Gallery />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        canvasHeight: 640,
    },
    tags: ['Pages'],
});
