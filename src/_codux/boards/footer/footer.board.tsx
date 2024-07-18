import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        canvasHeight: 640,
        canvasMargin: { left: 0, right: 0, bottom: 0 },
    },
    tags: ['Sections'],
});
