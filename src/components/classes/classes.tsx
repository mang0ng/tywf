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
                <Card h3="Heading 1" description="Description 1" imgSrc="path/to/image1.jpg" />
                <Card h3="Heading 2" description="Description 2" imgSrc="path/to/image2.jpg" />
                <Card h3="Heading 3" description="Description 3" imgSrc="path/to/image3.jpg" />
            </div>
            <div className={styles.classes_types}>
                <Card h3="Heading 4" description="Description 4" imgSrc="path/to/image4.jpg" />
                <Card h3="Heading 5" description="Description 5" imgSrc="path/to/image5.jpg" />
                <Card h3="Heading 6" description="Description 6" imgSrc="path/to/image6.jpg" />
            </div>
            <div className={styles.summer_program}>
                <Card h3="Heading 7" description="Description 7" imgSrc="path/to/image7.jpg" />
                <Card h3="Heading 8" description="Description 8" imgSrc="path/to/image8.jpg" />
            </div>
            <Footer />
        </div>
    );
};
