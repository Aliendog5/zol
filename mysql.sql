/*
SQLyog Professional v12.09 (64 bit)
MySQL - 5.5.20-log : Database - zol_shopping
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`zol_shopping` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `zol_shopping`;

/*Table structure for table `brand` */

DROP TABLE IF EXISTS `brand`;

CREATE TABLE `brand` (
  `name` varchar(20) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `brand` */

insert  into `brand`(`name`,`img`,`price`) values ('影驰GTX1050显卡','images/img/ChMkJlpgTt-IFVB7AABUQeWZbDcAAkLngAlbhUAAFRZ727.jpg','899'),('影驰 GTX1070显卡','images/img/ChMkJ1pgTnuIbVHXAABZ5F7pT2IAAkLnAPPe38AAFn8673.jpg','4,899'),('影驰10系显卡','images/img/ChMkJ1pgTV2IIj8VAABmdFFOUzwAAkLmgEOQHwAAGaM670.jpg','429'),('影驰 120GB 固态硬盘','images/img/ChMkJ1oD7qCIWXe0AABzQeHMD7kAAh-cgDBJFIAAHNZ986.jpg','399');

/*Table structure for table `cart` */

DROP TABLE IF EXISTS `cart`;

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) DEFAULT NULL,
  `good_id` int(11) DEFAULT NULL,
  `cart_color` varchar(10) DEFAULT NULL,
  `cart_suit` varchar(10) DEFAULT NULL,
  `cart_num` int(10) DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

/*Data for the table `cart` */

insert  into `cart`(`cart_id`,`user_name`,`good_id`,`cart_color`,`cart_suit`,`cart_num`) values (6,'daijunwang',3,'金色 ','官方标配 ',1),(15,'womende',4,'孔雀青 ','官方标配 ',3),(16,'womende',4,'孔雀青 ','官方标配 ',1),(34,'daijunwang',4,'孔雀青 ','官方标配 ',1),(50,'',4,'孔雀青 ','官方标配 ',1),(54,'daijunwang',11,'I5 8G 1T+1','官方标配 ',1),(55,'daijunwang',12,'粉色 ','官方标配 ',1),(56,'daijunwang',4,'月光银 ','套装一 ',1),(57,'daijunwang',4,'孔雀青 ','官方标配 ',1),(58,'daijunwang',11,'I5 8G 1T+1','官方标配 ',2);

/*Table structure for table `choice_top_left_bot` */

DROP TABLE IF EXISTS `choice_top_left_bot`;

CREATE TABLE `choice_top_left_bot` (
  `name` varchar(20) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `price2` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `choice_top_left_bot` */

insert  into `choice_top_left_bot`(`name`,`img`,`price`,`price2`) values ('必联智能无线路由器','images/img/ChMkJ1pXJ5CIYAtoAABTaH_knisAAkBxACzaWIAAFOA666.png','69','暂无'),('浩酷M1带麦耳机','images/img/ChMkJ1pext-IXANbAAA-ZpxfLoEAAkJbwPPJewAAD5-476.jpg','31','暂无'),('小米10000毫安移动电源','images/img/ChMkJlpex0yIDDkeAAA1H23a3ScAAkJcAB1c8AAADU3882.jpg','99','79'),('三星S8原装耳机','images/img/ChMkJlpeyMiIFkoOAAA5znsauvMAAkJcwB49NEAADnm254.jpg','109','暂无');

/*Table structure for table `choice_top_left_top` */

DROP TABLE IF EXISTS `choice_top_left_top`;

CREATE TABLE `choice_top_left_top` (
  `name` varchar(10) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `choice_top_left_top` */

insert  into `choice_top_left_top`(`name`,`img`) values ('出行','images/img/ChMkJlpMoUSIAlhCAABgJlgihNsAAjxPgPcXh0AAGA-501.jpg'),('家居','images/img/ChMkJlm3W1KIdOv9AABDXvifjHoAAgavQLHXQQAAEN2205.jpg'),('影音','images/img/ChMkJlpMdMyIfHtbAABWawSoLJMAAjw8QMgNecAAFaD819.jpg'),('穿戴','images/img/ChMkJloeTkaIIDItAABeK9Yb760AAijcQKv4i0AAF5D170.jpg'),('美户','images/img/ChMkJ1oeVBmIae78AABGTAY30fYAAijewBxlyoAAEZk116.jpg');

/*Table structure for table `choice_top_right` */

DROP TABLE IF EXISTS `choice_top_right`;

CREATE TABLE `choice_top_right` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `choice_top_right` */

insert  into `choice_top_right`(`id`,`img`) values (1,'images/img/ChMkJ1pMV5CIUNE5AAArhGpNXwkAAjw0gN8YkgAACuc103.jpg'),(2,'images/img/ChMkJlpMVbWIayNIAAAg4CkPxtsAAjwzwLfpsIAACD4003.jpg'),(3,'images/img/ChMkJlpMbm6IZHlHAAA-eyaTPzcAAjw6gKgwTsAAD6T122.jpg');

/*Table structure for table `e_sports_left` */

DROP TABLE IF EXISTS `e_sports_left`;

CREATE TABLE `e_sports_left` (
  `class1` int(5) DEFAULT NULL,
  `class2` int(5) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `e_sports_left` */

insert  into `e_sports_left`(`class1`,`class2`,`img`,`name`,`price`) values (0,0,'images/img/ChMkJ1nnElGINVavAABL_KxGWs8AAhXiwHbrv4AAEwU004.jpg','',''),(0,1,'images/img/ChMkJ1nbPPWIBVg9AADk1NqaENgAAhHNwD9elQAAOTs333.jpg','先锋奔腾G3900/120G SSD','¥1299.00'),(0,1,'images/img/ChMkJlmIJAyIceUwAAH6JGsXdMgAAfd8ADiRlYAAfo8946.jpg','七代i5 DIY游戏主机','¥2888.00'),(0,1,'images/img/ChMkJ1lwJvOIDEIuAAE7xUAKwdMAAe4qwDwqZ0AATvd377.jpg','7代i7骨灰级游戏装备','¥4299.00'),(1,0,'images/img/ChMkJ1mtHc2IPd7-AABbxfWp83kAAgLIgKJd3kAAFvd753.jpg','',''),(1,0,'images/img/ChMkJ1mtHtuIGz9uAABcBS3GIGYAAgLJAJdiwcAAFwd350.jpg','',''),(1,1,'images/img/ChMkJ1pMh2OIZ5JCAAB8tjFIb7sAAjxDwOr16QAAHzO678.jpg','鑫谷散热风扇','¥49.00'),(1,1,'images/img/Cg-4WVUfrCSIbahlAAn5wElVS9wAAA2wgDwuG8ACfnY737.png','大号鼠标垫限时抢','¥9.00'),(1,1,'images/img/ChMkJllTWBKIFvafAAKoAvJyVJIAAdpzwJCQ44AAqga363.jpg','AOC 23.6英寸电竞游戏曲','¥869.00'),(2,0,'images/img/ChMkJlnbKaqILwc6AABkEPmS_hwAAhHHQEagW4AAGQo167.jpg','',''),(2,1,'images/img/ChMkJ1lCT26IU93-AABMaUsZjQQAAdCeQEZL3EAAEyB251.jpg','联想小新潮7000 窄边框笔','¥5499.00'),(2,1,'images/img/ChMkJllCUMiIYd3kAABfJChgOXsAAdCewLGlW0AAF88197.jpg','戴尔 游匣 15P-2648B大屏','¥4829.00'),(2,1,'images/img/ChMkJ1lCUV2IMl7WAABac3tyjmAAAdCfAMllN8AAFqL290.jpg','联想 小新 潮5000超极本 ','¥4388.00');

/*Table structure for table `e_sports_right` */

DROP TABLE IF EXISTS `e_sports_right`;

CREATE TABLE `e_sports_right` (
  `name` varchar(50) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `e_sports_right` */

insert  into `e_sports_right`(`name`,`img`,`price`) values ('神舟 战神 Z7-KP7D2','images/img/ChMkJlmH1aeIUw6yAAAaztjPVa4AAfdZgMSA58AABrm059.jpg','¥6699.00'),('ThinkPad S2-11CD商务笔记','images/img/ChMkJllHd8GIC1hWAAB2k_vNXg0AAdHfAKbaE8AAHar363.jpg','¥5999.00'),('惠普 OMEN 15-AX215TX（1','images/img/ChMkJlltvF2IJYPAAABCrXZAb1kAAeytwOsDI4AAELF956.jpg','¥4688.00'),('联想小新700电竞版','images/img/ChMkJllHd22IKhAjAACFbwMvZ74AAdHewPsTzkAAIWH666.jpg','¥4699.00'),('神舟 战神Z6-KP5D1【神舟官方授权】GTX1050 15.6英寸游戏笔记本电脑','images/img/ChMkJ1lmzz2IaZvOAAAXmrQxQaAAAedGgJlEjAAABey764.jpg','¥4692.00'),('【顺丰包邮 】华硕 FX53VD7300 15.6寸 性能游戏本 10代发烧级显卡','images/img/ChMkJ1lHdf-IYjltAAB_sKdSjlAAAdHeQOjqLUAAH_I487.jpg','¥5050.00');

/*Table structure for table `group1` */

DROP TABLE IF EXISTS `group1`;

CREATE TABLE `group1` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL COMMENT '商品名称',
  `msg` varchar(50) DEFAULT NULL COMMENT '商品信息',
  `price` varchar(10) DEFAULT NULL COMMENT '商品价格',
  `price2` varchar(10) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL COMMENT '活动截止时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `group1` */

insert  into `group1`(`id`,`name`,`msg`,`price`,`price2`,`img`,`time`) values (1,'华为Mate10 Pro','&emsp;','4799','4899','images/img/ChMkJ1qPcLWIXCnMAABn1dpJag0AAk7wQJjT88AAGft038.jpg','2018-03-09'),(2,'七彩虹128G固态硬盘','&emsp;','209','暂无','images/img/ChMkJ1pxdsKIauuoAABXghR0GSUAAkhrAB6CgMAAFea006.jpg','2018-03-13'),(3,'甲骨龙I5游戏主机','&emsp;','3558','暂无','images/img/ChMkJlpev_GIIofbAAMwr2KuARoAAkJXwFBLK8AAzDH321.png','2018-03-07'),(4,'荣耀 V10 64GB','&emsp;','2849','2699','images/img/ChMkJ1qPcc2IergSAABM4jJ5gt4AAk7wwHrli0AAEz6619.jpg','2018-03-08'),(5,'联想小新潮7000','八代I7 8G 双硬盘2G独显','--','6299','images/img/ChMkJ1p3u-qIVVjvAABRU5xyOQ8AAkqpwBHhTcAAFFr582.jpg','2018-03-15'),(6,'联想 IdeaPad 720S-13IKB金色','顺丰配送','--','7499','images/img/ChMkJ1p7voOINoFZAACN8vSS9kMAAkuFgBCQSoAAI4K073.jpg','2018-03-14'),(7,'魅蓝 note6 64GB','官方正品','--','1299','images/img/ChMkJ1oFapWIAiupAAB55rEW9YcAAiBuQErme4AAHn-529.png','2018-03-13'),(8,'三星DDR4  8G内存条','限时特惠579','--','暂无','images/img/ChMkJlo4wN6IfGVkAAFNAomN-tcAAjS0AI-KlIAAU0a501.jpg','2018-03-12'),(9,'【官方授权】苹果 MacBook Air','i5 处理器/8GB内存/128GB闪存','5788','6499','images/img/ChMkJ1nnDWWIcoKkAABGZ9wQiuYAAhXggAMvWAAAEZ_511.jpg','2018-03-11');

/*Table structure for table `list_1` */

DROP TABLE IF EXISTS `list_1`;

CREATE TABLE `list_1` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `class1` varchar(5) DEFAULT NULL,
  `class2` varchar(5) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL COMMENT '商品名称',
  `msg` varchar(100) DEFAULT NULL COMMENT '商品信息',
  `price` varchar(20) DEFAULT NULL COMMENT '商品价格',
  `promotion` varchar(1000) DEFAULT NULL COMMENT '赠品',
  `evaluation` varchar(100) DEFAULT NULL COMMENT '商品评价',
  `edition` varchar(1000) DEFAULT NULL COMMENT '版本',
  `goodsColor` varchar(200) DEFAULT NULL COMMENT '颜色',
  `ram` varchar(100) DEFAULT NULL COMMENT '内存容量',
  `method` varchar(100) DEFAULT NULL COMMENT '购买方式',
  `suit` varchar(1000) DEFAULT NULL COMMENT '套装',
  `num` int(10) DEFAULT NULL COMMENT '数量',
  `img` varchar(1000) DEFAULT NULL,
  `img_list` varchar(100) DEFAULT NULL,
  `colorSuit` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

/*Data for the table `list_1` */

insert  into `list_1`(`id`,`class1`,`class2`,`name`,`msg`,`price`,`promotion`,`evaluation`,`edition`,`goodsColor`,`ram`,`method`,`suit`,`num`,`img`,`img_list`,`colorSuit`) values (3,'手机','手机','【顺丰包邮】vivo X20 全面屏手机 全网通 4GB+64GB 移动联通电信4G','vivo X20 带你开启全面屏时代！逆光也清晰，照亮你的美！送手机壳，钢化膜','2798.00','[\"ChMkJlmLy3KIdWWcAAAPdXfpz9AAAfjEwISnMgAAA-N826.jpg\",\"ChMkJlmLy1aIclq2AAAkFereoBIAAfjEwEaWzkAACQt973.jpg\",\"ChMkJ1jGHbCIf-b3AAAM81S2IJgAAasJQPFHkUAAA0L301.jpg\",\"ChMkJ1i2W6qIfQaaAAAZoRUz8WAAAaUcgOd9eAAABm5507.jpg\"]','[198,459]','[\"64GB\",\"128GB\"]','[\"金色\",\"玫瑰金\",\"磨砂黑\",\"星耀红\"]','[\"行货64GB\"]','[\"非合约机\"]','[{\"name\":\"官方标配\",\"msg\":\"主机（内置电池）*1、耳机*1、充电器*1、数据线*1、透明保护壳*1、取卡针*1、快速入门指南*1、重要信息和保修卡*1\"},{\"name\":\"套装一\",\"msg\":\"主机（内置电池）*1、耳机*1、充电器*1、数据线*1、透明保护壳*1、取卡针*1、快速入门指南*1、重要信息和保修卡*1\"},{\"name\":\"套装二\",\"msg\":\"主机（内置电池）*1、耳机*1、充电器*1、数据线*1、透明保护壳*1、取卡针*1、快速入门指南*1、重要信息和保修卡*1\"},{\"name\":\"套装三\",\"msg\":\"主机（内置电池）*1、耳机*1、充电器*1、数据线*1、透明保护壳*1、取卡针*1、快速入门指南*1、重要信息和保修卡*1\"}]',224,'[\"ChMkJlndtEKIJYNZAADjZ1wLE6QAAhKVwKR3AUAAON_900.jpg\",\"ChMkJlncRrOIM67zAADJUdBL7ugAAhIwwNoF08AAMlp495.jpg\",\"ChMkJlncRraIBIuDAADGRdmmAS8AAhIwwN5wVEAAMZd460.jpg\",\"ChMkJ1oWeUmIIQjPAAEZvqWIvLUAAiZ7wLGbn0AARnW131.jpg\",\"ChMkJ1pR6NCIclHZAAD7nEbg_38AAj6NwPACOoAAPu0213.jpg\"]','ChMkJlndtEKIJYNZAADjZ1wLE6QAAhKVwKR3AUAAON_900_list.jpg',NULL),(4,'手机','手机','【现货包邮 送壳膜】魅族 魅蓝 Note6 4GB/32/64GB全网通4G','极速对焦，高通骁龙625处理器！送手机壳，钢化膜，指环支架！','1118.00','[\"ChMkJlmLy3KIdWWcAAAPdXfpz9AAAfjEwISnMgAAA-N826.jpg\",\"ChMkJlmLy1aIclq2AAAkFereoBIAAfjEwEaWzkAACQt973.jpg\",\"ChMkJ1jGHbCIf-b3AAAM81S2IJgAAasJQPFHkUAAA0L301.jpg\",\"ChMkJ1i2W6qIfQaaAAAZoRUz8WAAAaUcgOd9eAAABm5507.jpg\"]','[219,439]','[\"3GB运行\",\"4GB运行\"]','[\"孔雀青\",\"曜石黑\",\"月光银\",\"香槟金\"]','[\"行货64GB\",\"行货32GB\"]','[\"非合约机\"]','[{\"name\":\"官方标配\",\"msg\":\"主机 x 1、电源适配器 x 1、保修证书 x 1、SIM卡顶针 x 1、数据线 x 1\"},{\"name\":\"套装一\",\"msg\":\"主机 x 1、电源适配器 x 1、保修证书 x 1、SIM卡顶针 x 1、数据线 x 1\"},{\"name\":\"套装二\",\"msg\":\"主机 x 1、电源适配器 x 1、保修证书 x 1、SIM卡顶针 x 1、数据线 x 1\"},{\"name\":\"套装三\",\"msg\":\"主机 x 1、电源适配器 x 1、保修证书 x 1、SIM卡顶针 x 1、数据线 x 1\"}]',355,'[\"ChMkJ1muOXmIYehXAAForTE1ZqcAAgM8gIvoHEAAWjF285.jpg\",\"ChMkJ1muObeIQC2QAAFJEG0Qt9YAAgM8gLB5wMAAUko989.jpg\",\"ChMkJ1muOaaIen7-AAFiVMpS0C0AAgM8gKWC-0AAWJs941.jpg\",\"ChMkJ1oNI4GIQLfLAAGLxozNptkAAiNaQBwdB8AAYve656.jpg\",\"ChMkJloNI0KISj6jAAEbeuBJCDQAAiNaAM9QDMAARuS241.jpg\"]','ChMkJ1muOXmIYehXAAForTE1ZqcAAgM8gIvoHEAAWjF285_list.jpg',NULL),(5,'电脑','笔记本电脑','【窄边新品】戴尔 Inspiron 灵越 15 7000系列（INS15-7570-D1745S）','15.6英寸！8代四核/八线程i7-8550U 8G内存 256G SSD固态+1TB硬盘 GT940MX-4G独显','7024.00',NULL,'[169,481]','[\"3GB运行\",\"4GB运行\"]',NULL,NULL,NULL,'[{\"name\":\"官方标配\",\"msg\":\"全新原装电脑+全国联保保修卡+说明书+电源适配器+电池（具体以厂家配置为准）+商品发票\"},{\"name\":\"套装一\",\"msg\":\"官方标配+品牌电脑包+品牌有线鼠标+精美鼠标垫\"},{\"name\":\"套装二\",\"msg\":\"套餐一+高清屏幕保护膜+防水/防尘硅胶键盘膜+内胆包+散热底座\"}]',11,'[\"ChMkJ1nUlaSICEbFAAF_14nrP7QAAhAvgI6QOgAAX_v002.jpg\",\"ChMkJ1nUla6IMii7AAC7kvUCS6kAAhAvgKddYoAALuq381.jpg\",\"ChMkJ1nUlV6IeZa2AAFWx8JhodIAAhAvQNK8NsAAVbf040.jpg\",\"ChMkJ1nUlTaIHIxvAAELp4moRswAAhAvQINGncAAQu_716.jpg\",\"ChMkJlnUlVeITACoAAEGCCs88WMAAhAvQMLT-AAAQYg525.jpg\"]','ChMkJ1nUlaSICEbFAAF_14nrP7QAAhAvgI6QOgAAX_v002_list.jpg','[\"银i7-8550U 8G 256G固+1TB\",\"粉i7-8550U 8G 256G固+1TB\"]'),(6,'手机','移动电源','Anker安克 枪炮玫瑰 移动电源/充电宝 10000毫安 双向快充3.0 单口3A','支持Type-C/安卓/苹果/平板等','209.00',NULL,NULL,NULL,'[\"黑红色\"]',NULL,NULL,'[{\"name\":\"官方标配\",\"msg\":\"10000毫安枪炮玫瑰移动电源*1；说明书*1\"}]',10,'[\"ChMkJlnrAoeID0WCAADvVbyR33QAAhckAB1vhUAAO9t530.jpg\",\"ChMkJlnrAt2IEBhKAAFpAwafQ1AAAhckAFfe18AAWkb239.jpg\",\"ChMkJ1nrAuKIfCQjAABbRWjEAqAAAhckAGPRsgAAFtd289.jpg\",\"ChMkJ1np1-mIbEuEAAH9WKpBc6sAAhbBwKq8XYAAf1w148.jpg\",\"ChMkJlnp2CSIaSduAAG1EOMRfGoAAhbBwNnlOsAAbUo173.jpg\"]','ChMkJlnrAoeID0WCAADvVbyR33QAAhckAB1vhUAAO9t530_list.jpg',NULL),(7,'手机','蓝牙耳机','美商海盗船天行者RGB杜比7.1声道有线无线吃鸡游戏耳机 天行者PRO USB ','黑色','599.00',NULL,NULL,NULL,NULL,NULL,NULL,'[{\"name\":\"官方标配\",\"msg\":\"官方标配\"}]',65535,'[\"ChMkJ1pbKfaILFoQAADczAcSthUAAkFXgBGK2cAANzk109.jpg\",\"ChMkJ1pbKfqIUfEgAADdjI-QHP8AAkFXgBMXhYAAN2k066.jpg\",\"ChMkJ1pbKgWIKGF3AADcXyr4bU4AAkFXgBeyxgAANx3105.jpg\",\"ChMkJlpbKgmIMQZ1AADdYBocfO8AAkFXgBhAnAAAN14954.jpg\",\"ChMkJ1pbKg6IEzGvAADOargj3WEAAkFXgBryw4AAM6C135.jpg\"]','ChMkJ1pbKfaILFoQAADczAcSthUAAkFXgBGK2cAANzk109_list.jpg','[\"天行者RGB USB\"]'),(8,'手机','手机贴膜','【包邮】努比亚z17 z17mini z11 保护壳硅胶防摔超薄软壳男女潮',NULL,'29.00',NULL,'[0,1]',NULL,NULL,NULL,NULL,'[{\"name\":\"官方标配\",\"msg\":\"透明软壳【透明】高透裸机质感+全屏白钢化膜\"}]',29,'[\"ChMkJllMiFyIX4cIAASWFADYXmkAAdO1QMDJfoABJYs420.jpg\",\"ChMkJllMiS2IQw09AAMLX3Nn4UkAAdO1wGa9coAAwt3166.jpg\"]','ChMkJllMiFyIX4cIAASWFADYXmkAAdO1QMDJfoABJYs420_list.jpg','[\"z17透明软壳+全屏钢化膜\",\"z11透明软壳+全屏钢化膜\",\"z17mini透明壳+全屏钢化膜\"]'),(9,'手机','保护套','【包邮】三星 GALAXY S8/S8+硅胶保护套/手机壳原装 防摔全包男女',NULL,'59.00',NULL,NULL,NULL,'[\"黑色\",\"白色\",\"粉色\",\"黄色\",\"蓝色\",\"紫色\",\"三星 GALAXY S8+白色\",\"三星 GALAXY S8+黄色\",\"三星 GALAXY S8+蓝色\",\"三星 GALAXY S8+黑色\",\"三星 GALAXY S8+紫色\"]',NULL,NULL,'[{\"name\":\"官方标配\",\"msg\":\"保护套*1\"}]',109,'[\"ChMkJlmiYsKIWG1WAAEPtpgQWXsAAgAKALmHhAAAQ_O408.jpg\",\"ChMkJlmiYsaIR4TqAADms2kglUcAAgAKALz6HwAAObL073.jpg\",\"ChMkJ1miYsyIEVtjAACjvWuIyH8AAgAKAMFwvIAAKPV875.jpg\",\"ChMkJ1miYtKIJP3CAABh52FftBwAAgAKAM2XPEAAGH_117.jpg\"]','ChMkJlmiYsKIWG1WAAEPtpgQWXsAAgAKALmHhAAAQ_O408_list.jpg',NULL),(10,'手机','数据线','Anker 苹果MFI认证数据线iPhone7 8p /X 10手机充电线 拉车线2代','拉车线二代 30000次折弯80KG吊重','129.00',NULL,NULL,NULL,'[\"红色（0.9米）\",\"红色（1.8米）\"]',NULL,NULL,'[{\"name\":\"官方标配\",\"msg\":\"powerline+2代 lightning数据线 红色*1\"}]',10,'[\"ChMkJ1ob3NmILkt-AAO1cYeW-P0AAigFAFQsJgAA7WJ123.jpg\",\"ChMkJ1ob3OqIV92DAAPga8xmkIQAAigFAG_GAIAA-CD620.jpg\",\"ChMkJ1ob3PCIKlX-AAJbpzYBbOwAAigFAHyzQQAAlu_021.jpg\",\"ChMkJlob3PiIRGx0AAEmEJuIKDsAAigFAIWGBkAASYo943.jpg\",\"ChMkJlob3QmIHdKkAALF5pV2D1kAAigFAI0iiYAAsX-634.jpg\"]','ChMkJ1ob3NmILkt-AAO1cYeW-P0AAigFAFQsJgAA7WJ123_list.jpg',NULL),(11,'电脑','游戏本','联想 拯救者R720-15IKB（i5 7300HQ/8GB/128GB+1TB/GTX1060-6G独显）',NULL,'7199.00',NULL,'[347,383]','[\"拯救者R720-15IKB（i5 7300HQ/8GB/1TB/GTX1050 2G独显）\",\" 拯救者R720-15IKB（i5 7300HQ/8GB/128GB+1TB/GTX1050 2G独显）\",\" 拯救者R720-15IKB（i7 7700HQ/8GB/1TB/2G独显）\",\" 拯救者R720-15IKB（i5 7300HQ/8GB/1TB/2G独显）\",\" 拯救者R720-15IKB（i7 7700HQ/8GB/256GB+1TB/2G独显）\",\" 拯救者R720-15IKB（i5 7300HQ/8GB/128GB+1TB/2G独显）\",\" 拯救者R720-15IKB（i7 7700HQ/8GB/128GB+1TB/4G独显）\",\" 拯救者R720-15IKB（i5 7300HQ/8GB/128GB+1TB/4G独显） \",\"联想 拯救者R720-15IKB（i5 7300HQ/8GB/128GB+1TB/6G独显） \",\"拯救者R720-15IKB（i7 7700HQ/8GB/128GB+1TB/6G独显） \",\"拯救者R720-15IKBM（i7 7700HQ/16GB/512GB/4G独显）\"]','[\"I5 8G 1T+128GSSD GTX1060-6G\"]',NULL,NULL,'[{\"name\":\"官方标配\",\"msg\":\"官方标配\"}]',9998,'[\"ChMkJloiMROINyaFAAGdHP7zl6YAAitDQDtCIIAAZ00107.jpg\",\"ChMkJlkNdnqIR8e9AAQsi1ODsT4AAcMLgI_uB0ABCyj254.jpg\",\"ChMkJ1jJIsOIMEbDAAC4v1iO3MQAAaxLQCrfBcAALjX763.jpg\",\"ChMkJlkNdoiIIG7zAAJTeP_JUA0AAcMLgKvKi0AAlOQ131.jpg\",\"ChMkJlkNdoSITEKFAAV5NFKxqmEAAcMLgKbyU0ABXlM208.jpg\"]','ChMkJloiMROINyaFAAGdHP7zl6YAAitDQDtCIIAAZ00107_list.jpg',NULL),(12,'电脑','超极本','【年货专区 顺丰包邮】 惠普 PAVILION 14-BF115TX（2SL40PA）14英寸笔记本电脑','酷睿八代i5-8250U 4G内存 128G SSD+500G硬盘 GT940MX-2G性能级独显 IPS全高清屏','5999.00','[\"ChMkJlotX8GISK0eAAAQYD2zbwEAAjCQwLDZv8AABB4071.jpg\",\"ChMkJ1pPSY-IdyYDAAA1I6HeR20AAj2VgEazmMAADU7649.png\",\"ChMkJloRAHyIa3fPAAAQZ2yTwIIAAiSrgGzgpMAABB_481.jpg\"]','[272,635]',NULL,'[\"粉色\"]',NULL,NULL,'[{\"name\":\"官方标配\",\"msg\":\"全新原装电脑+全国联保保修卡+说明书+电源适配器+电池+商品发票（具体以厂家配置为准）\"},{\"name\":\"套装一\",\"msg\":\"全新原装电脑+全国联保保修卡+说明书+电源适配器+电池+商品发票（具体以厂家配置为准）\"},{\"name\":\"套装二\",\"msg\":\"全新原装电脑+全国联保保修卡+说明书+电源适配器+电池+商品发票（具体以厂家配置为准）\"}]',10,'[\"ChMkJlk47CiIbSchAAY1mLlmPVgAAc4wwDd7zgABjWw525.png\",\"ChMkJ1k47C6IMM3AAANDrYaR7s8AAc4wwEJ3ugAA0PF799.png\",\"ChMkJlk47DKId9EQAAMKl3RCTLYAAc4wwERRIEAAwqv667.png\",\"ChMkJ1k47DmIWZA3AAHm0kJlxIAAAc4wwEfg4UAAebq440.png\",\"ChMkJ1k47D2IbHRJAAGSe2tFaGsAAc4wwEmhu0AAZKT967.png\"]','ChMkJlk47CiIbSchAAY1mLlmPVgAAc4wwDd7zgABjWw525_list.png',NULL),(13,'DIY','DIY主机','甲骨龙 i7-7700/1060独显/DIY组装电脑 吃鸡主机','全新正品 三年质保','5599.00',NULL,NULL,NULL,NULL,NULL,NULL,'[{\"name\":\"官方标配\",\"msg\":\"官方标配\"}]',10,'[\"ChMkJlpxgJ-IKoEHAAENwc8uq-YAAkhuQOb48QAAQ3Z934.jpg\",\"ChMkJ1pxgKOIEmyWAAFVoHdPNzIAAkhuQPwVpoAAVW4399.jpg\",\"ChMkJ1pxgKmISsloAAC9Cp81_k4AAkhuQP3EJ0AAL0i697.jpg\",\"ChMkJlpxgK2IQq3fAAFan_HtLcYAAkhuQP7SmsAAVq3521.jpg\",\"ChMkJlpxgJ-IKoEHAAENwc8uq-YAAkhuQOb48QAAQ3Z934.jpg\"]','ChMkJlpxgJ-IKoEHAAENwc8uq-YAAkhuQOb48QAAQ3Z934_list.jpg','[\"默认标配\",\" 标配升级240G SSD固态盘 \",\"标配+ 1TB机械硬盘\"]'),(14,'数码','数码相机','【canon授权专卖 顺丰包邮】佳能 5Ds套机(24-70mm II USM) 赠UV镜','约5060万像素全画幅CMOS图像感应器','30988.00','[\"ChMkJ1ok9H6IEiH0AAAMHCFlMWYAAizFAPh3fIAAAw0074.jpg\",\"ChMkJlox_5KIG0QrAABQaeOo6w0AAjJ3ANJsi8AAFCB657.png\",\"ChMkJ1qXixiISSQNAAAOPKuhOasAAlCrgBuYjAAAA5U355.jpg\",\"ChMkJlok9P6IKggNAAAMcOH5PyUAAizFgD9gf8AAAyI841.jpg\"]',NULL,NULL,NULL,NULL,NULL,NULL,30,'[\"ChMkJ1hQ6OiIcdSlAANDFR_QV_MAAYjFAHkZKkAA0Mt324.jpg\",\"ChMkJ1hQ6O6IcAvgAADmH1RKMLQAAYjFAIEB-kAAOY3011.jpg\",\"ChMkJlhQ5H6IFkrPAAD3tyv-lB0AAYjDAMw67EAAPfP243.jpg\",\"ChMkJ1hQ5IOILAGfAADZxrUnkaAAAYjDAM-KqMAANne578.jpg\",\"ChMkJ1hQ5IiIPeIGAAD_IfM1LP4AAYjDANFGx4AAP85370.jpg\"]','ChMkJ1hQ6OiIcdSlAANDFR_QV_MAAYjFAHkZKkAA0Mt324_list.jpg',NULL),(15,'外设','键盘','美商海盗船（USCORSAIR） K70 LUX 机械游戏键盘 樱桃轴 K70 RGB 银轴',NULL,'1399.00',NULL,NULL,NULL,NULL,NULL,NULL,'[{\"name\":\"官方标配\",\"msg\":\"官方标配\"}]',9999,'[\"ChMkJ1pbFDyIYD-yAAEgJSMNA2UAAkFSQP8zSkAASA9848.jpg\",\"ChMkJlpbFEGIPF-TAAEoKuXqwmYAAkFSQP98p0AAShC755.jpg\",\"ChMkJlpbFESIPwrKAAFEyUESE6sAAkFSgAKTR0AAUTh072.jpg\",\"ChMkJ1pbFEiIA6EkAAD9riD9PVkAAkFSgAvEY8AAP3G096.jpg\",\"ChMkJlpbFEyIPZzqAAFGhkU3ASAAAkFSgA5CqoAAUae566.jpg\"]','ChMkJ1pbFDyIYD-yAAEgJSMNA2UAAkFSQP8zSkAASA9848_list.jpg','[\"K70 RGB 银轴\"]'),(16,'智能','智能手环','【顺丰包邮】Huawei/华为 运动手环 【GPS版】50米防水 智能运动指导','24小时心率跟踪','388.00',NULL,'[5,40]',NULL,'[\"黑色\"]',NULL,NULL,'[{\"name\":\"官方标配\",\"msg\":\"官方标配\"}]',99,'[\"ChMkJlpcWrGIQCyWAADJpa_0IhwAAkGiAMM8mwAAMm9914.jpg\",\"ChMkJ1lxt4uIJM_EAALsrCLjJCgAAe8kgNMTTAAAuzE550.jpg\",\"ChMkJllxt6KIVJDAAALvPSi7VacAAe8kgPI0L4AAu9V512.jpg\",\"ChMkJ1lxt52IV4ihAAMHVM7f20kAAe8kgOkQoIAAwds746.jpg\",\"ChMkJllxt4-IC7ZNAAHM7tSjnSAAAe8kgNyxZkAAc0G403.jpg\"]','ChMkJlpcWrGIQCyWAADJpa_0IhwAAkGiAMM8mwAAMm9914_list.jpg',NULL);

/*Table structure for table `userinfo` */

DROP TABLE IF EXISTS `userinfo`;

CREATE TABLE `userinfo` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_pwd` varchar(50) NOT NULL,
  `user_tel` varchar(11) NOT NULL,
  `user_sex` varchar(2) NOT NULL,
  `user_address` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

/*Data for the table `userinfo` */

insert  into `userinfo`(`user_id`,`user_name`,`user_pwd`,`user_tel`,`user_sex`,`user_address`) values (31,'daijunwang','1bbd886460827015e5d605ed44252251','15555555555','%E','%E6%B9%96%E5%8D%97%E9%95%BF%E6%B2%99'),(32,'womende','1bbd886460827015e5d605ed44252251','15555555555','%E','%E6%B9%96%E5%8D%97%E9%95%BF%E6%B2%99'),(33,'daijunwang2','1bbd886460827015e5d605ed44252251','15999999999','%E','%E6%B9%96%E5%8D%97%E9%95%BF%E6%B2%99'),(34,'123456789','25f9e794323b453885f5181f1b624d0b','13131331331','%E','2312321321321'),(37,'daijunwang5','1bbd886460827015e5d605ed44252251','15999999999','%E','%E6%B9%96%E5%8D%97%E9%95%BF%E6%B2%99'),(39,'daijunwang6','1bbd886460827015e5d605ed44252251','13666666666','%E','%E6%B9%96%E5%8D%97%E9%95%BF%E6%B2%99'),(40,'daijunwang3','1bbd886460827015e5d605ed44252251','15555555555','%E','%E6%B9%96%E5%8D%97%E9%95%BF%E6%B2%99'),(41,'daijunwang4','1bbd886460827015e5d605ed44252251','13666666666','%E','%E6%B9%96%E5%8D%97%E9%95%BF%E6%B2%99'),(42,'daijunwang7','1bbd886460827015e5d605ed44252251','15555555555','%E','%E6%B9%96%E5%8D%97%E9%95%BF%E6%B2%99'),(43,'womende1','1bbd886460827015e5d605ed44252251','15555555555','%E','%E6%B9%96%E5%8D%97%E9%95%BF%E6%B2%99'),(46,'womende3','1bbd886460827015e5d605ed44252251','13666666666','%E','%E6%B9%96%E5%8D%97%E9%95%BF%E6%B2%99'),(48,'womende4','1bbd886460827015e5d605ed44252251','13666666666','%E','%E6%B9%96%E5%8D%97%E9%95%BF%E6%B2%99');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
