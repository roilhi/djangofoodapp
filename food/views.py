from django.shortcuts import render
from django.http import HttpResponse
from .models import Pizza, Burguer
# Create your views here.
def index(request):
    ctx = {'active_link': 'index'}
    return render(request, 'food/index.html',ctx)
def pizza(request):
    pizzas = Pizza.objects.all()
    ctx = {'pizzas':pizzas, 'active_link': 'pizza'}
    return render(request,'food/pizza.html',ctx)

def burguers(request):
    burguers = Burguer.objects.all()
    ctx = {'burguers':burguers, 'active_link': 'burguer'}
    return render(request,'food/burguers.html',ctx)
