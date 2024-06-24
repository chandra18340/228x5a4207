from django.urls import path
from . import views

urlpatterns = [
    # Material Requisition Note
    path("get-products",
         views.getProducts),
]