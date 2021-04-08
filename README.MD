# isHoliday
Pacote NPM para JS com o intuito de descobrir se o dia informado é um feriado nacional.

### Como utilizar 📝

1. Instale o pacote via NPM

```sh
   npm i @oliveiiraa/isholiday
   ```

2. Utilize ele em seu código da seguinte forma:

```js

const isHoliday = require('isHoliday')
const AnoNovo = isHoliday('01/01') // { "isHoliday": true, "name": "Ano Novo" }

if(AnoNovo.isHoliday) {
    console.log(`Hoje é ${AnoNovo.name}`)
}

```