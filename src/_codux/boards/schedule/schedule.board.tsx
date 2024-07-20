import { createBoard } from '@wixc3/react-board';
import { Schedule } from '../../../components/schedule/schedule';

export default createBoard({
    name: 'LocationHeaderSchedule',
    Board: () => (
        <Schedule
            imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
            h1="Location Name"
        />
    ),
    isSnippet: true,
    tags: ['Sections'],
});
