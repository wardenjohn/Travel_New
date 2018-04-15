from django.db import models

# Create your models here.
class scenic(models.Model):
	name=models.CharField(max_length=200)
	img_url=models.CharField(max_length=200)
	remark=models.CharField(max_length=200)
	area=models.CharField(max_length=200)
	address=models.CharField(max_length=200)
	introduce=models.TextField()
	opentime=models.TextField()
	tips=models.TextField()
	transfer=models.TextField()

	def __unicode__(self):
		return self.name
