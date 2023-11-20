from django.urls import path
from . import views
from django.urls import path
from django.urls import include

urlpatterns = [
    path('', views.home),
    path('get_data_api', views.get_data_api),
]

# websocket_urlpatterns = [
#     path('ws/some_path/', consumers.YourConsumer.as_asgi()),
# ]