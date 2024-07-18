import classNames from 'classnames';
import styles from './text-overlay.module.scss';
import { Button } from '../button/button';

export interface TextOverlayProps {
    className?: string;
    text?: string;
    imgSrc?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TextOverlay = ({
    className,
    text = 'Text',
    imgSrc = 'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg',
}: TextOverlayProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img alt="" className={styles['overlay-image']} src={imgSrc} />
            <div className={styles['text-overlay']}>{text}</div>
        </div>
    );
};
