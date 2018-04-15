#coding:utf-8
from django.shortcuts import render
import json
from django.shortcuts import redirect
from django.shortcuts import render,render_to_response
from django.http import HttpResponse
from django.forms import ModelForm
from django.contrib import auth
from django.contrib.auth.models import User

from userdb.models import Users
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize,deserialize
from django.db.models.query import QuerySet
from dss.Serializer import serializer

# Create your views here
@csrf_exempt
def getuser(request):
	if request.method == 'POST':
		name=request.POST['loginname']		
		pwd=request.POST['password']
		try:
			unit=Users.objects.filter(username=name)
		except Exception as err:
			print(err)
		
		if unit:		
			if unit[0].password == pwd:
				data={'valid':1,'id':unit[0].id}
			else:
				data={'valid':0}
		ret=serializer(data,output_type = 'json')
		return HttpResponse(ret,content_type="application/json")


@csrf_exempt
def reg(request):
	if request.method == 'POST':
		name = request.POST['loginname']
		pwd = request.POST['password']
		check=Users.objects.filter(username=name)
		if check:
			data='username conflict'
		else:
			Users.objects.create(username=name,password=pwd,nickname="Node",introduce="None",sex=0,city="None")
			data='Succeeded!'
		return HttpResponse(json.dumps(data))

@csrf_exempt
def infomation(request,uid):
	if request.method == 'POST':
		nickname=request.POST['nickname']
		introduce=request.POST['introduce']
		sex=request.POST['sex']
		city=request.POST['city']
		unit=Users.objects.get(id=uid)
		unit.nickname=nickname
		unit.sex=sex
		unit.introduce=introduce
		unit.city=city
		unit.save()
		
		res='succeeded!'
		return HttpResponse(json.dumps(res))
	else:
		unit=Users.objects.get(id=uid)
		data=serializer(unit,output_type='json')
		return HttpResponse(data,content_type="application/json")
