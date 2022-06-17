from django.contrib import admin
from .models import Pizza, Burguer
# Register your models here.
#admin.site.register(Pizza)

class PizzaAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')
admin.site.register(Pizza,PizzaAdmin)
class BurguerAdmin(admin.ModelAdmin):
    list_display = ('name', 'priceM', 'priceL')
admin.site.register(Burguer,BurguerAdmin)