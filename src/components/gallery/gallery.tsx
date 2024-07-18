import classNames from 'classnames';
import styles from './gallery.module.scss';
import { Card } from '../card/card';
import { Carousel } from '../carousel/carousel';

export interface GalleryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Gallery = ({ className }: GalleryProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.performance_video}>
                <video
                    controls={true}
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
                />
            </div>
            <Carousel images={[
                ""
            ]} />
            <div className={styles.shows}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};
