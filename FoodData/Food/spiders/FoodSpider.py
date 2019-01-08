# -*- coding: utf-8 -*-
import scrapy

from Food.items import BasicItem
from Food.items import InformationItem

class FoodSpider(scrapy.Spider):
	name = "food"

	def __init__(self):
		self.start_urls = ["http://www.dianping.com/beijing/ch10/r14"]
		#反爬代理
		headers = {'User-Agent': "your agent string"}
		allowed_domains = ["www.dianping.com"]

	def start_requests(self):
		yield scrapy.Request(url=self.start_urls[0], callback=self.getContent)

	def getContent(self, response):
		item = BasicItem()
		res = response.xpath('//div[@id="shop-all-list"]/ul/li')
		count = 0 
		counter = 1
		for each in res:
			name = each.xpath('//div[2]/div/a/h4/text()').extract()
			name1 = name[count]
			name1 = "".join(name1).replace('\'','')

			#url2 = each.xpath('//div[2]/div/a/@href').extract()

			url = response.xpath('//div/a/img/@src').extract()
			url1 = url[count]
			
			item['Iid'] = counter
			item['Name'] = name1
			item['Picture'] = url1
			item['Location'] = '北京市朝阳区'

			count += 1
			counter += 1
			yield item




