# 可站内展示文章文字全文的信源核验（2026-11-01）

本站只接入免费、能用现有 RSS 采集器读取、且第一方声明允许文章文字转载的来源。下面 5 个源在 2026-11-01 使用 `fetchRss` 获取到 20–30 条记录，并用 `extractFromUrl(..., { paidFallback: false })` 从各源首条文章取得正文。订阅响应和样本不能保证将来每条文章的访问状态不变；后台仍需监测。

| 信源 | 订阅与样本 | 转载许可 |
| --- | --- | --- |
| PLOS Mental Health | [Atom](https://journals.plos.org/mentalhealth/feed/atom?type=published) · [样本](https://journals.plos.org/mentalhealth/article?id=10.1371/journal.pmen.0000712) | [PLOS 内容许可](https://journals.plos.org/mentalhealth/s/content-license)，文章采用 CC BY 4.0 或同等开放许可 |
| PLOS Digital Health | [Atom](https://journals.plos.org/digitalhealth/feed/atom?type=published) · [样本](https://journals.plos.org/digitalhealth/article?id=10.1371/journal.pdig.0001791) | [PLOS 内容许可](https://journals.plos.org/digitalhealth/s/content-license) |
| Frontiers in Artificial Intelligence | [RSS](https://www.frontiersin.org/journals/artificial-intelligence/rss) · [样本](https://www.frontiersin.org/articles/10.3389/frai.2026.1964967) | [Frontiers 政策](https://www.frontiersin.org/about/policies-and-publication-ethics)说明旗下文章按 CC BY 发布 |
| Frontiers in Psychology | [RSS](https://www.frontiersin.org/journals/psychology/rss) · [样本](https://www.frontiersin.org/articles/10.3389/fpsyg.2026.1893830) | 同一 [Frontiers 政策](https://www.frontiersin.org/about/policies-and-publication-ethics) |
| Frontiers in Psychiatry | [RSS](https://www.frontiersin.org/journals/psychiatry/rss) · [样本](https://www.frontiersin.org/articles/10.3389/fpsyt.2026.1945442) | 同一 [Frontiers 政策](https://www.frontiersin.org/about/policies-and-publication-ethics) |

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 要求注明作者、来源、许可与改动。阅读页和 Markdown 导出带作者、原文链接和许可说明；公开正文移除图片、图表、表格和视频，避免将可能有独立权利的素材一并转载。对外全文 RSS 仍关闭。

替换后主要覆盖 AI 前沿研究、数字心理健康与心理学研究。商业融资、中文产业快讯和国内执业政策无法在“整源均可转载全文”的条件下得到原有覆盖；未找到合适授权前，不将免费阅读的媒体内容当作可全文转载内容。
