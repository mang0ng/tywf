import classNames from 'classnames';
import { Card } from '../../components/card/card';
import styles from './contact.module.scss';
import { GoogleMap } from '../google-map/google-map';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Contact Us</h1>
            <div className={styles.location_contact}>
                <Card
                    h3="Irvine"
                    description="9450 Bhhh St, CA, 92620"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    addDescription="Phone: 949-222-4532"
                />
                <GoogleMap embedUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6640.810144201884!2d-117.743263!3d33.672574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd47b0f61a7b%3A0xcbe9efed720dac0a!2sGreat%20Park!5e0!3m2!1sen!2sus!4v1722581638189!5m2!1sen!2sus" />
            </div>
            <div className={styles.location_contact}>
                <Card
                    h3="Card Title 2"
                    description="Description for card 2"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
                <GoogleMap embedUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6640.810144201884!2d-117.743263!3d33.672574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd47b0f61a7b%3A0xcbe9efed720dac0a!2sGreat%20Park!5e0!3m2!1sen!2sus!4v1722581638189!5m2!1sen!2sus" />
            </div>
            <div className={styles.location_contact}>
                <Card
                    h3="Card Title 3"
                    description="Description for card 3"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
                <GoogleMap embedUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6640.810144201884!2d-117.743263!3d33.672574!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdd47b0f61a7b%3A0xcbe9efed720dac0a!2sGreat%20Park!5e0!3m2!1sen!2sus!4v1722581638189!5m2!1sen!2sus" />
            </div>
        </div>
    );
};
