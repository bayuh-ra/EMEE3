# emee3/views.py
from django.shortcuts import redirect

def home(request):
    return redirect('/api/employees/')  # Redirect to your employee API
