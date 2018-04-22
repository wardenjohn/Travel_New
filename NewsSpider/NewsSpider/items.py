# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

from scrapy import Item,Field


class NewsspiderItem(Item):
    title = Field()#新闻标题
    author = Field()#作者
    release_time = Field()#发布时间
    excerpt = Field()#摘要
    content=Field()#正面
    img_url=Field()#图片链接
