# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html


# class FoodPipeline(object):
#     def process_item(self, item, spider):
#         return item

#mysql版本
import pymysql
 
class FoodPipeline(object):
    # open_spider()和close_spider()：只在爬虫被打开和关闭时，执行一次。
    def open_spider(self, spider):
        self.connect = pymysql.connect(
            host='localhost',
            user='root',
            port=3306,
            passwd='123456',
            db='foodapp',
            charset='utf8'
        )
        self.cursor = self.connect.cursor()
 
    def process_item(self, item, spider):
        if item['ChooseID']==1:
            insert_sql = "INSERT INTO basic(Iid, Name, Picture, Location) VALUES (%s, %s, %s, %s)"
            self.cursor.execute(insert_sql, (
            item['Iid'], item['Name'], item['Picture'], item['Location']))
            self.connect.commit()
        else:
            insert_sql = "INSERT INTO information(Name, Expense, Location, Telephone, Time, Speciality, SpeName) VALUES (%s, %s, %s, %s, %s, %s, %s)"
            self.cursor.execute(insert_sql, (
            item['Name'], item['Expense'], item['Location'], item['Telephone'], item['Time'], item['Speciality'], item['SpeName']))
            self.connect.commit()
        
    def close_spider(self, spider):
        self.cursor.close()
        self.connect.close()




#SQL Server版本

# import pyodbc

# class FoodPipeline(object):
# 	def __init__(self):
# 		self.conn = pyodbc.connect(r'DRIVER={SQL Server};SERVER=ASUS-PC\SQLEXPRESS;DATABASE=FoodApp;UID=sa;PWD=123456')

# 	def open_spider(self, spider):
# 		self.cursor = self.conn.cursor()

# 	def close_spider(self, spider):
# 		self.cursor.close()
# 		self.conn.close()

# 	def process_item(self, item, spider):
# 		self.cursor.execute(
# 			"""
# 			insert into FoodApp.dbo.Basic(Name, Picture) values(?,?)
# 			""",(item['Name'], item['Picture']))
# 		self.conn.commit()
# 		return item