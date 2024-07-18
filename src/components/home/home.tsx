import classNames from 'classnames';
import styles from './home.module.scss';
import LucyIntro_module from '../lucy-intro/lucy-intro.module.scss';
import { ImageNtext } from '../image-ntext/image-ntext';
import ImageNtext_module from '../image-ntext/image-ntext.module.scss';
import { Card } from '../card/card';
import { TextOverlay } from '../text-overlay/text-overlay';
import Wechatimg23Jpg from '../../assets/wechatimg23.jpg';
import Wechatimg20Jpg from '../../assets/wechatimg20.jpg';
import Wechatimg24Jpg from '../../assets/wechatimg24.jpg';
import Logo1Copy1Jpg from '../../assets/logo_红底1_copy1.jpg';

export interface HomeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Home = ({ className }: HomeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.StudioIntro}>
                <TextOverlay text="唐艺舞坊" imgSrc={Wechatimg23Jpg} />
            </div>
            <div className={styles['Lucy-intro']}>
                <ImageNtext
                    isFlipped={false}
                    imgSrc={Wechatimg24Jpg}
                    description="Studio Intro"
                    buttonText="Learn More"
                />
            </div>
            <div className={styles['class-intro']}>
                <ImageNtext
                    isFlipped
                    imgSrc={Wechatimg20Jpg}
                    buttonText="Learn More"
                    description="Lucy Intro"
                />
            </div>
            <div className={styles.locations}>
                <h1 className={styles.title}>Our different Locations</h1>
                <div className={styles['img-combo']}>
                    <Card
                        h3="Irvine"
                        description="Description for Irvine"
                        imgSrc={Logo1Copy1Jpg}
                    />
                    <Card
                        h3="Fountain Valley"
                        description="Description for Fountain Valley"
                        imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    />
                    <Card
                        h3="Arcadia"
                        description="Description for Arcadia"
                        imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    />
                </div>
            </div>
        </div>
    );
};
