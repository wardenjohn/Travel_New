from django.db import models

# Create your models here.
class diary(models.Model):
	userid=models.IntegerField()
	username=models.CharField(max_length=20)
	content=models.TextField()
	title=models.CharField(max_length=50)
	time=models.CharField(max_length=20)
	def __unicode__(self):
		return self.username
