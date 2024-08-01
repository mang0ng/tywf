import classNames from 'classnames';
import styles from './gallery.module.scss';
import { Carousel } from '../carousel/carousel';
import { Card } from '../card/card';
import Webp from '../../assets/涅槃记.webp';

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
                <video controls={true} src="https://youtu.be/KIvozjPzgdY?si=auRoGy_k-FfHYvMY" />
            </div>
            <Carousel images={['']} />
            <div className={styles.shows}>
                <Card
                    description="洛杉矶首部华人实验舞剧。 涅槃重生的意思是指凤凰经历烈火的煎熬和痛苦的考验，获得重生，并在重生中达到升华。这个词也叫做“凤凰涅槃”，寓意着不畏痛苦、义无反顾、不断追求、提升自我的执着精神"
                    h3="涅槃记"
                    imgSrc={Webp}
                />
                <Card description="洛杉矶首部华人实验舞剧" h3="涅槃记" imgSrc={Webp} />
                <Card description="洛杉矶首部华人实验舞剧" h3="涅槃记" imgSrc={Webp} />
            </div>
        </div>
    );
};
