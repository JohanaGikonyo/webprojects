from django.shortcuts import render
from django.urls import Httpresponse
# Create your views here.
def index(request):
    return Httpresponse("hi")