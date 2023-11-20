from django.shortcuts import render
from django.http import HttpResponse
from .utils import get_data
from django.http import JsonResponse

# Create your views here.


def home(request):
    data = get_data()
    text = request.POST.get('highPrice')
    return render(
        request, 
        'main/example.html', 
        context={
            'data': data,
            }
        )

def get_data_api(request):
    return JsonResponse(get_data())