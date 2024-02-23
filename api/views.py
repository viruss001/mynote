from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
@api_view(['GET',"POST"])
def get(request):
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)
@api_view(['GET',])
def getNotes(request):
    #it return all the note form databas
    getnotes =Note.objects.all().order_by('-updated')
    get_notes_ser=NoteSer(getnotes,many =  True)
    return Response(get_notes_ser.data)
@api_view(['GET',])

def getNote(request,id):
    #it return only one note based on id
    getnotes =Note.objects.get(pk = id)
    get_notes_ser=NoteSer(getnotes)
    return Response(get_notes_ser.data)
@api_view(['POST',])
def createnote(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
        
    )
    print(data)
    get_notes_ser=NoteSer(note,many =  False)
    return Response(get_notes_ser.data)
@api_view(["PUT"])
def updateNote(request,id):
    data= request.data
    note =Note.objects.get(pk=id)
    noteser= NoteSer(instance=note,data=data)
    if noteser.is_valid():
        noteser.save()
    return Response(noteser.data)
@api_view(["DELETE"])
def deleteNote(request,id):
    note=Note.objects.get(pk=id)
    note.delete()
    return Response("Note deleted")

