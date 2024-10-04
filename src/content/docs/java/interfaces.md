---
title: Interfaces (Schnittstelle)
tableOfContents: false
---

## Interfaces
Interfaces dienen dazu, gleiche Schnittstellen in unterschiedlichen Klassen zu definieren.

Schlüsselwörter sind `interface` und `implements`.

_Interface:_
```java
public interface LandVehicle {
    public void drive();    // kein Methodenrumpf
}
```
_Klasse:_
```java
public class Vehicle {
    private Motor m;
    // ...
}
```
_Implementierte Klasse:_
```java
public class Car extends Vehicle implements LandVehicle {
    public void drive() {
        // Implementierung der Methode
    }
}
```