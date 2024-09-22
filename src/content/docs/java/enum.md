---
title: Enums
tableOfContents: true
---
## Einfacher Aufzählungstyp
```java
public class EnumTest {
    enum Season {
        WINTER, SPRING, SUMMER, FALL
    };
    
    public static void main(String[] args) {
        Season s1 = Season.WINTER;
        
        if (s1 == Season.WINTER) {
            System.out.println("Its " + s1);
        }
        Season s2 = Season.WINTER;
    }
}
```

## Komplexer Aufzählungstyp
Hier wurde der `enum` als eigenständige Klasse ausgebaut. Diese Erweiterung erlaubt es, den `enum` um __selbst definierte Eigenschaften__ zu erweitern, analog zu einer normalen Klasse.
```java
public enum PizzaStatus {
    
    // Enum Werte
    ORDERED("Bestellt"),
    READY("Bereit"),
    DELIVERED("Geliefert");
    
    // Optionale Variablen mit Konstruktur
    private String label;
    private PizzaStatus(String label) {
        this.label = label;
    }
    
    // Getter, um Eigenschaften auszulesen
    public String getLabel() {
        return this.label;
    }
}
```

## Beispiel enum
```java
/**
* Farben mit eigenen Codes. So könnte man z.B. zu jeder Farbe auch RAL-
* oder RGB-Farbwerte verwalten.
*/
public enum ComplexColor {
    WHITE(21), BLACK(22), RED(23), YELLOW(24), BLUE(25);
    
    private int code;
    
    private ComplexColor(int c) {
        this.code = c;
    }
    public int getCode() {
        return this.code;
    }
}
```