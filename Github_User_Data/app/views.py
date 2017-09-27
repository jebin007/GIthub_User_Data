from django.shortcuts import render, HttpResponse
import requests
import json

#Create your views here.

def index(request):
    return HttpResponse('Hello World!')

def test(request):
    return HttpResponse('My Second View!')

def profile(request):
    req = requests.get('https://api.github.com/users/DrkSephy')
    content = req.text
    return HttpResponse(content)