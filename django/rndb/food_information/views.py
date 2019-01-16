from django.shortcuts import render

import json
import datetime
from django.shortcuts import redirect
from django.shortcuts import render,render_to_response
from django.http import HttpResponse
from django.forms import ModelForm
from django.contrib import auth
from django.contrib.auth.models import User

from food_information.models import food_info
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize,deserialize
from django.db.models.query import QuerySet
from dss.Serializer import serializer

# Create your views here.
def getinfo(request,shopname):
	if request.method == 'GET':
		list=food_info.objects.filter(shop_name__contains=shopname)
		data=serializer(list,output_type='json')
		print(shopname)
		print(data)
		return HttpResponse(data,content_type="application/json")
