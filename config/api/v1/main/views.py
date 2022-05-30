from django.http import HttpResponse
from rest_framework import viewsets, permissions, status

from api.v1.main.serializers import PatientSerializer, PatientDetailSerializer, NoteCreateSerializer
from helper.create_patients import create_patient
from main.models import Patient, Note


class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    ordering = "id"
    http_method_names = ['get', 'post']
    permission_classes = (permissions.IsAuthenticated,)


class NoteCreateViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    http_method_names = ['post']
    serializer_class = NoteCreateSerializer
    permission_classes = (permissions.IsAuthenticated,)


class SearchViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    http_method_names = ['get']
    serializer_class = PatientSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        try:
            return Patient.objects.filter(user_name__contains=self.request.query_params.get('string'))
        except Exception:
            return None


class PatientDetailViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    http_method_names = ['get']
    serializer_class = PatientDetailSerializer
    permission_classes = (permissions.IsAuthenticated,)


def create_fake_patients(request):
    quantity = int(request.GET.get('quantity', 20))
    create_patient(quantity)
    return HttpResponse("Patients created", status=status.HTTP_201_CREATED)


def delete_patients(request):
    Patient.objects.all().delete()
    return HttpResponse("All patients was deleted")
