/** @type {import('cz-git').UserConfig} */
export default {
  rules: {},
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "选择要提交的更改类型:",
      subject: "写一个简短的命令式时态描述的变化:",
    },
    types: [
      { name: "✨ 引入新功能", value: "feat", emoji: ":sparkles:" },
      { name: "💄 添加或更新样式文件", value: "style", emoji: ":lipstick:" },
      { name: "🐛 修复 bug", value: "fix", emoji: ":bug:" },
      { name: "⚰️ 删除死代码", value: "coffin", emoji: ":coffin:" },
      { name: "♻️ 重构代码", value: "refactor", emoji: ":recycle:" },
      { name: "🎉 开始一个项目", value: "tada", emoji: ":tada:" },
      { name: "📝 添加或更新文档", value: "docs", emoji: ":memo:" },
      { name: "✅ 添加、更新或通过测试", value: "test", emoji: ":white_check_mark:" },
      { name: "⚡️ 提高性能", value: "perf", emoji: ":zap:" },
      { name: "🔨 添加或更新开发脚本", value: "chore", emoji: ":hammer:" },
      { name: "🔧 添加或更新配置文件", value: "wrench", emoji: ":wrench:" },
      { name: "✏️ 修正错别字", value: "pencil2", emoji: ":pencil2:" },
      { name: "⏪️ 还原更改", value: "revert", emoji: ":rewind:" },
      { name: "📦️ 添加或更新已编译的文件或包", value: "build", emoji: ":package:" },
      { name: "🎡 更改我们的CI配置文件和脚本", value: "ci", emoji: ":ferris_wheel:" },
    ],
    useEmoji: true,
  },
};
