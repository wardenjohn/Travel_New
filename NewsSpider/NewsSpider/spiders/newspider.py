# -*- coding: utf-8 -*-
import scrapy
from scrapy import Spider, Request
import requests
import lxml.html
from NewsSpider.items import NewsspiderItem

# beginTime=input("请输入开始时间(格式为年-月-日):")
# endTime=input("请输入结束时间(格式为年-月-日):")
keyword="旅游"

beginTime='2016-1-1'
endTime='2018-4-9'
startPage=0

URL = 'http://sou.chinanews.com.cn/search.do?q={q}&day1={day1}&day2={day2}&start={start}&field=title&channel=cul&ps=20'

class NewspiderSpider(scrapy.Spider):
    name = 'newspider'
    allowed_domains = ['chinanews.com']
    page=startPage
    start_urls = [URL.format(q=keyword,day1=beginTime,day2=endTime,start=page*20)]
    end=False
    flag=set()
    def parse(self, response):
        res=response.xpath('//div[@id="news_list"]/table')
        if len(res)==0:
            self.end=True
            return

        for each in res:
            title=each.xpath('tr/td/ul/li[@class="news_title"]/a//text()').extract()
            title=''.join(title)
            if title in self.flag:
                self.end=True
                return
            self.flag.add(title)

            author='中新网'

            ans=each.xpath('tr/td/ul/li[@class="news_other"]/text()').extract_first().split()
            release_time=ans[1]+" "+ans[2]

            excerpt=each.xpath('tr/td/ul/li[@class="news_content"]//text()').extract()
            excerpt=''.join(excerpt).replace('    ','').replace('\r','').replace('\t','').replace('\n','')
            excerpt=excerpt.lstrip().replace(' ','')

            #排除发现中新网的搜索结果显示界面和新闻显示界面编码不同
            url=ans[0]
            html=requests.get(url).content.decode('GBK')
            selector = lxml.html.document_fromstring(html)
            content=selector.xpath('//p//text()')
            content=''.join(content).replace('\'','')
            content.encode('utf-8')

            img_url=each.xpath('tr/td/a/img[@class="rsimg"]/@src').extract()
            img_url=''.join(img_url)
            #设置默认图片
            if img_url=="":
                img_url='http://seopic.699pic.com/photo/50045/7863.jpg_wh1200.jpg'
            else:
                img_url=img_url


            item=NewsspiderItem()
            item['title'] = title
            item['author'] = author
            item['release_time'] = release_time
            item['excerpt'] = excerpt
            item['content']=content
            item['img_url']=img_url
            yield item

        if not self.end:
            self.page=self.page+1
            # print(URL.format(day1=beginTime,day2=endTime,start=self.page*20))
            yield Request(URL.format(q=keyword,day1=beginTime,day2=endTime,start=self.page*20),self.parse,dont_filter=True)
