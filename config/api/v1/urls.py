from django.urls import path, include
from rest_framework import routers

from api.v1.main.views import PatientViewSet, NoteCreateViewSet, create_fake_patients, delete_patients, \
    PatientDetailViewSet, SearchViewSet

app_name = 'api'
router = routers.DefaultRouter()
router.register(r'patients', PatientViewSet)
router.register(r'add-notes', NoteCreateViewSet)
router.register(r'detail', PatientDetailViewSet)
router.register(r'search', SearchViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('create-patient/secret-code/', create_fake_patients),
    path('delete-patient/secret-code/', delete_patients)
]
