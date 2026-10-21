export interface SocialLink {
  id: string
  label: string
  handle: string
  href: string
}

/** 个人信息与联系方式，按需修改为自己的资料 */
export const profile = {
  name: '杨可祎',
  englishName: 'Yang Keyi',
  role: '学生 · 前端爱好者',
  location: '数字经济 2501 班',
  availability: '正在学习前端开发',
  avatar: '/images/avatar.svg',
  email: 'yangkeyi@example.com',
  intro:
    '我是杨可祎，数字经济 2501 班的一名学生。喜欢用 React 与 TypeScript 把想法做成简洁、好用的网页，也在持续学习数据分析与产品设计。',
  about: [
    '你好，我是杨可祎，数字经济 2501 班的学生。课堂之外，我把大部分时间花在前端开发上，从页面布局、交互细节到组件拆分，喜欢亲手把一个想法慢慢做出来。',
    '我偏爱干净、温柔的设计语言，也相信好的网页不只是「看起来好看」，更要加载够快、交互顺手、代码清晰。这个作品集记录了我近期的练习与项目。',
    '目前我正在寻找前端相关的实习与学习机会。如果你愿意交流，欢迎随时联系我。',
  ],
  socials: [
    {
      id: 'github',
      label: 'GitHub',
      handle: '@yangkeyi',
      href: 'https://github.com/yangkeyi',
    },
    {
      id: 'juejin',
      label: '掘金',
      handle: '@杨可祎',
      href: 'https://juejin.cn',
    },
    {
      id: 'x',
      label: 'X / Twitter',
      handle: '@yangkeyi',
      href: 'https://x.com',
    },
  ] satisfies SocialLink[],
}
