enum TipoProdotto {
  COSTUME_DA_BAGNO = "costume_da_bagno",
  PAREO = "pareo",
  CAPPELLO = "cappello",
}

enum StatoProdotto {
  DISPONIBILE = "disponibile",
  ORDINATO = "ordinato",
  ESAURITO = "esaurito",
}

enum Taglia {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  ONE_SIZE = "ONE_SIZE",
}

enum MetodoPagamento {
  CARTA = "carta",
  PAYPAL = "paypal",
  GOOGLE_PAY = "google_pay",
  APPLE_PAY = "apple_pay",
}

interface ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: MetodoPagamento;

  ordinaProdotto(prodotto: IProdotto): void;
}

interface IProdotto {
  id: string;
  tipo: TipoProdotto;
  taglia: Taglia;
  colore: string;
  stato: StatoProdotto;

  clienti: ICliente[];

  assegnaCliente(cliente: ICliente): void;
}

interface IProcessoProduzione {
  nome: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];

  aggiungiProdotto(prodotto: IProdotto): void;
}

class Prodotto implements IProdotto {
  id: string;
  tipo: TipoProdotto;
  taglia: Taglia;
  colore: string;
  stato: StatoProdotto;
  clienti: ICliente[];

  constructor(id: string, tipo: TipoProdotto, taglia: Taglia, colore: string) {
    this.id = id;
    this.tipo = tipo;
    this.taglia = taglia;
    this.colore = colore;

    this.stato = StatoProdotto.DISPONIBILE;
    this.clienti = [];
  }

  assegnaCliente(cliente: ICliente): void {
  if (this.stato === StatoProdotto.ESAURITO) {
    console.log(
      `Prodotto ${this.id} esaurito: ${cliente.email} non può ordinare.`
    );
    return;
  }

  const clienteGiaPresente = this.clienti.some(
    (c) => c.email === cliente.email
  );

  if (clienteGiaPresente) {
    console.log(
      `Il cliente ${cliente.email} ha già ordinato il prodotto ${this.id}.`
    );
    return;
  }

  if (this.clienti.length >= 4) {
    this.stato = StatoProdotto.ESAURITO;
    console.log(`Prodotto ${this.id} ha raggiunto il limite massimo.`);
    return;
  }

  this.clienti.push(cliente);

  if (this.clienti.length === 4) {
    this.stato = StatoProdotto.ESAURITO;
  } else {
    this.stato = StatoProdotto.ORDINATO;
  }

  console.log(
    `Prodotto ${this.id} assegnato a ${cliente.email}. Stato: ${this.stato}. (${this.clienti.length}/4)`
  );
 }
}

class Cliente implements ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: MetodoPagamento;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamento: MetodoPagamento
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }

  ordinaProdotto(prodotto: IProdotto): void {
    console.log(
      `${this.nome} ${this.cognome} ordina il prodotto ${prodotto.id}`
    );

    prodotto.assegnaCliente(this);
  }
}

class ProcessoProduzione implements IProcessoProduzione {
  nome: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[];

  constructor(nome: string, descrizione: string) {
    this.nome = nome;
    this.descrizione = descrizione;
    this.prodottiInProduzione = [];
  }

  aggiungiProdotto(prodotto: IProdotto): void {
    this.prodottiInProduzione.push(prodotto);

    console.log(
      `Aggiunto prodotto ${prodotto.id} al processo "${this.nome}". Totale prodotti: ${this.prodottiInProduzione.length}`
    );
  }
}

const prodotto1 = new Prodotto("P001", TipoProdotto.COSTUME_DA_BAGNO, Taglia.M, "nero");
const prodotto2 = new Prodotto("P002", TipoProdotto.CAPPELLO, Taglia.ONE_SIZE, "beige");

const cliente1 = new Cliente("Mario", "Rossi", "mario@email.com", MetodoPagamento.CARTA);
const cliente2 = new Cliente("Luca", "Bianchi", "luca@email.com", MetodoPagamento.PAYPAL);
const cliente3 = new Cliente("Sara", "Verdi", "sara@email.com", MetodoPagamento.GOOGLE_PAY);
const cliente4 = new Cliente("Giulia", "Neri", "giulia@email.com", MetodoPagamento.APPLE_PAY);
const cliente5 = new Cliente("Anna", "Blu", "anna@email.com", MetodoPagamento.CARTA);

const processo = new ProcessoProduzione(
  "Rigenerazione filato",
  "Trasforma rifiuti plastici marini in filato riciclato per beachwear."
);

processo.aggiungiProdotto(prodotto1);
processo.aggiungiProdotto(prodotto2);

cliente1.ordinaProdotto(prodotto1);
cliente2.ordinaProdotto(prodotto1);
cliente3.ordinaProdotto(prodotto1);
cliente4.ordinaProdotto(prodotto1);
cliente5.ordinaProdotto(prodotto1);

