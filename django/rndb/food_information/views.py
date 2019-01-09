from django.shortcuts import render

import json
from django.shortcuts import redirect
from django.shortcuts import render,render_to_response
from django.http import HttpResponse
from django.forms import ModelForm
from django.contib import auth
from django.contib.auth.models import User

from food_information import food_info
from django.view.decorators.csrf import csrf_exempt
from django.core.serializers import serialize,deserialize
from django.db.models.query import QuerySet
from dss.Serializer import serializer

# Create your views here.

