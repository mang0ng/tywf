import classNames from 'classnames';
import styles from './about.module.scss';
import { ImageNtext } from '../image-ntext/image-ntext';
import Card_module from '../card/card.module.scss';
import { Card } from '../card/card';
import Wechatimg23Jpg from '../../assets/wechatimg23.jpg';
import Ce36D3D539B6003Af3F6E99F1A222Ac65C10381910Webp from '../../assets/14ce36d3d539b6003af3f6e99f1a222ac65c10381910.webp';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ImageNtext
                isFlipped={true}
                description="唐艺舞坊是美国洛杉矶集舞蹈创作丶教学丶表演的新兴团体。其名称灵感来源于中国盛唐时期的梨园教坊，这一时期在中国历史上是各民族乐舞发展的鼎盛时期。美国唐艺舞坊创办宗旨为在海外对中华民族的传统舞蹈文化进行传播丶传承丶创新丶发展，最终目的为推广舞蹈艺术，培养丶造就出优秀的舞蹈表演艺术人材。"
                imgSrc={Wechatimg23Jpg}
                sectionTitle="唐艺舞坊详细介绍"
            />
            <ImageNtext
                isFlipped={false}
                imgSrc={Ce36D3D539B6003Af3F6E99F1A222Ac65C10381910Webp}
                description="1995 年-2001 年就读于广东舞蹈学校六年中国舞专业，2001 年-2005 年就读于北京舞蹈学院中国民族民间舞系中国舞专业本科获学士学位 ，2005 年-2015 年工作于北京歌舞剧院，舞剧团主要演员及创作室编导，2010 年-2012 年就读于北京舞蹈学院编导专业获 MFA 艺术硕士，2016 年创办美国唐艺舞坊 主要成就：作品《长相守》荣获专业组创作一等奖；代表作品：北美首部华人实验舞剧《涅槃记》"
                sectionTitle="谢露嬉 - 人物简介"
            />
            <div className={styles.employeeInfo}>
                <Card
                    className={Card_module.heading3}
                    h3="Employee Name"
                    description="Employee Description"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
                <Card
                    className={Card_module.heading3}
                    h3="Employee Name"
                    description="Employee Description"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
            </div>
            <div className={styles.employeeInfo}>
                <Card
                    className={Card_module.heading3}
                    h3="Employee Name"
                    description="Employee Description"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
                <Card
                    className={Card_module.heading3}
                    h3="Employee Name"
                    description="Employee Description"
                    imgSrc="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                />
            </div>
        </div>
    );
};
