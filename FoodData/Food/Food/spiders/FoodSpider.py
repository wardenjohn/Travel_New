# -*- coding: utf-8 -*-
import scrapy


from Food.items import BasicItem
from Food.items import InformationItem


class FoodSpider(scrapy.Spider):
	name = "food"

	def __init__(self):
		self.start_urls = ["http://www.dianping.com/beijing/ch10/r14",
							"http://www.dianping.com/tianjin/ch10/r51",
							"http://www.dianping.com/shanghai/ch10/r2",
							"http://www.dianping.com/jinan/ch10/r151",
							"http://www.dianping.com/shijiazhuang/ch10"]
		#反爬代理
		allowed_domains = ["www.dianping.com"]
		self.counter = 0

	def function(self, response):
		item1 = InformationItem()
		with open('Data.txt','r+') as file:
			for line in file:
				data = line.split('#')
				item1['ChooseID'] = 2
				item1['Name'] = data[0]
				item1['Expense'] = data[1]
				item1['Location']  = data[2]
				item1['Telephone'] = data[3]
				item1['Time'] = data[4]
				item1['Speciality'] = data[5]
				item1['SpeName'] = data[6]
				yield item1

	def start_requests(self):
		yield scrapy.Request(url=self.start_urls[0], callback=self.function)
		for i in range(5):
			yield scrapy.Request(url=self.start_urls[i], callback=self.getContent)


	def getContent(self, response):
		item = BasicItem()
		Location = response.xpath('//a[@class="city J-city"]/span[2]/text()').extract()
		res = response.xpath('//div[@id="shop-all-list"]/ul/li')
		count = 0
		for each in res:
			name = each.xpath('//div[2]/div/a/h4/text()').extract()
			name1 = name[count]
			name1 = "".join(name1).replace('\'','')

			#url2 = each.xpath('//div[2]/div/a/@href').extract()

			url = each.xpath('//div/a/img/@src').extract()
			url1 = url[count]

			item['ChooseID'] = 1
			item['Iid'] = self.counter
			item['Name'] = name1
			item['Picture'] = url1
			item['Location'] = Location

			count += 1
			self.counter += 1
			yield item
	
