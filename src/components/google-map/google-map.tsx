import classNames from 'classnames';
import styles from './google-map.module.scss';

export interface GoogleMapProps {
    className?: string;
    embedUrl: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GoogleMap = ({ className, embedUrl }: GoogleMapProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                loading="lazy"
                title="Google Map"
                style={{ border: 0 }}
                aria-hidden="false"
            ></iframe>
        </div>
    );
};
