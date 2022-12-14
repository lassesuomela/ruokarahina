# Readme

## Mitä teknologioita olet käyttänyt ja millä käyttöjärjestelmällä?

Frontend on tehty React.js + Bootstrap 5 yhdistelmällä ja backend on toteutettu Node.js:llä käyttäen express.js framewörkkiä. Axiosta on käytetty http pyyntöjen tekemiseen frontendin ja backendin välillä sekä myös backendin ja [finelin apin](https://fineli.fi/fineli/api/v1/foods?q=omena) välilä. Windows 10:llä testattu.

## Ohjeet miten ratkaisusi pystytetään ja käynnistetään

- `git clone https://github.com/lassesuomela/ruokarahina.git` # kloonaa repo
- `cd ./backend` # mene backend kansioon
- `npm ci` # asenna dependencyt
- `npm start` # käynnistä node (starttaa porttiin 8080)
- `cd ../frontend` # mene frontend kansioon
- `npm ci` # asenna dependencyt ja keitä kahvit :D
- `npm start` # käynnistä react (käynnistyy porttiin 3000)
- avaa [localhost:3000](http://localhost:3000)
  
## Muutaman lauseen kuvaus tekemästäsi ratkaisusta

Olen vasta tänä syksynä alkanut opettelemaan Reactin + Bootstrap 5:n käyttöä, joten toteutuksesta ei kovin elegantti tullut, mutta toimivan ratkaisun sain silti tehtyä. Frontendin puolella tuli käytettyä flexboxeja Bootstrapin avulla. Backend hakee Finelin API:sta elintarvikkeiden ravintoarvot ja palauttaa ne frontendille jsonilla.

Alussa oli vähän vaikeuksia kun ei modulon käyttö tullut heti mieleen, niin käytin kahta setIntervallia tappelun logiikan hoitamiseen ja miinustelin attackDelaytä, mutta hoksasin käyttää sitä sitten lopuksi. Kaiken kaikkiaan oikeen mukava koodihaaste ja olisi kiva tehdä näitä myös jatkossa.

## Kuvia

![Pelin aloitus](./images/game_start.png)

![peli kännissä](./images/game_on.png)

![Peli ohi](./images/game_end.png)

![Lokit](./images/logs.png)
