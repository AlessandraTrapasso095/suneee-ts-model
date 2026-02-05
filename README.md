# Sunnee – TypeScript Domain Modeling

Questo progetto modella la struttura operativa di un brand di beachwear sostenibile utilizzando TypeScript.

L’obiettivo è rappresentare, attraverso enum, interfacce e classi, le interazioni tra clienti, prodotti beachwear e processi di produzione sostenibile, simulando alcune regole di business tipiche di un sistema reale.

Il progetto non include una UI o un frontend: il focus è esclusivamente sulla logica applicativa e sulla modellazione del dominio.

Il repository del progetto è disponibile al seguente link:
https://github.com/alessandratrapasso095/sunnee-ts

---

## Struttura del progetto

Il sistema è composto da tre macro-componenti.

Gli **enum** definiscono valori chiusi e controllati, utilizzati per rappresentare:
- tipologie di prodotto
- stati del prodotto
- taglie
- metodi di pagamento

Le **interfacce** definiscono i contratti del dominio, specificando quali proprietà e comportamenti devono avere:
- il cliente
- il prodotto
- il processo di produzione

Le **classi** implementano concretamente tali contratti e contengono la logica di business:
- Cliente
- Prodotto
- ProcessoProduzione

Ogni classe implementa la propria interfaccia tramite la keyword `implements`.

---

## Logica applicativa

Un cliente può ordinare un prodotto tramite il metodo `ordinaProdotto`.

Un prodotto:
- può essere ordinato da un massimo di quattro clienti
- cambia automaticamente stato in base al numero di ordini ricevuti (DISPONIBILE, ORDINATO, ESAURITO)
- impedisce ordini duplicati dallo stesso cliente tramite controllo sull’email

I prodotti possono essere associati a uno o più processi di produzione sostenibile, che rappresentano le diverse fasi della filiera (ad esempio la rigenerazione del filato).

---

## Test ed esecuzione

Il progetto include una sezione di test che istanzia prodotti, clienti e processi di produzione e simula il flusso completo di ordinazione.

I test verificano:
- l’ordinazione corretta dei prodotti
- il blocco degli ordini duplicati
- il cambio di stato del prodotto
- il limite massimo di ordini consentiti

Per eseguire il progetto in locale:

```bash
npm install
npx tsc
node dist/index.js


---

## 🎯 Obiettivo formativo

Questo progetto è stato realizzato a scopo didattico per:

esercitare la modellazione di un dominio reale

applicare i concetti fondamentali di TypeScript

utilizzare enum, interfacce e classi in modo corretto

implementare e testare regole di business

---

## 👩‍💻 Autore: Alessandra Trapasso

- 📂 Tutti i repository:
https://github.com/AlessandraTrapasso095

- per🔗 Sito / Portfolio personale:
https://alessandra-trapasso-web-developer.netlify.app/