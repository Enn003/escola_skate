from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AvailabilityViewSet, BookingViewSet
from . import views

router = DefaultRouter()
router.register(r'availability', AvailabilityViewSet)
router.register(r'bookings', BookingViewSet)
router.register(r'instructors', views.InstructorViewSet)
router.register(r'classes', views.LessonViewSet)
router.register(r'prices', views.PriceViewSet)


urlpatterns = [
    path('', include(router.urls)),
]

