""" URLs module."""

from django.urls import path

from Proyecto21dias import views


def hello_world(request):
    """Return a greeting."""
    return HttpResponse('Hello, world!')


urlpatterns = [

    path('hello-world/', hello_world)

]
