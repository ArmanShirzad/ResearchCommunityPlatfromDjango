from django.shortcuts import render
from .models import Publication
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import uuid

# The uuid library is used to generate a random UUID for the DOI, 
# but in practice, you would need to use a service that generates actual DOIs, 
# which often involves a registration process and communication with a DOI registration agency 
# such as CrossRef or DataCite.


def index(request):
    publications = Publication.objects.all()
    return render(request, 'index.html', {'publications': publications})


@csrf_exempt
def assign_doi(request):
    if request.method == 'POST':
        # Handle File Upload
        uploaded_file = request.FILES.get('upload_file')
        if uploaded_file:
            # Process the file and store it

            # Generate a DOI
            doi = str(uuid.uuid4())  # This is a placeholder for the DOI

        # Handle GitHub Repo
        github_repo = request.POST.get('github_repo')
        if github_repo:
            # Verify the GitHub repo and process as needed

            # Generate a DOI
            doi = str(uuid.uuid4())  # This is a placeholder for the DOI

        # You should save the uploaded data and DOI to your database here

        # Return the DOI to the user
        return JsonResponse({'doi': doi})

    return JsonResponse({'error': 'Invalid request'}, status=400)

