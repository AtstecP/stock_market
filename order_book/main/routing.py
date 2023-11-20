# your_project/routing.py
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.urls import re_path
from main import consumers

# application = ProtocolTypeRouter({
#     "websocket": AuthMiddlewareStack(
#         URLRouter([
#             path("ws/some_path/", consumers.YourConsumer.as_asgi()),
#         ])
#     ),
# })
websoket_urlpatterns = [
    re_path(r'ws/some_path/', consumers.YourConsumer.as_asgi())
]