from django.shortcuts import render

# Create your views here.


from django.shortcuts import render

# Create your views here.

def vue_index(request):
    return render(request, 'index.html')

def user_page(request, username):
    return render(request, 'index.html', context={"username": username})
