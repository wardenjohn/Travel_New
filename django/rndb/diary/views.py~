#coding:utf-8
from django.shortcuts import render
import json
import datetime
from django.shortcuts import redirect
from django.shortcuts import render,render_to_response
from django.http import HttpResponse
from django.forms import ModelForm
from django.contrib import auth
from django.contrib.auth.models import User

from diary.models import diary
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize,deserialize
from django.db.models.query import QuerySet
from dss.Serializer import serializer
# Create your views here.

@csrf_exempt
def pushDiary(request):
	if request.method == 'POST':
		uid=request.POST['userid']
		uname=request.POST['username']
		text=request.POST['content']
		texttitle=request.POST['title']
		now=datetime.datetime.now()
		uptime=str(now)
		uptime=uptime[0:16]
		diary.objects.create(userid=uid,username=uname,content=text,title=texttitle,time=uptime)
		data='succeeded!'
		return HttpResponse(json.dumps(data))

def getDiary(request,uid):
	if request.method == 'GET':
		list=diary.objects.filter(userid=uid)
		data=serializer(list,output_type='json')
		return HttpResponse(data,content_type="application/json")		
