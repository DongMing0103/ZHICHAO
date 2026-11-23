# 免费信源接入与校准

当前活跃、暂停与下一批免费候选见 [知潮信源目录](source-catalog.md)。

本站接入免费公开订阅。开放获取期刊可在站内展示文字全文；其他信源只展示摘要和原文链接。`sources.json` 现列出线上 38 条信源快照：5 条开放获取期刊、10 条 OPML 订阅及 23 条既有信源；期刊许可依据见 [全文信源核验](fulltext-source-review.md)。历史信源及文章保留在数据库中；后台启停状态以数据库为准，`seed.ts` 不覆盖已有信源。

下一批非本次 OPML 的候选：InfoQ（采集器取到非 RSS 文档，仍需可用地址）、Hugging Face Daily Papers、GitHub Trending、网信办、信通院、CPS 注册系统、中国心理卫生协会、中科院心理所、国家心理健康和精神卫生防治中心、ClinicalTrials.gov、NIST、WHO 及《Steve说》。这些来源在免费且完成后台试抓后可作为摘要信源接入；只有取得明确的全文转载依据时才打开 `site_fulltext`。公众号订阅仍需核实采集服务和使用条款。

免费快讯与转载稿仅作发现入口。模型发布、政策、临床证据、执业资格、医保和经营数据以原始公告、论文、试验登记或财报确认；注册临床试验不等于疗效已证实。前 5 条期刊源允许站内展示文章文字全文，图片、图表和表格不展示；新增 OPML 源均为 `site_fulltext=false`、`syndicate_fulltext=false`。

精选门槛仍沿用示例起点。上线后用 AI 与心理咨询各自的真实条目建立 100–200 条标注样本，再运行 `node --env-file=.env scripts/eval-selection.ts --gold .data/gold.jsonl` 校准。使用规则、隐私说明与 Logo 仍需站长审核。

## 2026-11-03 OPML 导入状态

10 条均已记入 `sources.json`。部署服务器实测仅开源中国的 RSS 可读取（50 条，均有日期，提供摘要），因此先启用这条综合科技源；其余 9 条分别经 RSSHub 或 Hugging Face 连接超时，先设 `enabled=false`、`participation_mode=isolated`，避免反复抓取失败。Hugging Face 博客与数据库中既有的同地址信源共用同一 ID，不重复创建。

`https://rsshub.app/36kr/newsflashes` 是 36氪综合快讯，`https://www.oschina.net/news/rss` 是开源中国综合新闻，不等同 AI 专题源。后续启用暂停源前，先在部署服务器完成订阅预览，核对原文、日期和相关性，再同时改为 `enabled=true`、`participation_mode=editorial`。RSSHub 能提取全文不等于原站授予本站全文展示权。

## 2026-11-03 历史 RSS 恢复

部署服务器与 worker 容器复核了 32 条暂停 RSS：20 条地址返回可解析的订阅和 HTTP 200，12 条不可达。经站长要求，恢复这 20 条为编辑信源，全部保持 `site_fulltext=false`、`syndicate_fulltext=false`；生产变更通过信源管理函数执行并留审计记录。首次实际采集发现 InfoQ 返回非 RSS 文档，已重新暂停；Google DeepMind 首次超时、第二次成功；arXiv 原 RSS 连续超时，改用经 worker 验证的官方 Atom API 后成功抓取 30 条。最终新增 19 条活跃且实际采集成功的摘要信源。停用的 9 条 OPML 订阅保持暂停。恢复前备份见 `/daimin/logs/2026-11-03-pre-resume-rss-db.dump`。

后台启停不会被 `scripts/seed.ts` 覆盖。恢复的历史信源已写回 `sources.json` 的新库初始清单；现有数据库仍按后台状态运行，重跑 `seed.ts` 不覆盖当前设置。

## 2026-11-04 PLOS 正文修正

PLOS 的 Atom `content` 放的是摘要，不能凭长度标为完整文章。两条 PLOS 信源已设置 `feedContentIsSummary=true`；采集器先保留摘要，再从文章页提取正文。既有 15 篇经审计入口重新提取，样本从 1,746 字补为 72,720 字，全部公开记录继续按来源开放许可展示正文。15 篇已完成模型复审，抓取与公开正文已核对；详见 [许可核验](fulltext-source-review.md)。
