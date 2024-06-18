export type WebNavigationListRow = {
  content: string;
  id: string;
  imageUrl: string | null;
  name: string;
  thumbnailUrl: string | null;
  title: string;
  url: string;
};

export type WebNavigationDetailData = {
  categoryName: string;
  collectionTime: string;
  content: string;
  detail: string;
  imageUrl: string;
  name: string;
  starRating: number;
  tagName: string;
  thumbnailUrl: string;
  title: string;
  url: string;
  websiteData: string;
};

export const dataList: WebNavigationListRow[] = [
  {
    id: '1792434701288771584',
    name: 'zyck',
    title: '阳光志愿信息服务系统',
    content:
      '基于各省市招生选科要求、历年高考录取分数，二十多项专业心理测评，以及最新专业就业发展统计数据，为高中生提供选科指导、志愿参考、院校专业查询、心理测评、专业就业分析、报考指南等一站式志愿规划服务。',
    url: 'https://gaokao.chsi.com.cn/zyck/',
    imageUrl: 'https://pic.imgdb.cn/item/66713347d9c307b7e9016feb.jpg',
    thumbnailUrl: 'https://pic.imgdb.cn/item/66713347d9c307b7e9016feb.jpg',
  },
];

export const detailList: WebNavigationDetailData[] = [
  {
    name: 'zyck',
    title: '阳光志愿信息服务系统',
    detail:
      '# 阳光志愿信息服务系统\n\n一个为学生提供全面高考志愿填报和职业规划服务的平台。\n\n## 功能模块\n1. **职业前景** - 提供学科报考指南，招生政策，招生动态等信息，帮助学生了解职业发展方向。\n2. **院校查询** - 包含院校库，院校满意度，以及招生章程等信息，帮助学生了解不同院校的详细情况。\n3. **专业查询** - 提供专业库，专业满意度，专业解读等，帮助学生了解不同专业的具体情况。\n\n## 特色服务\n- **智能推荐志愿** - 结合个人高考成绩和兴趣偏好，由专家进行智能推荐。\n- **专业顺向测评** - 评估个人职业能力水平，包括教学能力、主动学习能力等。\n- **心理测评** - 检测生活情绪状态，评估生涯决策风格。\n\n## 专家支持\n- 来自北京大学、北京师范大学、南京师范大学的专家支持。\n\n## 其他资源\n- **生涯课堂** - 提供生涯规划相关课程。\n- **招生政策** - 掌握招生工作动态全过程。\n- **招办访谈** - 了解招生办公室的访谈信息。\n- **在线咨询** - 提供在线咨询服务。\n- **大学生活** - 了解大学生活的相关信息。\n\n## 使用指南\n- 通过参与测评，学生可以对自己的职业能力有正确的认知，为职业生涯规划打下基础。\n- 利用系统提供的资源和工具，学生可以更好地规划自己的高考志愿和未来职业道路。',
    content:
      '基于各省市招生选科要求、历年高考录取分数，二十多项专业心理测评，以及最新专业就业发展统计数据，为高中生提供选科指导、志愿参考、院校专业查询、心理测评、专业就业分析、报考指南等一站式志愿规划服务。',
    url: 'https://gaokao.chsi.com.cn/zyck/',
    imageUrl: 'https://pic.imgdb.cn/item/66713347d9c307b7e9016feb.jpg',
    thumbnailUrl: 'https://pic.imgdb.cn/item/66713347d9c307b7e9016feb.jpg',
    collectionTime: '2024-06-17 00:00:00',
    tagName: 'Website',
    websiteData: '1000',
    starRating: 5,
    categoryName: 'SichuanCuisine',
  },
];
