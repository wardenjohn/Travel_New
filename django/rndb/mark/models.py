from django.db import models

# Create your models here.
class marktable(models.Model):
	userid=models.IntegerField()
	scenicid=models.IntegerField()
	scenicname=models.CharField(max_length=100)
	loginname=models.CharField(max_length=100)
	time=models.CharField(max_length=20)
	markContent=models.TextField()
	serveScore=models.IntegerField()#5 is full
	envirScore=models.IntegerField()
	plauScore=models.IntegerField()
	avgScore=models.IntegerField()

	def __unicode__(self):
		return self.scenicid
