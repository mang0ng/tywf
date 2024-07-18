import classNames from 'classnames';
import styles from './about.module.scss';
import { ImageNtext } from '../image-ntext/image-ntext';
import Card_module from '../card/card.module.scss';
import { Card } from '../card/card';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ImageNtext
                isFlipped={true}
                buttonText="Learn More"
                description="Studio 详细介绍"
                imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
            />
            <ImageNtext
                isFlipped={false}
                buttonText="Learn More"
                imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                description="Lucy 详细介绍"
            />
            <div className={styles.employeeInfo}>
                <Card 
                    className={Card_module.heading3} 
                    h3="Employee Name"
                    description="Employee Description"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
                <Card 
                    className={Card_module.heading3} 
                    h3="Employee Name"
                    description="Employee Description"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
            </div>
            <div className={styles.employeeInfo}>
                <Card 
                    className={Card_module.heading3} 
                    h3="Employee Name"
                    description="Employee Description"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
                <Card 
                    className={Card_module.heading3} 
                    h3="Employee Name"
                    description="Employee Description"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
            </div>
        </div>
    );
};
