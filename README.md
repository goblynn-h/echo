# 回响

记录你看过的书籍和影视作品在心里留下的回响。

## 功能

- **分类管理** — 自定义分类，拖拽排序，增删改查
- **封面网格** — 封面卡片展示，拖拽排序，按名称搜索
- **Markdown 笔记** — 点击封面打开浮窗，支持相对路径引用图片
- **三套主题** — 素白 / 松绿 / 暖黄，各带亮色与暗色模式
- **完全便携** — 单文件 exe，配置存于同级目录，不写注册表

## 技术栈

| 层 | 选型 |
|---|---|
| 桌面框架 | Tauri 2.0 |
| 前端 | React 19 + TypeScript + Vite |
| 样式 | Tailwind CSS v4 |
| Markdown 编辑器 | @uiw/react-md-editor |
| 图标 | lucide-react |
| 拖拽 | @dnd-kit |
| 后端 | Rust |

## 构建

```bash
# 安装依赖
npm install

# 开发模式
npm run tauri dev

# 构建便携版 exe
npm run tauri build
```

产物在 `src-tauri/target/release/app.exe`，约 9 MB，复制到任意目录即可运行。

## 数据存储

所有数据存于用户指定的文件夹，结构如下：

```
MyLibrary/
├── categories.json       # 分类列表
├── {分类名}/
│   ├── index.json        # 条目索引
│   ├── covers/           # 封面图片
│   └── notes/            # Markdown 笔记
└── ...
```

## 许可

MIT
