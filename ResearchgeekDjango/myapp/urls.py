from django.urls import path
from . import views
from .views import assign_doi

urlpatterns = [
    path('', views.index, name='index'),
    path('assign_doi/', assign_doi, name='assign_doi'),
    
]
