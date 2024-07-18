import classNames from 'classnames';
import styles from './purchase-card.module.scss';
import { Button } from '../button/button';
import { TextOverlay } from '../text-overlay/text-overlay';

export interface PurchaseCardProps {
    className?: string;
    imgSrc?: string;
    imgText?: string;
    buttonText?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const PurchaseCard = ({
    className,
    imgText,
    imgSrc = 'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg',
    buttonText,
}: PurchaseCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <TextOverlay text={imgText} imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
            <Button text={buttonText} />
        </div>
    );
};
