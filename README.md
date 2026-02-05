# Sunnee – TypeScript Domain Modeling

Questo progetto modella la struttura operativa di un brand di beachwear sostenibile utilizzando TypeScript.

L’obiettivo è rappresentare, attraverso enum, interfacce e classi, le interazioni tra clienti, prodotti beachwear e processi di produzione sostenibile, simulando alcune regole di business tipiche di un sistema reale.

Il progetto non include una UPI o un frontend: il focus è esclusivamente sulla logica applicativa e sulla modellazione del dominio.

---

## 🔗 Repository GitHub del progetto
https://github.com/AlessandraTrapasso095/suneee-ts-model.git

## 🚀 CodePen Deploy
https://codepen.io/AlessandraTrapasso095/pen/gbMjxyp

---

## 🎯 Obiettivo formativo

Questo progetto è stato realizzato a scopo didattico per:
- esercitare la modellazione di un dominio reale
- applicare i concetti fondamentali di TypeScript
- utilizzare enum, interfacce e classi in modo corretto
- implementare e testare regole di business

---

## 👩‍💻 Autore

**Alessandra Trapasso**

- 📂 GitHub (tutti i repository):  
  https://github.com/AlessandraTrapasso095

- 🌐 Sito web / Portfolio personale:  
  https://alessandra-trapasso-web-developer.netlify.app/

---

## 🧩 Struttura del progetto

Il sistema è composto da tre macro-componenti.

### Enum
Gli enum definiscono valori chiusi e controllati, utilizzati per rappresentare:
- tipologie di prodotto
- stati del prodotto
- taglie
- metodi di pagamento

### Interfacce
Le interfacce definiscono i contratti del dominio, specificando quali proprietà e comportamenti devono avere:
- il cliente
- il prodotto
- il processo di produzione

### Classi
Le classi implementano concretamente tali contratti e contengono la logica di business:
- Cliente
- Prodotto
- ProcessoProduzione

Ogni classe implementa la propria interfaccia tramite la keyword `implements`.

---

## ⚙️ Logica applicativa

- Un cliente può ordinare un prodotto tramite il metodo `ordinaProdotto`
- Un prodotto:
  - può essere ordinato da un massimo di quattro clienti
  - cambia automaticamente stato in base al numero di ordini ricevuti (`DISPONIBILE`, `ORDINATO`, `ESAURITO`)
  - impedisce ordini duplicati dallo stesso cliente tramite controllo sull’email
- I prodotti possono essere associati a uno o più processi di produzione sostenibile, che rappresentano le diverse fasi della filiera (ad esempio la rigenerazione del filato)

---

## 🧪 Test ed esecuzione

Il progetto include una sezione di test che:
- istanzia prodotti, clienti e processi di produzione
- simula il flusso completo di ordinazione
- verifica il corretto comportamento delle regole di business

Per eseguire il progetto in locale:

```bash
npm install
npx tsc
node dist/index.js
