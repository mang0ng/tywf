import classNames from 'classnames';
import styles from './classes.module.scss';
import { Header } from '../header/header';
import { Card } from '../card/card';
import { Footer } from '../footer/footer';

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
            <h1>Heading 1</h1>
            <div className={styles.classes_types}>
                <Card />
                <Card />
                <Card />
            </div>
            <div className={styles.classes_types}>
                <Card />
                <Card />
                <Card />
            </div>
            <div className={styles.summer_program}>
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    );
};
