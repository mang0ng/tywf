import classNames from 'classnames';
import styles from './image-ntext.module.scss';
import { Button } from '../button/button';

export interface ImageNtextProps {
    className?: string;
    isFlipped?: boolean;
    imgSrc: string;
    description: string;
    buttonText: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ImageNtext = ({
    className,
    isFlipped = true,
    description,
    imgSrc,
    buttonText,
}: ImageNtextProps) => {
    return (
        <div className={classNames(styles.root, { [styles.rowReverse]: isFlipped }, className)}>
            <img src={imgSrc} alt="" className={styles.width} />
            <div className={classNames(styles.combo)} about="edddddd">
                <div className={styles.discribtion}>{description}</div>
                <div
                    className={classNames(styles['learn-more'], { [styles.justifyEnd]: isFlipped })}
                >
                    <Button text={buttonText} />
                </div>
            </div>
        </div>
    );
};
