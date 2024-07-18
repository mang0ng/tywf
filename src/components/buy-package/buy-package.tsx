import classNames from 'classnames';
import styles from './buy-package.module.scss';

export interface BuyPackageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BuyPackage = ({ className }: BuyPackageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};
