---
title: Exceptions
tableOfContents: true
---

## try / catch

Jede Methode, welche einen Fehler werfen kann, muss auch das Keyword `throw` enthalten.
```java
import java.io.IOException;
public void openFile(/* ... */) throws IOException {
    /*
            Hier stehen Anweisungen, die eine nicht 
            abgefangene java.io.IOException 
            verursachen können
     */
}
```

```java
try {
    /* Programmcode der Exceptions erzeugt */
} catch (ExceptionType1 e1) {
    /* Behandle Exception e1 von Typ ExceptionType1 */
} catch (ExceptionType2 e2) {
    /* Behandle Exception e2 von Typ ExceptionType2 */
} finally {
    /* Dieser Code wird immer ausgeführt */
} 
```

## Eigene Exception
```java
class MyException extends Exception {
    public MyException(){
        super("Das ist eine Standard-Error Nachricht");
    }
    public MyException(String message){
        super(message);
    }
}
```

## Exception Matching
```java
class FatherException extends Exception {/* ... */}
class SonException extends FatherException {/* ... */}

public class FatherAndSon {
    public static void main(String[] args) {
        try { throw new SonException(); }
        catch (SonException s) {
            System.err.println("Caught SonException");
        }
        catch (FatherException f) {
            System.err.println("Caught FatherException");
        }
    }
}
```
Wird `catch (SonException){...}` gelöscht, wird die Exception noch von `FatherException` abgefangen, da sich `SonException` davon ableitet.

## Mehrere Exceptions
```java
try {
    throwAorB();
} catch (ExceptionA | ExceptionB ex) {
    throw ex;
}
```