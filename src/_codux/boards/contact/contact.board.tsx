import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import Contact_board_module from './contact.board.module.scss';
import Card_module from '../../../components/card/card.module.scss';

export default createBoard({
    name: 'Contact',
    Board: () => (
        <div>
            <h1>Heading 1</h1>
            <div className={Contact_board_module.location_contact}>
                <Card />
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={Contact_board_module.location_img}
                />
            </div>
            <div className={Contact_board_module.location_contact}>
                <Card />
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={Contact_board_module.location_img}
                />
            </div>
            <div className={Contact_board_module.location_contact}>
                <Card />
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={Contact_board_module.location_img}
                />
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        canvasHeight: 640,
    },
    tags: ['Pages'],
});
