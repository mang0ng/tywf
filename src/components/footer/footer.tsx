import classNames from 'classnames';
import styles from './footer.module.scss';
import { useState } from 'react';
import { Modal, Sidebar, Button, Icon } from 'semantic-ui-react';
import { Icons } from '../icons/icons';
import YoutubeLogo2431Svg from '../../assets/youtube-logo-2431.svg';
import CameraInstagramInstagramLogoIconSvg from '../../assets/5296765_camera_instagram_instagram logo_icon.svg';
import IconWechatLogoSvg from '../../assets/icon-wechat-logo.svg';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Footer = ({ className }: FooterProps) => {
    const [visible1, setVisible1] = useState(true);
    const [visible, setVisible] = useState(true);
    const [open, setOpen] = useState(false);
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.contact}>
                <div className={styles.contact_info}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles.WX_QR_code}
                    />
                    <div>
                        <Button icon>
                            <Icon name="map marker alternate" size="large" />
                        </Button>
                        <Button icon>
                            <Icon name="phone volume" size="large" />
                        </Button>
                    </div>
                </div>
                <div className={styles.social_media}>
                    <div className={styles.icons}>
                        <Icons imgSrc={IconWechatLogoSvg} />
                        <Icons imgSrc={YoutubeLogo2431Svg} />
                        <Icons imgSrc={CameraInstagramInstagramLogoIconSvg} />
                    </div>
                </div>
            </div>
        </div>
    );
};
