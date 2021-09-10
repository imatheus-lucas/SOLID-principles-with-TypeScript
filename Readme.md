SOLID

flexível, menos rígido, menos frágil, mais fácil de manter e evoluir

1 - SRP
Single Responsability Principle
Separar coisas que mudam por motivos diferentes

2 - OCP
Open/Closed Principle
Devemos estar fechados para modificação e abertos para extensão

3 - Liskov Substitution Principle

Se S (Coffee, Tea, Eletronics) é subclasse de T (Item), em um programa deve ser possível substituir instâncias de T (Item) por instâncias
de S (Coffee, Tea, Eletronics), SEM QUEBRAR O FUNCIONAMENTO DO PROGRAMA

Pré-condições não pode ser fortalecidas

- deixando de aceitar ENTRADAS que a superclasse considera válida

Pós-condiçoes não podem ser enfraquecidas

- Deixando as saidas diferentes da expectativa de qeum está chamando o método
- Aceitando saídas mais AMPLAS

Invariantes devem se manter consistentes

- Se uma subclasse permitir que o estado conceitual da hierarquia de classes fique inválido

4 - ISP

Interface Segregation Principle

Cuidado com interfaces MUITO ABRANGENTES, não obrigue subclasses a implementar métodos que elas não precisam

5 - DIP

Dependecy Inversion Principle

Hight-level modules should not depend on low-level modules
