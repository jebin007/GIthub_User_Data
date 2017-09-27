from django.shortcuts import render, HttpResponse

#Create your views here.

def index(request):
    return HttpResponse('Hello World!')

def test(request):
    return HttpResponse('My Second View!')