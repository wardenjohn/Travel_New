from django.db import models

# Create your models here.
class food_info(models.Model):
	shop_name = models.CharField(max_length=100)
	per_expense = models.CharField(max_length=5)
	location = models.CharField(max_length=150)
	tel = models.CharField(max_length=20)
	opentime = models.TextField()
	dish_pic_url = models.CharField(max_length=200)
	dish_name = models.CharField(max_length=100)

	def __unicode__(self):
		return self.shop_name
