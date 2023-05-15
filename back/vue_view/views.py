from django.shortcuts import render

# Create your views here.


from django.shortcuts import render

# Create your views here.

def vue_index(request):
    return render(request, 'index.html')
