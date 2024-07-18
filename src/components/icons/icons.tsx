import classNames from 'classnames';
import styles from './icons.module.scss';
import YoutubeLogo2431Svg from '../../assets/youtube-logo-2431.svg';
import IconWechatLogoSvg from '../../assets/icon-wechat-logo.svg';

export interface IconsProps {
    className?: string;
    imgSrc: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Icons = ({ className, imgSrc }: IconsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img alt="" className={styles.icon} src={imgSrc} />
        </div>
    );
};
