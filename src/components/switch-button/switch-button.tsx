import classNames from 'classnames';
import styles from './switch-button.module.scss';

export interface SwitchButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SwitchButton = ({ className }: SwitchButtonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button className={classNames(styles.root, styles['top-button'])}>中 </button>
            <button>Eng</button>
        </div>
    );
};
