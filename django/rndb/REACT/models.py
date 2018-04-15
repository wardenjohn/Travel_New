from django.db import models

# Create your models here.
class OfficeWeb(models.Model):
	webname=models.CharField(max_length=100)
	url=models.CharField(max_length=200)
	place=models.CharField(max_length=20)	
	def __unicode__(self):
		return self.webname
