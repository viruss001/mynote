from django.urls import path
from . import views
urlpatterns = [
    
    path('tempory',views.get),
    path('notes/',views.getNotes ,name = "allnotes"),    
    path('note/create/',views.createnote,name="createnote"),
    path('notes/<id>/update/',views.updateNote,name = "updatenote"),
    path('notes/<id>/delete/',views.deleteNote,name = "deletenote"),
    path('notes/<id>/',views.getNote,name = "getnote"),
]
'''
let createNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/create/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
'''