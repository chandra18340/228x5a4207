from django.shortcuts import render

# Create your views here.
import requests
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage


@api_view(["GET"])
@csrf_exempt
def getProducts(request):
    try:
        company_name = request.GET["company_name"]
        if not company_name:
            raise KeyError("company_name")
        category_name = request.GET["category_name"]
        if not category_name:
            raise KeyError("category_name")
        top = request.GET.get("top", 10)
        min_price = request.GET.get("p", 1)
        max_price = request.GET.get("q", 10000)
    except KeyError as e:
        return Response({"success": "0", "message": f"Please provide {e}"})
    except Exception as e:
        print(e, traceback.format_exc())
        return Response({"success": "0",
                         "message": "Invalid data provided"})
    try:
        response = requests.get(
            f"http://20.244.56.144/test/companies/"
            f"{company_name}/categories/{company_name}/products?top="
            f"{top}&minPrice={min_price}&maxPrice={max_price}")
        third_party_response = response.json()
        if len(third_party_response) > 10:
            paginator = Paginator(third_party_response, 10)
            try:
                third_party_response = paginator.page(1)
            except PageNotAnInteger:
                third_party_response = paginator.page(1)
            except EmptyPage:
                third_party_response = paginator.page(paginator.num_pages)
        return Response(third_party_response)
    except Exception as e:
        print(e, traceback.format_exc())
        return Response({"success": "0",
                         "message": "Something went wrong"})
