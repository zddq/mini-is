/** @type {import('cz-git').UserConfig} */
export default {
  rules: {},
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "选择要提交的更改类型:",
      subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    },
    types: [
      { value: "feat", name: "feat: ✨ 引入新功能", emoji: ":sparkles:" },
      { value: "fix", name: "fix: 🐛 修复 bug", emoji: ":bug:" },
      { value: "style", name: "style: 💄 添加或更新样式文件", emoji: ":lipstick:" },
      { value: "coffin", name: "coffin: ⚰️ 删除死代码", emoji: ":coffin:" },
      { value: "refactor", name: "refactor: ♻️ 重构代码", emoji: ":recycle:" },
      { value: "tada", name: "tada: 🎉 开始一个项目", emoji: ":tada:" },
      { value: "docs", name: "docs: 📝 添加或更新文档", emoji: ":memo:" },
      { value: "test", name: "test: ✅ 添加、更新或通过测试", emoji: ":white_check_mark:" },
      { value: "perf", name: "perf: ⚡️ 提高性能", emoji: ":zap:" },
      { value: "chore", name: "chore: 🔨  添加或更新开发脚本", emoji: ":hammer:" },
      { value: "wrench", name: "wrench: 🔧 添加或更新配置文件", emoji: ":wrench:" },
      { value: "pencil2", name: "pencil2: ✏️ 修正错别字", emoji: ":pencil2:" },
      { value: "revert", name: "revert: ⏪️  还原更改", emoji: ":rewind:" },
      { value: "build", name: "build: 📦️ 添加或更新已编译的文件或包", emoji: ":package:" },
      { value: "ci", name: "ci: 🎡 更改我们的CI配置文件和脚本", emoji: ":ferris_wheel:" },
    ],
    useEmoji: true,
  },
};
