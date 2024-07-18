import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    h3: string;
    description: string;
    imgSrc: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Card = ({ className, h3, description, imgSrc }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <img
                    alt=""
                    className={styles.image}
                     src={imgSrc}
                />
            </div>
            <div>
                <h3 className={styles.heading3}>{h3}</h3>
                <p className={styles.Paragraph}>{description}</p>
            </div>
        </div>
    );
};
