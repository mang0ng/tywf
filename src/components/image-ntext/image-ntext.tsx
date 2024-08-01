import classNames from 'classnames';
import styles from './image-ntext.module.scss';
import { Button } from '../button/button';

export interface ImageNtextProps {
    className?: string;
    isFlipped?: boolean;
    imgSrc: string;
    description: string;
    buttonText?: string;
    sectionTitle: string;
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
    buttonText = '',
    sectionTitle,
}: ImageNtextProps) => {
    return (
        <div className={classNames(styles.root, { [styles.rowReverse]: isFlipped }, className)}>
            <img src={imgSrc} alt="" className={styles.width} />
            <div className={classNames(styles.combo)} about="edddddd">
                <h1 className={styles.section_title}>{sectionTitle}</h1>
                <div className={styles.discribtion}>{description}</div>
                <div
                    className={classNames(styles['learn-more'], { [styles.justifyEnd]: isFlipped })}
                >
                    {buttonText && <Button text={buttonText} />}
                </div>
            </div>
        </div>
    );
};
