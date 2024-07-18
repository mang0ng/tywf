import { createBoard } from '@wixc3/react-board';
import { Button } from '../../components/button/button';

export default createBoard({
    name: 'Buy_me Button',
    Board: () => (
        <div>
            <Button text="Buy me !" />
        </div>
    ),
    isSnippet: true,
    tags: ['Parts'],
});
