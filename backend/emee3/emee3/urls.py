# emee3/urls.py
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Add the root URL mapping
    path('admin/', admin.site.urls),
    path('api/', include('employees.urls')),
]
