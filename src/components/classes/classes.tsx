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
            <h1>我们提供的课程</h1>
            <div className={styles.classes_types}>
                <Card h3="Heading 1" description="Description 1" imgSrc={Wechatimg23Jpg} />
                <Card h3="Heading 2" description="Description 2" imgSrc={Wechatimg23Jpg} />
                <Card h3="Heading 3" description="Description 3" imgSrc={Wechatimg23Jpg} />
            </div>
            <div className={styles.classes_types}>
                <Card h3="Heading 4" description="Description 4" imgSrc={Wechatimg23Jpg} />
                <Card h3="Heading 5" description="Description 5" imgSrc={Wechatimg23Jpg} />
                <Card h3="Heading 6" description="Description 6" imgSrc={Wechatimg23Jpg} />
            </div>
            <div className={styles.summer_program}>
                <Card h3="Heading 7" description="Description 7" imgSrc={Wechatimg24Jpg} />
                <Card h3="Heading 8" description="Description 8" imgSrc={Wechatimg24Jpg} />
            </div>
        </div>
    );
};
