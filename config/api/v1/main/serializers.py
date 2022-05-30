from rest_framework import serializers

from main.models import Patient, Note


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('text', 'created_at',)


class PatientDetailSerializer(serializers.ModelSerializer):
    user_note = NoteSerializer(many=True)

    class Meta:
        model = Patient
        fields = ('user_name', 'user_note',)


class NoteCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
