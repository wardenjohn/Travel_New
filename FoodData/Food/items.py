# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy

#基础页面表
class BasicItem(scrapy.Item):
	Iid = scrapy.Field()			  #ID号
	Name = scrapy.Field()             #店名
	Picture = scrapy.Field()          #店铺图片(URL链接)
	Location = scrapy.Field()         #城市

#基本信息表
class InformationItem(scrapy.Item):
    Name = scrapy.Field()             #店名
    Expense = scrapy.Field()          #人均消费
    Location = scrapy.Field()         #地理位置
    Telephone = scrapy.Field()        #订餐电话
    Time = scrapy.Field()             #营业时间
    Speciality = scrapy.Field()       #特色菜图片(URL链接)
    SpeName = scrapy.Field()          #特色菜名字
    
