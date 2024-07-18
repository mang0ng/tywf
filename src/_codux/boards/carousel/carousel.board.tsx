import { createBoard } from '@wixc3/react-board';
import { Carousel } from '../../../components/carousel/carousel';

export default createBoard({
    name: 'Carousel',
    Board: () => (
        <Carousel
            images={[
                '/src/assets/wechatimg24.jpg',
                '/src/assets/wechatimg25.jpg',
                '/src/assets/wechatimg21.jpg',
            ]}
        />
    ),
    isSnippet: true,
    tags: ['Parts'],
});
