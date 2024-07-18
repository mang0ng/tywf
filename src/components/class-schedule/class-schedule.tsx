import classNames from 'classnames';
import styles from './class-schedule.module.scss';
import { Schedule } from '../schedule/schedule';
import { ScheduleList } from '../schedule-list/schedule-list';
import { PurchaseCard } from '../purchase-card/purchase-card';
import PurchaseCard_module from '../purchase-card/purchase-card.module.scss';

export interface ClassScheduleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ClassSchedule = ({ className }: ClassScheduleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Schedule
                imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                h1="Irvine Location"
            />
            <div className={styles.Weekday}>
                <ScheduleList
                    title="Monday"
                    classLevel="少儿中级班"
                    classTime="PM 3-4"
                    otherInfo="需穿舞蹈服"
                />
                <ScheduleList title="Tuesday" />
                <ScheduleList title="Wednesday" />
                <ScheduleList title="Thursday" />
            </div>
            <div className={styles.Weekday}>
                <ScheduleList title="Friday" />
                <ScheduleList title="Saturday" />
                <ScheduleList title="Sunday" />
                <ScheduleList title="特殊假日放假通知" />
            </div>
            <h1>感兴趣吗？限时购买课程包~</h1>
            <div className={PurchaseCard_module['purchase-card']}>
                <PurchaseCard buttonText="购买" imgText="十节特惠包" />
                <PurchaseCard />
            </div>
        </div>
    );
};
