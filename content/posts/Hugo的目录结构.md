---
title: "Hugo的目录结构"
subtitle: ""
date: 2024-06-28T23:58:55+08:00
lastmod: 2024-06-28T23:58:55+08:00
draft: true
author: ""
authorLink: ""
license: ""

tags: ["hugo"]
categories: ["博客,笔记"]

featuredImage: ""
featuredImagePreview: ""

summary: ""

hiddenFromHomePage: false
hiddenFromSearch: false

toc:
  enable: true
  auto: true

mapbox:
share:
  enable: true
comment:
  enable: true
---
Hugo有一套完整的目录体系，但是我记不住，现在整理一下传上来
## 目录结构

```
Hugo
├── archetypes                      内容模版目录
│   └── default.md                  模版文件
├── config.toml                     配置文件
├── content                         内容目录
├── data                            数据目录
├── layouts                         网站模版目录
├── static                          静态文件目录
└── themes                          主题目录
    └── hyde                        Hyde主题目录
        ├── CHANGELOG.md            
        ├── LICENSE.md              
        ├── README.md
        ├── archetypes              内容模版
        │   └── default.md
        ├── go.mod
        ├── images
        │   ├── screenshot.png
        │   └── tn.png
        ├── layouts                 网站模版
        │   ├── 404.html            404面目模版
        │   ├── _default            默认模版目录
        │   │   ├── baseof.html     基础模版
        │   │   ├── list.html       列表页面模版
        │   │   └── single.html     单页面模版
        │   ├── index.html          首页模版
        │   └── partials            模块模版目录
        │       ├── head.html       HEAD模块模版
        │       ├── head_fonts.html
        │       ├── hook_head_end.html
        │       └── sidebar.html
        ├── static                  静态目录
        │   ├── apple-touch-icon-144-precomposed.png
        │   ├── css
        │   │   ├── hyde.css
        │   │   ├── poole.css
        │   │   ├── print.css
        │   │   └── syntax.css
        │   └── favicon.png
        └── theme.toml              主题配置文件
```

### archetypes 

内容模版目录，通过内容模版，使用hugo new命令创建新的内容文件

而default.md就是新建的md文件的开头可以设置的内容模版

```
---
title: ”{{ replace .Name “-” “ ” | title }}“
date: {{ .Date }}
categories: 
        - No.22
tags: 
        - No.22
---
```

