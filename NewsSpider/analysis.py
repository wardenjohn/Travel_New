from snownlp import SnowNLP
from NewsSpider import settings
import pymysql

class  textAnalysis:
    #初始化时连接数据库，分析时从数据库中取出正文进行分析
    def __init__(self):
        self.connect=pymysql.connect(
            host=settings.MYSQL_HOST,
            port=3306,
            db=settings.MYSQL_DBNAME,
            user=settings.MYSQL_USER,
            passwd=settings.MYSQL_PASSWD,
            charset='utf8',
            use_unicode=True
        )
        self.cursor=self.connect.cursor()
        for data in self.getRawData():
            newsid,emotion=self.operation(data)
            # self.update(newsid,emotion)
            # print(data)

    #获得原始数据
    def getRawData(self):
        self.cursor.execute('select id,title from news where nature = 0')
        return self.cursor.fetchall()

    #进行分析
    def operation(self,data):
        # print(data)
        newsid=data[0]
        content=''.join(data[1:])
        # print(newsid,content)
        s=SnowNLP(content)
        emotion=s.sentiments
        print(newsid,emotion)
        return (newsid,emotion)

    #更新数据库
    def update(self,newsid,emotion):
        if emotion>0.5:
            emotion=1
        else:
            emotion=0
        self.cursor.execute(
            'update news set emotion = {} where id = {}'.format(emotion, newsid)
        )
        self.connect.commit()


if __name__ == '__main__':
    textAnalysis()


