# Vytvoření vlastního certifikátu

Certifikát je už připraven, stačí [instalovat certifikační autoritu](#instalace-certifika%C4%8Dn%C3%AD-autority).

## Vytvoření certifikační autority

### Příprava
Lze smazat vše kromě souborů `localhost.ext` a `readme.md`.

### Generování

* zvolte heslo (pass phrase např. `localhost`).
* v příkazovém řádku zadejte následující příkazy
  * vytvoření privátního klíče pro certifikační autoritu (v git bash dát před příkazy winpty)

  ```shell
  openssl genrsa -new -des3 -out myCA.key 2048
  ```

  * vytvoření kořenového certifikátu

  ```shell
  openssl req -x509 -new -nodes -key myCA.key -sha256 -days 825 -out myCA.pem
  ```

  * vytvoření privátního klíče pro doménový certifikát

  ```shell
  openssl genrsa -out localhost.key 2048
  ```

  * vytvoření požadavku na podepsání certifikátu

  ```shell
  openssl req -new -key localhost.key -out localhost.csr
  ```

  * uprav konfigurační soubor localhost.ext (není nutné)
  * vytvoření podepsaného certifikátu

  ```shell
  openssl x509 -req -in localhost.csr -CA myCA.pem -CAkey myCA.key -CAcreateserial -out localhost.crt -days 825 -sha256 -extfile localhost.ext
  ```

### Instalace certifikační autority
Certifikát myCA.pem pak nainstalovat do úložiště důvěryhodných kořenových certifikačních autorit.
* Otevřít Správa certifikátů uživatelů
* Důvěryhodné kořenové certifikační autority -> Certifikáty
* Akce -> Všechny úkoly -> Importovat…
* Typ souboru Všechny soubory

## Upozornění
  Je potřeba restartovat prohlížeče!
