# employees/models.py
from django.db import models

class Employee(models.Model):
    ROLE_CHOICES = [
        ('manager', 'Manager'),
        ('cashier', 'Cashier'),
    ]

    username = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    contactNumber = models.CharField(max_length=15)
    role = models.CharField(max_length=25, choices=ROLE_CHOICES)  # Use choices for role

    def __str__(self):
        return self.name
