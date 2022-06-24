FROM openjdk:8
ADD jarstaging/com/stalin/demo-workshop/2.0.1/demo-workshop-2.0.1.jar demo-workshop.jar
ENTRYPOINT ["java", "-jar", "demo-workshop.jar"]


