from django.db import models

# Create your models here.
class estimate(models.Model):
	userid=models.IntegerField()
	foodshopid=models.IntegerField()
	foodshopname=models.CharField(max_length=100)
	loginname=models.CharField(max_length=100)
	time=models.CharField(max_length=20)
	markContent=models.TextField()
	serverScore=models.IntegerField()
	envirScore=models.IntegerField()
	tasteScore=models.IntegerField()
	avgScore=models.IntegerField()

	def __unicode__(self):
		return self.foodshopid
