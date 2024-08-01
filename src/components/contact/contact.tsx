import classNames from 'classnames';
import { Card } from '../../components/card/card';
import styles from './contact.module.scss';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Heading 1</h1>
            <div className={styles.location_contact}>
                <Card
                    h3="Card Title 1"
                    description="Description for card 1"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.location_img}
                />
            </div>
            <div className={styles.location_contact}>
                <Card
                    h3="Card Title 2"
                    description="Description for card 2"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.location_img}
                />
            </div>
            <div className={styles.location_contact}>
                <Card
                    h3="Card Title 3"
                    description="Description for card 3"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.location_img}
                />
            </div>
        </div>
    );
};
