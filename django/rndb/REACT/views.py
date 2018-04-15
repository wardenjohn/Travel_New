#coding:utf-8
from django.shortcuts import render
import json
from django.shortcuts import redirect
from django.shortcuts import render,render_to_response
from django.http import HttpResponse
from django.forms import ModelForm
from django.contrib import auth
from django.contrib.auth.models import User

from REACT.models import OfficeWeb
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize,deserialize
from django.db.models.query import QuerySet
from dss.Serializer import serializer
# Create your views here.

def getofficeweb(request,place):
	if request.method == 'GET':
		print(place)
		list=OfficeWeb.objects.filter(place=place)
		#list=OfficeWeb.objects.all()
		print(list)
		data=serializer(list,output_type = 'json')
		return HttpResponse(data,content_type="application/json")
