import type {
  AgendaItem,
  MatchResult,
  Sponsor,
  SpotlightPlayer,
  SquadPlayer,
  StandingRow,
  TransferUpdate,
} from '@/types';
import schroyenPlayerCard from '@/assets/players/Schroyen_Speler_kaart.svg';
import bipinPlayerImage from '@/assets/players/bipin.svg';
import mathPlayerImage from '@/assets/players/math.svg';
import runePlayerImage from '@/assets/players/rune.svg';
import devinPlayerImage from '@/assets/players/Devin.svg'
import nicolasPlayerImage from '@/assets/players/Libert.svg'
import rensPlayerImage from '@/assets/players/Rens.svg'
import robbePlayerImage from '@/assets/players/Robbe.svg'
import yoranPlayerImage from '@/assets/players/Yoran.svg'
import arjenPlayerImage from '@/assets/players/Arjen.svg'
import pedroPlayerImage from '@/assets/players/Pedro.svg'
import pedroMotmImage from '@/assets/motm/Pedro MOTM.svg';
import feyoMotmImage from '@/assets/motm/Feyo Kanga Wolfs.svg';
import robbeMotmImage from '@/assets/motm/Robbe MOTM.svg';
import schroyenMotmImage from '@/assets/motm/Schroyen MOTM.svg';
import yoranMotmImage from '@/assets/motm/Yoran MOTM.svg';
import chrisNijsSponsorImage from '@/assets/sponsors/Chris Nijs Sponsor.jpg';
import garageCarSponsorImage from '@/assets/sponsors/Garage Car sponsor.jpg';
import tPleintjeSponsorImage from '@/assets/sponsors/Frituurtpleintje.jpg';
import odtCafeSponsorImage from '@/assets/sponsors/odt cafe logo.svg';
import devinTransferImage from '@/assets/transfers/Transfer Devin.jpg';

export const teamName = 'ZVK ODT';

export const clubValues = [
  'Inzet op en naast het veld',
  'Altijd ambiance op en naast het veld',
  'De meeste en luidste supporters van de reeks',
  'Niemand een makkelijke avond geven',
  'Samen uit, samen thuis'
];

export const results: MatchResult[] = [
  {
    id: 1,
    date: '2025-09-29',
    opponent: 'Mamba FC',
    home: true,
    scored: 4,
    conceded: 2,
  },
  {
    id: 2,
    date: '2025-10-13',
    opponent: 'ZVC Chaussee',
    home: false,
    scored: 2,
    conceded: 4,
  },
  {
    id: 3,
    date: '2025-10-20',
    opponent: "'t Loon",
    home: true,
    scored: 10,
    conceded: 2,
  },
  {
    id: 4,
    date: '2025-11-03',
    opponent: 'Dardanet',
    home: false,
    scored: 7,
    conceded: 6,
  },
  {
    id: 5,
    date: '2025-11-10',
    opponent: 'Futsal Lions',
    home: true,
    scored: 2,
    conceded: 3,
  },
  {
    id: 6,
    date: '2025-11-24',
    opponent: 'BIH United',
    home: false,
    scored: 1,
    conceded: 3,
  },
  {
    id: 7,
    date: '2025-12-08',
    opponent: 'FC De Schuddertjes',
    home: true,
    scored: 6,
    conceded: 5,
  },
  {
    id: 8,
    date: '2026-01-05',
    opponent: 'Ham Hoepertingen',
    home: false,
    scored: 1,
    conceded: 5,
  },
  {
    id: 9,
    date: '2026-01-12',
    opponent: 'Dynamo Heers',
    home: true,
    scored: 4,
    conceded: 5,
  },
  {
    id: 10,
    date: '2026-02-02',
    opponent: 'Mamba FC',
    home: false,
    scored: 4,
    conceded: 2,
  },
  {
    id: 11,
    date: '2026-02-09',
    opponent: 'ZVC Chaussee',
    home: true,
    scored: 1,
    conceded: 6,
  },
  {
    id: 12,
    date: '2026-03-02',
    opponent: "'t Loon",
    home: false,
    scored: 10,
    conceded: 5,
  },
  {
    id: 13,
    date: '2026-03-16',
    opponent: 'Dardanet',
    home: true,
    scored: 12,
    conceded: 7,
  },
  {
    id: 14,
    date: '2026-03-23',
    opponent: 'Futsal Lions',
    home: false,
    scored: 3,
    conceded: 4,
  },
];

export const standings: StandingRow[] = [
  {
    position: 1,
    team: 'ZVC Chaussee',
    played: 12,
    won: 12,
    drawn: 0,
    lost: 0,
    goalsFor: 81,
    goalsAgainst: 20,
    points: 36,
  },
  {
    position: 2,
    team: 'Futsal Lions',
    played: 13,
    won: 9,
    drawn: 2,
    lost: 2,
    goalsFor: 87,
    goalsAgainst: 39,
    points: 27,
  },
  {
    position: 3,
    team: 'Dynamo Heers',
    played: 11,
    won: 8,
    drawn: 1,
    lost: 2,
    goalsFor: 69,
    goalsAgainst: 32,
    points: 25,
  },
  {
    position: 4,
    team: 'Onder De Toren Veulen',
    played: 14,
    won: 7,
    drawn: 0,
    lost: 7,
    goalsFor: 67,
    goalsAgainst: 59,
    points: 21,
  },
  {
    position: 5,
    team: 'BIH United',
    played: 13,
    won: 5,
    drawn: 3,
    lost: 5,
    goalsFor: 40,
    goalsAgainst: 43,
    points: 18,
  },
  {
    position: 6,
    team: 'Ham Hoepertingen',
    played: 13,
    won: 5,
    drawn: 1,
    lost: 7,
    goalsFor: 49,
    goalsAgainst: 57,
    points: 16,
  },
  {
    position: 7,
    team: 'Dardanet',
    played: 12,
    won: 5,
    drawn: 0,
    lost: 7,
    goalsFor: 74,
    goalsAgainst: 73,
    points: 15,
  },
  {
    position: 8,
    team: 'FC De Schuddertjes',
    played: 11,
    won: 4,
    drawn: 0,
    lost: 7,
    goalsFor: 60,
    goalsAgainst: 55,
    points: 12,
  },
  {
    position: 9,
    team: "'t Loon",
    played: 13,
    won: 3,
    drawn: 1,
    lost: 9,
    goalsFor: 42,
    goalsAgainst: 99,
    points: 10,
  },
  {
    position: 10,
    team: 'Mamba FC',
    played: 12,
    won: 0,
    drawn: 0,
    lost: 12,
    goalsFor: 19,
    goalsAgainst: 91,
    points: 0,
  },
];

export const sponsors: Sponsor[] = [
  {
    name: 'Nijs Chris',
    category: 'Hoofdsponsor',
    description: 'Chris Nijs staat voor betrouwbare service, lokale betrokkenheid en een praktische aanpak waarop je kan rekenen.',
    accent: 'sunrise',
    image: chrisNijsSponsorImage,
    details: {
      address: 'Steenweg 93/201,\n 3870 Heers',
      contact: '+32 497 69 14 97',
      hours: 'nvt.',
      extraInfo:
        'Onze sponsor is een betrouwbare specialist in thuisonderhoud en klusjesdiensten, die klaarstaat voor zowel kleine herstellingen als grotere projecten in en rond de woning. Met oog voor detail en een passie voor vakmanschap zorgt hij ervoor dat elke klus professioneel en efficiënt wordt uitgevoerd.\n\n Of het nu gaat om schilderwerken, kleine renovaties, herstellingen of algemeen onderhoud, onze sponsor biedt een persoonlijke service op maat van de klant. Betrouwbaarheid, kwaliteit en klanttevredenheid staan steeds centraal.\n\n Dankzij zijn jarenlange ervaring en praktische aanpak is hij de ideale partner voor iedereen die zorgeloos wil genieten van een goed onderhouden woning.',
    },
  },
  {
    name: 'Garage Kar',
    category: 'Hoofdsponsor',
    description: 'Garage KAR is al meer dan 20 jaar specialist in onderhoud en herstellingen van alle automerken, met duidelijke service en sterke vakkennis.',
    accent: 'field',
    image: garageCarSponsorImage,
    details: {
      address: 'Bovelingenstraat 195,\n 3870 Heers',
      contact: '+32 495 20 85 97 info@garagekar.be',
      hours: 'Enkel op afspraak',
      extraInfo:
        'Garage KAR is al meer dan 20 jaar specialist in onderhoud en herstellingen van alle automerken. Ze staan voor een sterke prijs-kwaliteitsverhouding, duidelijke offertes op voorhand en persoonlijke service zonder verrassingen.\n\nBij Garage KAR ben je geen nummer. Het atelier is open en transparant, en omdat ze enkel op afspraak werken, krijg je de tijd en service die je verdient. Ook avond- en weekendafspraken zijn mogelijk zonder meerkost, en indien nodig kan er een vervangwagen voorzien worden zodat je mobiel blijft.\n\nDiensten:\n- Onderhoud: klein en groot onderhoud, versnellingsbakolie verversen, aircoreiniging, remvloeistof verversen, koelvloeistof verversen, distributieriemservice, nazicht voor keuring, AdBlue vullen en winter- of zomernazicht.\n- Herstellingen: remschijven en blokken, ruitenwissers, schokdempers, uitlaat, startsysteem en batterij, stuurinrichting, wielophanging, versnellingsbak, koppeling, ruiten herstellen of vervangen en airconditioning.\n- Bandenservice: montage en uitbalanceren, zomer- en winterwissel, herstellen van een lekke band en uitlijning.',
    },
  },
  {
    name: 'T Pleintje',
    category: 'Sponsor',
    description: "Frituur 't Pleintje is een warme lokale partner waar verse frieten, snacks en persoonlijke service centraal staan.",
    accent: 'night',
    image: tPleintjeSponsorImage,
    details: {
      address: 'Bovelingenstraat 163,\n 3870 Heers',
      contact: 'Contactgegevens nog aan te vullen',
      hours: 'Elke dag open, behalve donderdag',
      extraInfo:
        "Frituur 't Pleintje in Heers wordt uitgebaat door Tibo, die elke dag klaarstaat om klanten te ontvangen met verse frieten, snacks en een glimlach. Of je nu vaste klant bent of voor het eerst langskomt, de bedoeling blijft altijd hetzelfde: snel, vriendelijk en met kwaliteit bedienen.\n\nSinds de zomer van 2025 is Tibo de trotse eigenaar van het gezellige chaletje op het plein. Met een persoonlijke aanpak en de vertrouwde kwaliteit van meer dan 30 jaar blijft Frituur 't Pleintje een vaste waarde voor iedereen die zin heeft in een snelle en smakelijke hap.\n\nBij Frituur 't Pleintje kan je terecht voor knapperige frieten, klassieke snacks en lekkere verrassingen. De service is persoonlijk, de sfeer is warm en je voelt je er meteen welkom. Een ideale stop voor wie houdt van iets eenvoudigs dat gewoon heel goed gedaan is.",
    },
  },
  {
    name: 'Onder den Toren',
    category: 'Sponsor',
    description: 'Café Onder den Toren in Veulen is een gezellig volkscafé waar dorpssfeer, ontmoeting en een goed glas centraal staan.',
    accent: 'field',
    image: odtCafeSponsorImage,
    details: {
      address: 'Nieuwe Steenweg 137,\n 3870 Heers',
      contact: '+32 11 48 15 75',
      hours:
        'Woensdag - zaterdag open vanaf 14:00\nZon- en feestdagen open vanaf 10:00\nMaandag en dinsdag gesloten',
      extraInfo:
        'Café Onder den Toren in Veulen is een echt volkscafé waar gezelligheid, ontmoeting en dorpssfeer centraal staan. Het is een plek waar mensen samenkomen voor een drankje, een babbel en een fijne avond in een warme, vertrouwde omgeving.\n\n Bierliefhebbers zijn er zeker aan het juiste adres, met een mooi aanbod aan verschillende bieren, waaronder abdijbieren en trappisten. Een van de echte troeven van het café is zonder twijfel de frisse Stella, die bij veel bezoekers bijzonder in de smaak valt. Ook voor een cocktail of aperitief ben je hier welkom.'    },
  },
];

export const spotlightPlayers: SpotlightPlayer[] = [
  {
    name: 'Robbe Grosemans',
    role: 'Bankzitter',
    highlight: 'Tegen Dardanet brak hij helemaal los: eerst zijn eerste van het seizoen, daarna nog twee erbij voor een hattrick en een hoofdrol in de 12-7 zege.',
    statLabel: 'MOTM',
    statValue: '17/03/2026',
    image: robbeMotmImage,
  },
  {
    name: 'Milan Schroyen',
    role: 'Verdediger',
    highlight: 'Tegen Mamba FC scoorde hij twee keer, eerst voor de 1-1 en later opnieuw op aangeven van Yoran. Daarbovenop gaf hij ook nog de assist voor de 2-4 van Devin.',
    statLabel: 'MOTM',
    statValue: '03/02/2026',
    image: schroyenMotmImage,
  },
  {
    name: 'Yoran Knaepen',
    role: 'All rounder',
    highlight: 'Tegen Dardanet was hij beslissend met twee goals, drie assists en in de slotminuten ook nog de winning goal voor de 6-7.',
    statLabel: 'MOTM',
    statValue: '04/11/2025',
    image: yoranMotmImage,
  },
  {
    name: 'Pedro Santos',
    role: 'All rounder',
    highlight: 'Na een schitterende wedstrijd met een hattrick en een assist was het snel duidelijk wie de Team of the Week verdiende.',
    statLabel: 'MOTM',
    statValue: '21/10/2025',
    image: pedroMotmImage,
  },
  {
    name: 'Feyo "Kanga" Wolfs',
    role: 'Kanga',
    highlight:
      'Als allereerste man of the match bewees Feyo meteen zijn klasse met twee prachtige doelpunten. Daarmee trok hij de winst over de streep en zette hij een prestatie neer die in de geschiedenisboeken komt.',
    statLabel: 'MOTM',
    statValue: '29/09/2025',
    image: feyoMotmImage,
  },
];

export const squadPlayers: SquadPlayer[] = [
  {
    name: 'Rune Paque',
    number: 1,
    position: 'Keeper',
    goals: 0,
    assists: 3,
    matches: 16,
    playerOfTheMatch: 4,
    image: runePlayerImage,
    customStats: [
      { label: 'Goals', value: 0 },
      { label: 'Benen gebroken', value: 4 },
      { label: 'Aantal schoten', value: 102 },
      { label: 'Ballen tussen de benen', value: 29 },
    ],
  },
  {
    name: 'Arjen Coenegracht',
    number: 8,
    position: 'Bankzitter',
    goals: 1,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: arjenPlayerImage,
    customStats: [
      { label: 'Goals', value: 1 },
      { label: 'Kapotte benen', value: '1,5' },
      { label: 'Aantal keren gereden', value: '∞' },
      { label: 'Minuten op de bank', value: 842 },
    ],
  },
  {
    name: 'Milan Schroyen',
    number: 9,
    position: 'Verdediger',
    goals: 4,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: schroyenPlayerCard,
    customStats: [
      { label: 'Goals', value: 4 },
      { label: 'Bokken gedronken', value: 155 },
      { label: 'Potjes tijerbalsem', value: 15 },
      { label: 'Liters gezweet', value: '20.000L' },
    ],
  },
  {
    name: 'Yoran Knaepen',
    number: 10,
    position: 'All rounder',
    goals: 15,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: yoranPlayerImage,
    customStats: [
      { label: 'Goals', value: 15 },
      { label: 'KM afgelegd', value: 5127 },
      { label: 'Aantal keer onderuit gehaald', value: '1987' },
      { label: 'Gescout door topclubs', value: '13' },
    ],
  },
  {
    name: 'Rens Vanekan',
    number: 14,
    position: 'Aanvaller',
    goals: 11,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: rensPlayerImage,
    customStats: [
      { label: 'Goals', value: 11 },
      { label: "Panna's uitgedeeld", value: 23 },
      { label: 'Haren verloren dit seizoen', value: '123.547' },
      { label: 'Verdedigers gek gemaakt', value: 31 },
    ],
  },
  {
    name: 'Pedro Santos',
    number: 25,
    position: 'All rounder',
    goals: 12,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: pedroPlayerImage,
    customStats: [
      { label: 'Goals', value: 12 },
      { label: 'Gepast ipv geschoten', value: 45 },
      { label: 'Schotkracht', value: '22 km/h' },
      { label: 'Own goals', value: 4 },
    ],
  },
  {
    name: 'Math Royer',
    number: 60,
    position: 'Aanvaller',
    goals: 7,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: mathPlayerImage,
    customStats: [
      { label: 'Goals', value: 7 },
      { label: 'Paal geraakt', value: 34 },
      { label: "Trivela's", value: 14 },
      { label: 'Waal', value: 'Ja' },
    ],
  },
  {
    name: 'Devin Thirion',
    number: 69,
    position: 'Skiller',
    goals: 4,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: devinPlayerImage,
    customStats: [
      { label: 'Goals', value: 4 },
      { label: "Pizza's gegeten", value: '>1' },
      { label: "KM's gelopen", value: 2 },
      { label: 'Wespen meegenomen', value: 1 },
    ],
  },
  {
    name: 'Bipin Naeten',
    number: 81,
    position: 'Aanvaller',
    goals: 4,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: bipinPlayerImage,
    customStats: [
      { label: 'Goals', value: 4 },
      { label: 'Geld', value: '- 501,57' },
      { label: 'Aantal dagen geblesseerd', value: 143 },
      { label: 'Aantal keer gespauwd', value: 1501 },
    ],
  },
  {
    name: 'Robbe Grosemans',
    number: 96,
    position: 'Bankzitter',
    goals: 3,
    assists: 0,
    matches: 12,
    playerOfTheMatch: 0,
    image: robbePlayerImage,
    customStats: [
      { label: 'Goals', value: 3 },
      { label: 'Geschreeuwd', value: 12 },
      { label: 'Ginger', value: 'Ja' },
      { label: 'Rode kaarten uitgedeeld', value: '100' },
    ],
  },
  {
    name: 'Nicolas Libert',
    number: 99,
    position: 'Verdediger',
    goals: 4,
    assists: 0,
    matches: 0,
    playerOfTheMatch: 0,
    image: nicolasPlayerImage,
    customStats: [
      { label: 'Goals', value: 4 },
      { label: 'Schotkracht', value: '200 km/h' },
      { label: "Auto's kapot gereden", value: 1 },
      { label: 'Gespauwd tijdens opwarming', value: 1 },
    ],
  },
];

export const agenda: AgendaItem[] = [
  {
    date: '2026-04-20',
    time: '21:00',
    title: 'Onder Den Toren Veulen vs. BIH United',
    description: 'Thuiswedstrijd om 21:00.',
  },
  {
    date: '2026-05-04',
    time: '19:00',
    title: 'FC De Schuddertjes vs. Onder Den Toren Veulen',
    description: 'Uitwedstrijd om 19:00.',
  },
  {
    date: '2026-05-18',
    time: '19:00',
    title: 'Onder Den Toren Veulen vs. Ham Hoepertingen',
    description: 'Thuiswedstrijd om 19:00.',
  },
  {
    date: '2026-06-01',
    time: '19:00',
    title: 'Dynamo Heers vs. Onder Den Toren Veulen',
    description: 'Uitwedstrijd om 19:00.',
  },
];

export const transfers: TransferUpdate[] = [
  {
    name: 'Devin',
    direction: 'Nieuwe transfer',
    headline: 'ODT haalt uit met dure stunttransfer',
    note: 'Onder Den Toren Veulen heeft diep in de buidel moeten tasten om Devin binnen te halen. Na lange onderhandelingen, stevige concurrentie van onder meer Wellen en zelfs geruchten rond Barcelona, koos de skiller uiteindelijk toch voor ODT.',
    image: devinTransferImage,
    article: [
      'Onder Den Toren Veulen heeft zich deze week stevig laten gelden op de transfermarkt met de komst van Devin. De club deed er achter de schermen alles aan om hem binnen te halen en moest daarvoor diep in de buidel tasten.',
      'De transfer was allesbehalve vanzelfsprekend, want ook Wellen zat naar verluidt stevig op het dossier en zelfs Barcelona werd in de wandelgangen genoemd. Dat ODT hem uiteindelijk toch wist te strikken, maakt de deal alleen maar straffer.',
      'Waarom Devin? Omdat hij een speler is die met een actie een match kan openbreken. Technisch sterk, onvoorspelbaar en iemand waarvoor mensen rechtstaan zodra hij aan de bal komt. Binnen de club wordt zelfs lachend gezegd dat hij op een seizoen misschien maar 67 meter loopt, maar in die paar meters wel meer verschil maakt dan een ander in een hele match.',
      'Met deze transfer wil ODT duidelijk tonen dat het ambitie heeft. De komst van Devin is een statement - nu is het aan hem om dat op het veld te bevestigen.',
    ],
  },
];
