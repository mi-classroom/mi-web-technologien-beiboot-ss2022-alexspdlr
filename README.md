# Web Technologien // begleitendes Projekt Sommersemester 2022

## Aufgabe:

Zum Modul Web Technologien gibt es ein begleitendes Projekt. Im Rahmen dieses Projekts werden wir von Veranstaltung zu Veranstaltung ein Projekt sukzessive weiter entwickeln und uns im Rahmen der Veranstaltung den Fortschritt anschauen, Code Reviews machen und Entwicklungsschritte vorstellen und diskutieren.

Als organisatorischen Rahmen für das Projekt nutzen wir GitHub Classroom. Inhaltlich befassen wir uns mit der Entwicklung einer kleinen Web-Anwendung für die Bearbeitung von Bildern. Hierbei steht weniger ein professioneller Konzeptions-, Entwurfs- und Entwicklungsprozess im Vordergrund, sondern vielmehr die sukzessive Weiterentwicklung einer Anwendung, das Ausprobieren, Vergleichen, Refactoren und die Freude an lauffähigem Code.

## Gehostete Anwendung (Username & Passwort -> wie in Issue #1 spezifiziert):

https://enigmatic-mesa-04037.herokuapp.com/

## Projekt lokal über Docker laufen lassen:

1. Docker starten
2. Über das Terminal `docker image build --tag beiboot-alexspdlr .` in der "root-folder" laufen lassen
3. Über das Terminal `docker run --publish 9000:9000 beiboot-alexspdlr` in der "root-folder" laufen lassen
4. Projekt im Browser unter `http://localhost:9000/` aufrufen
5. Docker Container in der Docker App unter dem Reiter `Containers` über den Button `Stop` stoppen oder über den Button `Delete` löschen

## Team

Author: **Alexander Spindeler**  
Reviewer: **Linnéa Doberstein**

## Sonstiges

Aktueller Code befindet sich im "main" branch.
