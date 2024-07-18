import { createBoard } from '@wixc3/react-board';
import { ClassSchedule } from '../../../components/class-schedule/class-schedule';

export default createBoard({
    name: 'ClassSchedule',
    Board: () => <ClassSchedule />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        canvasHeight: 640,
    },
    tags: ['Pages'],
});
