import { createBoard } from '@wixc3/react-board';
import { ScheduleList } from '../../../components/schedule-list/schedule-list';

export default createBoard({
    name: 'ScheduleList',
    Board: () => <ScheduleList title="星期" />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        canvasHeight: 640,
    },
    tags: ['Parts'],
});
