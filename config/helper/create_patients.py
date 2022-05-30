from faker import Faker

from main.models import Patient


def create_patient(quantity):
    for _ in range(quantity):
        faker = Faker()
        Patient.objects.create(
            user_name=faker.name()
        )
