import classNames from 'classnames';
import styles from './classes.module.scss';
import { Header } from '../header/header';
import { Card } from '../card/card';
import Wechatimg23Jpg from '../../assets/wechatimg23.jpg';
import Wechatimg24Jpg from '../../assets/wechatimg24.jpg';

export interface ClassesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Classes = ({ className }: ClassesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.class_provideed}>我们提供的课程</h1>
            <div className={styles.classes_types}>
                <Card h3="中国舞启蒙班" description="启蒙班描述" imgSrc={Wechatimg23Jpg} />
                <Card h3="中国舞少儿班" description="少儿班描述" imgSrc={Wechatimg23Jpg} />
                <Card h3="中国舞成人班" description="成人班描述" imgSrc={Wechatimg23Jpg} />
            </div>
            <div className={styles.classes_types}>
                <Card h3="Heading 4" description="Description 4" imgSrc={Wechatimg23Jpg} />
                <Card h3="Heading 5" description="Description 5" imgSrc={Wechatimg23Jpg} />
                <Card h3="Heading 6" description="Description 6" imgSrc={Wechatimg23Jpg} />
            </div>
            <div className={styles.summer_program}>
                <Card h3="暑期夏令营" description="Description 7" imgSrc={Wechatimg24Jpg} />
                <Card h3="购买课程包" description="Description 8" imgSrc={Wechatimg24Jpg} />
            </div>
        </div>
    );
};
