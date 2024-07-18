import classNames from 'classnames';
import styles from './header.module.scss';
import { SwitchButton } from '../switch-button/switch-button';
import { Button } from '../button/button';
import LogoJpg from '../../assets/logo_白底.jpg';
import { Link } from 'react-router-dom';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.left}>
                <Link to={"/"}><img alt="" className={styles.logo} src={LogoJpg} /></Link>
                <SwitchButton />
            </div>
            <div className={styles.right}>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/classes"}>Classes</Link>
                <Link to={"/gallery"}>Gallery</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
        </div>
    );
};
