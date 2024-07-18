import classNames from 'classnames';
import styles from './schedule-list.module.scss';

export interface ScheduleListProps {
    className?: string;
    title: string;
    classTime?: string;
    classLevel?: string;
    otherInfo?: string;

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ScheduleList = ({ className, title,classTime = 'AM 10 - 11', classLevel ='零基础', otherInfo ='需穿拉丁舞鞋' }: ScheduleListProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.Weekday}>
                <h3> {title} </h3>
                <p>{classTime}</p>
                <p>{classLevel}</p>
                <p>{otherInfo}</p>
            </div>
        </div>
    );
};
