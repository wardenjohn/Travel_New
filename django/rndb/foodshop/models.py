from django.db import models

# Create your models here.

class foodshop(models.Model):
	location = models.CharField(max_length=50)
	shop_name = models.CharField(max_length=100)
	shop_img_url = models.CharField(max_length=200)

	def __unicode__(self):
		return self.shop_name
