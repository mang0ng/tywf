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
import IrvineSpectrumLuxeShopping12586F8731Ea4Ded88F9805112A1B628Jpg from '../../assets/irvine_spectrum_luxe_shopping_12586f87-31ea-4ded-88f9-805112a1b628.jpg';
import SampleimgFvJpg from '../../assets/sampleimg_fv.jpg';
import City1Jpeg from '../../assets/city_1.jpeg';

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
                <div className={styles.introText}>
                    <h1 className={styles.Chinese_title}>唐艺舞坊</h1>
                    <h1 className={styles.English_title}>Tang Arts &amp; Performance Studio</h1>
                </div>
            </div>
            <div className={styles['Lucy-intro']}>
                <ImageNtext
                    isFlipped={false}
                    imgSrc={Wechatimg24Jpg}
                    description="唐艺舞坊是美国洛杉矶集舞蹈创作，教学，表演的新兴团体"
                    buttonText="Learn More"
                    sectionTitle="唐艺舞坊"
                />
            </div>
            <div className={styles['class-intro']}>
                <ImageNtext
                    isFlipped
                    imgSrc={Wechatimg20Jpg}
                    buttonText="Learn More"
                    description="谢露嬉 毕业于北京舞蹈学院大学本科和MFA艺术硕士，舞蹈表演艺术家、编导、美国唐艺舞坊创始人、唐艺舞坊艺术总监， 佛光山西来寺敦煌舞传播者"
                    sectionTitle="创始人 - 谢露嬉"
                />
            </div>
            <div className={styles.locations}>
                <h1 className={styles.title}>我们不同的校区</h1>
                <div className={styles['img-combo']}>
                    <Card
                        h3="Irvine"
                        description="Description for Irvine"
                        imgSrc={IrvineSpectrumLuxeShopping12586F8731Ea4Ded88F9805112A1B628Jpg}
                    />
                    <Card
                        h3="Fountain Valley"
                        description="Description Fountain Valley"
                        imgSrc={SampleimgFvJpg}
                    />
                    <Card h3="Arcadia" description="Description for Arcadia" imgSrc={City1Jpeg} />
                </div>
            </div>
        </div>
    );
};
