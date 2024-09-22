---
title: Exceptions
tableOfContents: false
---
```java
public class MyNewException extends Exception {
    public MyNewException() {
        super("This is my custom error message!");
    }
    public MyNewException(int errors) {
        super("We have "+ errors + " Errors!");
    }
}
```