import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    h3: string;
    description: string;
    imgSrc: string;
    addDescription?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Card = ({ className, h3, description, imgSrc, addDescription }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <img alt="" src={imgSrc} className={styles.image} />
            </div>
            <div className={styles.text}>
                <h3 className={styles.heading3}>{h3}</h3>
                <p className={styles.Paragraph}>{description}</p>
                <p className={styles.Paragraph}>{addDescription}</p>
            </div>
        </div>
    );
};
