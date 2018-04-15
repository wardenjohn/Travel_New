#!/usr/bin/env python
#coding:utf-8
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE","rndb.settings")

import django
if django.VERSION >= (1,7):
	django.setup()


def main():
	from REACT.models import OfficeWeb
	f=open("test.txt")
	for record in f:
		name,url,place= record.split(' ')
		OfficeWeb.objects.create(webname=name,url=url,place=place)
	f.close()

if __name__ == "__main__":
	main()
	print("hello")
