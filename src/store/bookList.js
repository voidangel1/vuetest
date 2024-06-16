let bookList = [{
    cover: require('../assets/images/1.png'),
    bookName: 'MatePad Pro11',
    author: '12+256',
    price: 1599,
    type: '智慧办公',
    description: 'MatePad Pro 11是华为推出的一款平板电脑，于2024年12月8日正式开售。这款平板电脑号称是“全球最轻薄 11 英寸平板”，厚度为5.9mm。配置了降频版麒麟9000S处理器，性能功耗表现稳定。它还搭载了一块11英寸OLED全面屏，拥有较高的屏占比。此外，华为MatePad Pro 11英寸支持北斗卫星消息功能。'
}, {
    cover: require('../assets/images/2.png'),
    bookName: 'D16',
    author: 'i5/16GB/1TB',
    price: 4499,
    type: '智慧办公',
    description: 'MateBook D 16是一款大屏轻巧的笔记本电脑，采用了全金属机身设计，重量轻盈，厚度薄至17.8mm。它配备了一款16英寸的IPS全面屏，分辨率为1920 x 1080像素，色彩还原度较高。搭载了第12代英特尔酷睿处理器，并配备了英特尔Xe显卡，性能强劲。它还拥有大容量高速固态硬盘和内存，可以提供快速的文件传输和多任务处理能力。'
}, {
    cover: require('../assets/images/3.png'),
    bookName: 'D16 SE版',
    author: 'i5/16GB/512GB',
    price: 3999,
    type: '智慧办公',
    description: '是MateBook D 16系列的特别版。它采用全金属机身设计，外观时尚简约，重量轻盈，方便携带。搭载了英特尔酷睿处理器，性能强劲，可以满足用户的各种需求。它还配备了高速固态硬盘和大容量内存，可以提供快速的文件传输和多任务处理能力。'
}, {
    cover: require('../assets/images/4.png'),
    bookName: '华为智慧屏 V5 Pro',
    author: '八核旗舰款',
    price: 22999,
    type: '智能家居',
    description: '华为智慧屏 V5 Pro采用了先进的音视频技术，支持HDR10+认证，可以提供出色的画面质量和音效表现。此外，它还配备了全数字音频处理技术，可以实现更加纯净的音质表现依托于HarmonyOS的分布式能力，可以实现多设备连接和智能控制。这意味着用户可以轻松地将手机上的应用“搬”到大屏幕上，享受更大的视觉体验。'
}, {
    cover: require('../assets/images/5.png'),
    bookName: 'Sound NEW',
    author: '星际黑',
    price: 1799,
    type: '智能家居',
    description: '智能家居常识的原点，就是人性常识，也就是对人的天性的认识。衡量一位教师和智能家居理论研究者是否进入了智慧的境界，不仅要看他有没有与智能家居有关的实践智慧和思想智慧，更要看他有没有直捣人心、洞察人性的智慧，有没有形成自己独特的对人性的理解。'
}, {
    cover: require('../assets/images/6.png'),
    bookName: '华为智能门锁',
    author: '指纹解锁',
    price: 2099,
    type: '智能家居',
    description: ' 采用了1 TOPS算力的7 AI芯片，每次指纹解锁时，持续学习和完善用户指纹特征，越用越好用。此外，该门锁还具有基于AI模型的图像增强技术，对指纹图像进行增强，以提供更精确的指纹识别。'
}, {
    cover: require('../assets/images/7.png'),
    bookName: 'Mate 60',
    author: '12GB+512GB',
    price: 5999,
    type: '华为手机',
    description: '华为Mate 60在外观设计上延续了Mate系列的经典风格，采用了大尺寸的屏幕和极简的设计风格。它还搭载了最新的麒麟芯片，具有出色的性能和能效表现。此外，Mate 60还采用了高分辨率的屏幕、高像素的摄像头和先进的电池技术，以提供更好的视觉体验、拍照效果和续航能力。'
}, {
    cover: require('../assets/images/8.png'),
    bookName: 'HUAWEI P60',
    author: '8GB+256GB',
    price: 4988,
    type: '华为手机',
    description: '华为P60由华为巴黎美学研究所设计，以“自然之美”为灵感；手机长度为161毫米，宽度为74.5毫米，厚度为8.3毫米；屏幕采用6.67英寸OLED屏幕；机身提供洛可可白、翡冷翠、羽砂紫、羽砂黑四种颜色。华为P60搭载高通骁龙8+4G处理器，预装HarmonyOS 3.1操作系统，屏幕支持10.7亿色，搭载4815毫安时电池，支持双向北斗卫星消息、灵犀通信。'
}, {
    cover: require('../assets/images/9.png'),
    bookName: 'nova11PRO',
    author: '256GB',
    price: 2699,
    type: '华为手机',
    description: '华为nova11 Pro搭载了6.78英寸的臻彩环幕屏，支持HDR照片及视频高动态显示，结合AI超清画质，画面高清细腻；拥有P3广色域，色彩真实炫丽；支持1440Hz高频PWM调光，看得更舒适。它还采用了120Hz智能高刷和昆仑玻璃，以刚克刚，提升至10倍。另外，nova11 Pro还配备了6000万超广角追焦镜头、800万人像特写镜头等高像素镜头，支持全像素精准对焦和光学变焦等拍摄功能，能够满足用户对拍摄质量的需求。'
}, {
    cover: require('../assets/images/10.png'),
    bookName: '华为智能眼镜 2',
    author: '晨曦金',
    price: 1899,
    type: '影音娱乐',
    description: '【新品上市】①钛空光学镜、无框光学镜配镜建议优先选择线上配镜服务 ②如需线上配镜服务请提前准备好配镜参数 ③晒单抽100个华为AI音箱 2e（下拉商详了解详情）  全天候智慧播报，11小时持久聆听，逆声场隐私聆听2.0'
}, {
    cover: require('../assets/images/11.png'),
    bookName: 'HUAWEI FreeBudsPro3',
    author: ' 无线充 雅川青',
    price: 1449,
    type: '影音娱乐',
    description: 'HUAWEI FreeBudsPro3是华为推出的全球首款应用星闪连接核心技术和蓝牙技术的耳机。这款耳机配合HUAWEI Mate 60系列等手机，可以带来业界首发1.5 Mbps无损传输，实现超CD级无损音质，用心还原好音乐本色。。'
}, {
    cover: require('../assets/images/12.png'),
    bookName: 'HUAWEI FreeLace',
    author: ' 无线耳机 曜石黑',
    price: 199,
    type: '影音娱乐',
    description: '随身快充，沉浸音质， 持久续航'
}, {
    cover: require('../assets/images/13.png'),
    bookName: 'HUAWEI WATCH GT 4',
    author: '(46mm) 曜石黑 黑色氟橡胶表带',
    price: 1538,
    type: '运动健康',
    description: '科学运动减脂，心律失常提示，强劲续航'
}, {
    cover: require('../assets/images/14.png'),
    bookName: 'HUAWEI WATCH 4 Pro',
    author: '木星棕 深棕色真皮表带 ',
    price: 3349,
    type: '运动健康',
    description: '一键微体检 高血糖风险评估研究 球面蓝宝石玻璃球面蓝宝石玻璃，双续航模式，eSIM独立通话、(腕围140-210mm)'
}, {
    cover: require('../assets/images/15.png'),
    bookName: '华为手环 8标准版 ',
    author: '幻夜黑TPU表带',
    price: 99,
    type: '运动健康',
    description: '8.99毫米轻薄设计、科学睡眠再升级、快充升级 强劲续航'
}, {
    cover: require('../assets/images/16.png'),
    bookName: '华为擎云 S520 ',
    author: 'i5 16GB 512GB 14英寸',
    price: 4499,
    type: '企业商用',
    description: '【2年维保 2年上门】,多屏协同，智慧办公，企业级安全防护'
}, {
    cover: require('../assets/images/17.png'),
    bookName: '擎云 B730E 16L',
    author: 'Intel i5 16G 256G+1T ',
    price: 3999,
    type: '企业商用',
    description: '黑 有线键盘 有线鼠标 WIN11 HOME WiFi至高优惠600元 【企业用户提交意向单】单主机享200元优惠；搭配显示器B3-241H套餐提单优惠600元，到手价4398元。详情可咨询采购专线：950805转8号键。'
}, {
    cover: require('../assets/images/23.png'),
    bookName: 'HUAWEI M-Pencil 第三代',
    author: '雪域白',
    price: 500,
    type: '配件中心',
    description: '搭载星闪技术，搭配HUAWEI触屏产品'
}, {
    cover: require('../assets/images/24.png'),
    bookName: '微泵液冷壳 ',
    author: 'Mate60黑色',
    price: 299,
    type: '配件中心',
    description: '灵动背窗，轻巧纤薄，降低手机温度体验凉飕飕的手机温度体验'
},  ]

export default bookList