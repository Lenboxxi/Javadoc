---
title: Threading
tableOfContents: false
---

## run-Methode
```java
class FirstThread extends Thread {
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println(i + " ");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
        System.out.println("End of thread " + this.toString());
    }
}

public class FirstThreadDemo {
    public static void main(String[] args) {
        FirstThread thread = new FirstThread();
        thread.start();
        System.out.println("End of main");
    }
}
```
![img.png](../../../assets/threading.png)