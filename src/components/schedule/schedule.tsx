import classNames from 'classnames';
import styles from './schedule.module.scss';

export interface ScheduleProps {
    className?: string;
    h1:string;
    imgSrc:string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Schedule = ({ className, h1, imgSrc }: ScheduleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['location-heading']}>
                <h1 className={styles.location_name}>{h1}</h1>
                <img
                    src={imgSrc}
                    alt=""
                    className={styles.location_img}
                />
            </div>
        </div>
    );
};
