---
title: Enums
tableOfContents: false
---

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