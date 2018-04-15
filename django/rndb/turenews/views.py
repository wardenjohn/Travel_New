#coding:utf-8
from django.shortcuts import render
import json
from django.shortcuts import redirect
from django.shortcuts import render,render_to_response
from django.http import HttpResponse
from django.forms import ModelForm
from django.contrib import auth
from django.contrib.auth.models import User

from turenews.models import news
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize,deserialize
from django.db.models.query import QuerySet
from dss.Serializer import serializer
# Create your views here.

def getnews(request):
	if request.method == 'GET':
		list=news.objects.all()
		data=serializer(list,output_type='json')
		return HttpResponse(data,content_type="application/json")
 
def getnewsbyID(request,nid):
	if request.method == 'GET':
		unit=news.objects.filter(id=nid)
		data=serializer(unit,output_type='json')
		return HttpResponse(data,content_type="application/json")


def getnewsByKey(request,key):
	if request.method == 'GET':
		list=news.objects.filter(title__contains=key)
		data=serializer(list,output_type='json')
		return HttpResponse(data,content_type="application/json")
