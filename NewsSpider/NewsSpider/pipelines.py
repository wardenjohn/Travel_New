# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import pymysql
from NewsSpider import settings
from logging import log

class NewsspiderPipeline(object):
    def process_item(self, item, spider):
        return item

# class DBspiderpipeline(object):
#     def __init__(self):
#         self.connect = pymysql.connect(
#             host=settings.MYSQL_HOST,
#             port=3306,
#             db=settings.MYSQL_DBNAME,
#             user=settings.MYSQL_USER,
#             passwd=settings.MYSQL_PASSWD,
#             charset='utf8',
#             use_unicode=True
#         )
#         self.cursor=self.connect.cursor()
#
#     def process_item(self,item,spider):
#         title=item['title']
#         try:
#             #检查该元素是否以存在在数据库
#             self.cursor.execute(
#                 "select title from news where title ='{}'".format(title)
#             )
#             repetiton=self.cursor.fetchone()
#             if repetiton:
#                 pass
#             else:
#                 self.cursor.execute(
#                     "insert into news(title,author,release_time,excerpt,content,img_url) values ('{}','{}','{}','{}','{}','{}')".format(
#                        item['title'],item['author'],item['release_time'],item['excerpt'],item['content'],item['img_url']
#                     )
#                 )
#                 self.connect.commit()
#         except Exception as error:
#             # 出现错误时打印错误日志
#             log(error)
#         return item
