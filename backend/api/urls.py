from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("notes", views.NoteViewSet)

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("", include(router.urls)),
]
