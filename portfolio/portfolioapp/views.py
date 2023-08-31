from django.shortcuts import render
from .models import Contact
from django.http import HttpResponse
from django.contrib import messages
# Create your views here.

def home(request):
    if request.method == "POST":
        name=request.POST['name']
        email=request.POST['email']
        subject=request.POST['subject']
        msg=request.POST['msg']
        data=Contact(name=name,email=email,subject=subject,msg=msg)
        data.save()
         
        if data.name != '':
            messages.success(request, f"{data.name} Your message sent successfully!!!")
    return render(request,"index.html")