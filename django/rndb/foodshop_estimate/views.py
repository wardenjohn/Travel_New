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

from foodshop_estimate.models import estimate
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize,deserialize
from django.db.models.query import QuerySet
from dss.Serializer import serializer
# Create your views here.

@csrf_exempt
def user_post(request):
	if request.method == 'POST':
		now = datetime.datetime.now()
		uptime=str(now)
		uptime=uptime[0:16]
		uid=request.POST['userid']
		foodshop_id=request.POST['foodshop_id']
		name=request.POST['foodshop_name']
		logname=request.POST['loginname']
		mark_Content=request.POST['markContent']
		envir_Score=request.POST['envirScore']
		servescore=request.POST['serveScore']
		taste=request.POST['tasteScore']
		avgs=0
			
		try:
			estimate.objects.create(userid=uid,foodshopid=foodshop_id,foodshopname=name,loginname=logname,time=uptime,markContent=mark_Content,serverScore=servescore,envirScore=envir_Score,tasteScore=taste,avgScore=avgs)
		
		except Exception as error:
			print(foodshopid)
			print(error)
		
		data='Succeeded!!'
		
		return HttpResponse(json.dumps(data))


def get_mark_byID(request,shopid):
	if request.method == 'GET':
		list=estimate.objects.filter(foodshopid=shopid)
		data=serializer(list,output_type='json')
		return HttpResponse(data,content_type="application/json")

def score(request,sid):
	if request.method == 'GET':
		list=estimate.objects.filter(foodshopid=sid)
		avgserver=0
		avgenvir=0
		avgtaste=0
		total=0.0
		
		if list:
			for one in list:
				avgserver += one.serverScore
				avgenvir += one.envirScore
				avgtaste += one.tasteScore
			
			total = len(list)
			avgserver = avgserver/total
			avgenvir = avgenvir/total
			avgtaste = avgtaste/total
			avgtotal = (avgserver+avgenvir+avgtaste)/3
		else:
			total=0
			avgserver=0
			avgenvir=0
			avgtaste=0
		res={'avgtotal':total,'avgserver':avgserver,'avgenvir':avgenvir,'avgtaste':avgtaste,'people':len(list)}

		data=serializer(res,output_type='json')
		return HttpResponse(data,content_type="application/json")
