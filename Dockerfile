FROM tomcat:8.5.88-jre11-temurin-focal
COPY taxi-booking/target/taxi-booking-1.0.1.war /usr/local/tomcat/webapps
