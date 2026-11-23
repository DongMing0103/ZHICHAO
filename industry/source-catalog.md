# 知潮信源目录（2026-11-04）

本目录按线上数据库的启停状态整理；数据库是运行时状态，`industry/sources.json` 只负责新库的初始导入。信源免费可读、能抓到正文、允许本站展示全文，是三个不同的判断。抓取优先级：第一方 RSS/Atom → 第一方公开 JSON → 直读网页列表 → 经核验的自建 RSSHub 或外部推送。站内全文只给有明确转载许可且确实取得完整正文的文章；其余提供标题、模型提炼内容和原文链接。`syndicate_fulltext` 继续关闭。

## 活跃：25 条 RSS

| 方向 | 信源 | 订阅地址 | 站内展示 | 用途与注意 |
| --- | --- | --- | --- | --- |
| AI 研究 | arXiv cs.AI | `https://export.arxiv.org/api/query?search_query=cat:cs.AI&start=0&max_results=30&sortBy=submittedDate&sortOrder=descending` | 摘要 | 官方 Atom API；摘要页不是论文全文 |
| AI 研究 | Frontiers in Artificial Intelligence | `https://www.frontiersin.org/journals/artificial-intelligence/rss` | 许可全文 | 开放获取论文；正文质量需逐篇检查 |
| AI 研究 | Berkeley AI Research | `https://bair.berkeley.edu/blog/feed.xml` | 标题＋提炼 | 学术团队博客 |
| AI 产品 | OpenAI News | `https://openai.com/news/rss.xml` | 标题＋提炼 | 厂商一手发布；当前正文提取多为未确认 |
| AI 产品 | Google DeepMind | `https://deepmind.google/blog/rss.xml` | 标题＋提炼 | 模型与研究发布；偶有超时 |
| AI 产品 | Microsoft Research | `https://www.microsoft.com/en-us/research/feed/` | 标题＋提炼 | 官方研究；近期抓取偶有波动 |
| AI 产品 | AWS Machine Learning Blog | `https://aws.amazon.com/blogs/machine-learning/feed/` | 标题＋提炼 | 工程实践与产品 |
| AI 产品 | NVIDIA Blog | `https://blogs.nvidia.com/feed/` | 标题＋提炼 | 算力与产品，需辨别营销内容 |
| AI 工程 | GitHub Blog · AI & ML | `https://github.blog/ai-and-ml/feed/` | 标题＋提炼 | GitHub 官方文章，不等于 GitHub Trending |
| AI 工程 | Simon Willison | `https://simonwillison.net/atom/everything/` | 标题＋提炼 | 实践与独立观察；全站订阅需筛选 AI 相关性 |
| AI 工程 | Latent Space | `https://www.latent.space/feed` | 标题＋提炼 | 工程与访谈；原站可能有订阅内容，链接须核实免费可读 |
| AI 媒体 | Ars Technica · AI | `https://arstechnica.com/ai/feed/` | 标题＋提炼 | 技术报道 |
| AI 媒体 | MIT Technology Review · AI | `https://www.technologyreview.com/topic/artificial-intelligence/feed` | 标题＋提炼 | 部分原文可能要求订阅，需持续核实免费可读 |
| AI 媒体 | TechCrunch · AI | `https://techcrunch.com/category/artificial-intelligence/feed/` | 标题＋提炼 | 创业、融资和产品 |
| AI 媒体 | The Decoder | `https://the-decoder.com/feed/` | 标题＋提炼 | AI 新闻；全站订阅需筛选相关性 |
| AI 媒体 | The Verge · AI | `https://www.theverge.com/rss/ai-artificial-intelligence/index.xml` | 标题＋提炼 | 产品与产业新闻 |
| 中文快讯 | 量子位 | `https://www.qbitai.com/feed` | 标题＋提炼 | 快速发现中文 AI 新闻，重要事实再找原始公告 |
| 中文快讯 | 开源中国综合新闻 | `https://www.oschina.net/news/rss` | 标题＋提炼 | 综合技术新闻，不是 AI 专题；需筛选相关性 |
| 心理研究 | PLOS Mental Health | `https://journals.plos.org/mentalhealth/feed/atom?type=published` | 许可全文 | 开放获取；订阅中的摘要须从文章页补全正文 |
| 心理研究 | PLOS Digital Health | `https://journals.plos.org/digitalhealth/feed/atom?type=published` | 许可全文 | AI＋心理/数字健康交叉；摘要须从文章页补全正文 |
| 心理研究 | Frontiers in Psychology | `https://www.frontiersin.org/journals/psychology/rss` | 许可全文 | 开放获取论文 |
| 心理临床 | Frontiers in Psychiatry | `https://www.frontiersin.org/journals/psychiatry/rss` | 许可全文 | 开放获取临床研究 |
| 心理研究 | Association for Psychological Science | `https://www.psychologicalscience.org/feed` | 标题＋提炼 | 学会动态；不能把付费论文当全文转载 |
| 心理研究 | ScienceDaily Mental Health | `https://www.sciencedaily.com/rss/mind_brain/mental_health.xml` | 标题＋提炼 | 二手研究快讯，回查原论文 |
| 心理科普 | Hidden Brain | `https://www.hiddenbrain.org/feed/` | 标题＋提炼 | 播客订阅；音频条目不等于文字逐字稿 |

上述“许可全文”表示来源有开放许可，仍须逐篇确认取得的是完整文章。后台筛选、去重与发布时间规则决定条目是否进入公开列表；启用信源不等于每条订阅都展示。

## 暂停：13 条 RSS

- **本次 OPML 的 9 条**：机器之心、36氪综合快讯、Hugging Face Blog、新智元、PaperWeekly、中国心理学会动态、丁香园精神心理、壹心理、简单心理。原订阅地址在部署服务器不可达，保留配置但不抓取。
- **其他 4 条**：Google Research、Import AI、Mistral AI 的现有订阅地址不可达；InfoQ 中国地址虽返回 HTTP 200，正式采集得到的不是可用 RSS 文档。恢复前须在 worker 中完成正式预览与试抓。

## 下一批免费信源：按信号补缺

| 优先级 | 关注信号 | 候选来源（尚未接入） | 推荐接入方式 |
| --- | --- | --- | --- |
| 高 | 中国 AI 监管与产业政策 | 网信办、中国信通院、清华数字产业观察 | 官方 RSS/公开 JSON 优先；没有时用官方公告列表 `web_list` |
| 高 | 心理执业与政策落地 | CPS 注册系统、中国心理卫生协会、国家卫健委、国家心理健康和精神卫生防治中心 | 官方公告列表；核验日期与原文链接 |
| 高 | AI＋心理临床证据 | ClinicalTrials.gov、NICE、APA 的公开材料 | 官方 API/RSS；试验登记与已证实疗效分开标注 |
| 中 | 模型与开源真实热度 | Hugging Face Daily Papers、GitHub Trending、指定项目的 Releases | 官方公开 API 或项目 Releases Atom；Trending 无稳定订阅时才抓网页列表 |
| 中 | AI 商业与资本 | a16z、Sequoia、Menlo Ventures、公司公开财报与 IR | 免费官方研究页、公告 RSS 或公开 JSON |
| 中 | 心理行业经营 | Talkspace、BetterHelp 的公开 IR，平台公开公告 | 公司 IR/公告；市场报告只接免费公开版本 |
| 低 | 科普与访谈 | 《Steve说》、心理科普平台及其他免费播客 | 正规播客 RSS；无文字稿时只做标题和节目简介 |

The Information、Stratechery、收费研究报告和需要付费接口的 X/公众号采集不列为当前免费信源。上表均是候选，不把未验证的网址当成可用订阅。对“模型发布、推理成本、Agent 商业化、融资、算力、监管、临床证据、执业资格、医保支付”的关键消息，优先用官方公告、原始论文、试验登记或财报复核，再让媒体快讯进入精选。
