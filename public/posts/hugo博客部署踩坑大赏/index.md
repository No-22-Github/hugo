# Hugo博客部署踩坑大赏

# 1.文章题头图不显示
## 表现  
在 featuredImage 和 featuredImagePreview 中设置了路径，但是没有显示出来  
## 解决办法
* 先检查自己的文章头有没有设置好，理论上在`site_name\archetypes\default.md`中应该有这样的文本:
```
---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
subtitle: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
author: ""
authorLink: ""
license: ""

tags: [""]
categories: [""]

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
```
  * 然后看看 
 
``````
featuredImage: ""  
featuredImagePreview: ""
``````

这两个的路径有没有写对，如果不使用图床，那么图片应该放在根目录的static文件夹里面，路径改为："/your_picture.jpg"
>啊啊，说实话放在文佳夹里调用好麻烦的，不如搞个图床
# 2.评论区没有加载出来
## 表现
用Giscus做评论区，但是配置好各种东西之后，没有出现评论区
## 解决
在 [LoveIt](https://github.com/dillonzq/LoveIt) 的github页面直接clone源代码，不要用release里面的  
而且本地调试是看不见评论区的，要push到服务器上再看看。  
# To Be Continue
