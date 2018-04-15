from django.db import models

# Create your models here.
class news(models.Model):
	title=models.CharField(max_length=100)
	author=models.CharField(max_length=100)
	release_time=models.CharField(max_length=100)
	excerpt=models.CharField(max_length=200)
	content=models.TextField()
	img_url=models.CharField(max_length=200)

	def __unicode__(self):
		return self.title
