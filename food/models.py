from django.db import models

# Create your models here.
class Pizza(models.Model):
    name = models.CharField(max_length=120)
    priceM = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    priceL = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    pImage = models.URLField(max_length=255, default='')
class Burguer(models.Model):
    name = models.CharField(max_length=120)
    priceM = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    priceL = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    bImage = models.URLField(max_length=255, default='')

