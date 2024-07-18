import { createBoard } from '@wixc3/react-board';
import { SwitchButton } from '../../../components/switch-button/switch-button';

export default createBoard({
    name: 'SwitchButton',
    Board: () => <SwitchButton />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 142,
    },
    tags: ['Parts'],
});
