# ConvertPic 营销物料包

> 以下所有文案已写好，你只需要复制粘贴到对应平台即可。

---

## 1. Reddit 帖子

### 帖子 A - r/webdev

**标题：** I built a privacy-first image converter that works 100% in your browser (no upload to any server)

**正文：**
```
Hey everyone,

I was frustrated with online image converters that require uploading files to their servers. I have sensitive photos and documents that I don't want sitting on someone else's computer.

So I built ConvertPic - a free image converter where ALL processing happens in your browser. Your files literally never leave your device.

Currently supports:
- AVIF to PNG
- WebP to PNG  
- HEIC to JPG (iPhone photos)

Tech stack: Next.js, pure client-side Canvas API, deployed on Vercel.

Key differentiator: Zero server processing. The conversion uses your browser's built-in Canvas API and the heic2any library. You can even use it offline after the page loads.

Try it: [URL]

I'd love feedback on:
- What other format conversions would be useful?
- Any UX improvements?
- Performance on large files?

Source is open if anyone wants to see how browser-based conversion works.
```

---

### 帖子 B - r/iphone

**标题：** Free tool to convert HEIC photos to JPG without uploading to any server (privacy-first)

**正文：**
```
If you've ever tried to share iPhone photos with Windows/Android users, you know the HEIC compatibility struggle.

I built a free converter that:
- Converts HEIC → JPG instantly
- Works 100% in your browser (no file upload)
- Supports batch conversion (multiple files at once)
- No signup, no watermark, no limits

Your photos never leave your device. All processing happens locally.

[URL]

Hope this helps someone! Let me know if you run into any issues.
```

---

### 帖子 C - r/privacy

**标题：** I built an image converter that processes files entirely client-side - zero server contact

**正文：**
```
Most online file converters upload your images to their servers for processing. That means your personal photos, documents, screenshots are stored (temporarily or permanently) on someone else's infrastructure.

I built ConvertPic as a privacy-first alternative:
- ALL conversion happens in the browser using Canvas API
- Zero network requests during conversion (you can verify in DevTools)
- No cookies, no tracking, no analytics
- Works offline after initial page load
- GDPR compliant by architecture (not just policy)

Supports AVIF→PNG, WebP→PNG, HEIC→JPG.

[URL]

The entire approach is transparent - check the Network tab in DevTools while converting. You'll see zero outbound requests with your file data.

Feedback welcome, especially from a security/privacy perspective.
```

---

## 2. Product Hunt 发布文案

**Product Name:** ConvertPic

**Tagline:** Convert images in your browser. Files never leave your device.

**Description:**
```
ConvertPic is a free, privacy-first image converter that processes files entirely in your browser.

Unlike traditional online converters that upload your files to remote servers, ConvertPic uses modern browser APIs (Canvas API + heic2any) to convert images locally on your device.

🔒 Privacy First
Your files never leave your device. Zero server processing, zero data collection.

⚡ Instant Conversion  
No upload/download time. Conversion happens in milliseconds.

🎯 Formats Supported
- AVIF to PNG
- WebP to PNG/JPG  
- HEIC to JPG (iPhone photos)

💰 Free Forever
No signup, no limits, no watermarks. Just drag, convert, download.

Built with Next.js and deployed on Vercel. Works offline after initial load.
```

**First Comment (Maker Comment):**
```
Hey Product Hunt! 👋

I built ConvertPic because I was tired of uploading my personal photos to random converter websites.

The core idea is simple: if a conversion can happen in the browser, it should happen in the browser. No reason to send your files to a server.

Current supported formats:
- AVIF → PNG (for the new format nobody can open yet)
- WebP → PNG (for designers who need editable files)
- HEIC → JPG (for iPhone users sharing with everyone else)

What format conversions would you like to see next? I'm planning to add:
- SVG to PNG
- PNG to ICO (favicon)
- Image compression

Would love your feedback! 🙏
```

---

## 3. 工具目录提交列表

以下目录网站可免费提交你的工具（每个提交约1-2分钟）：

| # | 网站 | URL | 说明 |
|---|------|-----|------|
| 1 | Product Hunt | producthunt.com | 需提前注册账号 |
| 2 | There's An AI For That | theresanaiforthat.com | AI工具目录 |
| 3 | AlternativeTo | alternativeto.net | 标注为 CloudConvert 替代品 |
| 4 | Toolify | toolify.ai | AI/工具目录 |
| 5 | SaaSHub | saashub.com | SaaS产品目录 |
| 6 | BetaList | betalist.com | 新产品发布 |
| 7 | Launching Next | launchingnext.com | 新产品目录 |
| 8 | SideProjectors | sideprojectors.com | 副项目展示 |
| 9 | Uneed | uneed.best | 工具发现平台 |
| 10 | StartupBase | startupbase.io | 创业产品目录 |
| 11 | MicroLaunch | microlaunch.net | 微产品发布 |
| 12 | Indie Hackers | indiehackers.com/products | 独立开发者社区 |
| 13 | Hacker News (Show HN) | news.ycombinator.com | 标题格式: "Show HN: ConvertPic..." |
| 14 | Dev.to | dev.to | 写技术文章介绍 |
| 15 | Free For Dev | free-for.dev | 提交PR到GitHub仓库 |

**提交时统一使用的描述：**
```
ConvertPic - Free privacy-first image converter. Convert AVIF, WebP, HEIC files in your browser. Files never leave your device. No signup, no limits.
```

---

## 4. Hacker News (Show HN)

**标题：** Show HN: ConvertPic – Browser-based image converter, files never leave your device

**正文：**
```
I built a privacy-first image converter that does all processing client-side.

Motivation: Most online converters upload files to their servers. For personal photos and sensitive documents, that's unnecessary risk.

Technical approach:
- Canvas API for AVIF/WebP → PNG/JPG conversion
- heic2any (WASM-based) for HEIC decoding
- Next.js static export, hosted on Vercel
- Zero API calls during conversion

Currently supports: AVIF→PNG, WebP→PNG, HEIC→JPG

[URL]

Curious if others see value in this approach vs. server-side conversion. The tradeoff is that very large files (100MB+) might be slow on lower-end devices, but for typical photos (1-20MB) it's instant.
```

---

## 5. Twitter/X Build in Public 帖子

**Launch tweet:**
```
Just shipped ConvertPic 🚀

A free image converter where your files NEVER leave your device.

✅ AVIF → PNG
✅ WebP → PNG  
✅ HEIC → JPG

100% browser-based. No upload. No signup. No BS.

Most converters upload your personal photos to their servers. Why? The browser can handle it.

Try it: [URL]
```

**Follow-up thread:**
```
How I built it:

1/ Chose formats with highest search demand + weakest existing tools (AVIF is still poorly served)

2/ Used Canvas API for WebP/AVIF conversion - literally 20 lines of code

3/ heic2any library for HEIC (Apple's format needs special decoding)

4/ Next.js static site → Vercel free tier = $0/month hosting

Total cost to run: $0.75/month (just the domain)

Building in public. Will share traffic/revenue numbers as they come.
```

---

## 6. 执行时间表

| 时间 | 动作 | 预计耗时 |
|------|------|----------|
| 今晚 | 部署到 Vercel | 10分钟 |
| 明天上午 | 发 Reddit 帖子（选1-2个版块） | 5分钟 |
| 明天下午 | 发 Twitter launch tweet | 2分钟 |
| 本周三 | 提交 Product Hunt | 10分钟 |
| 本周内 | 提交 5-10 个工具目录 | 20分钟 |
| 下周 | 发 Hacker News Show HN | 5分钟 |

**总计额外时间投入：~50分钟（分散在一周内）**
