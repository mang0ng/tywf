import classNames from 'classnames';
import styles from './footer.module.scss';
import { useState } from 'react';
import { Modal, Sidebar } from 'semantic-ui-react';
import { Icons } from '../icons/icons';
import YoutubeLogo2431Svg from '../../assets/youtube-logo-2431.svg';
import CameraInstagramInstagramLogoIconSvg from '../../assets/5296765_camera_instagram_instagram logo_icon.svg';
import IconWechatLogoSvg from '../../assets/icon-wechat-logo.svg';
import TelephoneReceiverMaterialSvgrepoComSvg from '../../assets/telephone-receiver-material-svgrepo-com.svg';
import EmailSvgrepoComSvg from '../../assets/email-svgrepo-com.svg';

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
        <footer className={classNames(styles.root, className)}>
            <div className={styles.contact}>
                <div className={styles.contact_info}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        alt=""
                        className={styles.WX_QR_code}
                    />
                    <div></div>
                </div>
                <div className={styles.social_media}>
                    <div className={styles.info}>
                        <h3>更多问题扫码咨询小客服！</h3>
                        <div className={styles.phone_number}>
                            <Icons imgSrc={TelephoneReceiverMaterialSvgrepoComSvg} />
                            <p className={styles.phone_number}>858-319-5454</p>
                        </div>
                        <div className={styles.email}>
                            <Icons imgSrc={EmailSvgrepoComSvg} />
                            <p className={styles.phone_number}>mangogong5@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.icons}>
                        <Icons imgSrc={IconWechatLogoSvg} />
                        <Icons imgSrc={YoutubeLogo2431Svg} />
                        <Icons imgSrc={CameraInstagramInstagramLogoIconSvg} />
                    </div>
                </div>
            </div>
        </footer>
    );
};
