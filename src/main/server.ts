import { BitcoinPriceHelper } from '../infra/db/helpers/bitcoin-price'
import env from './config/env'

BitcoinPriceHelper.connect(env.BitcoinPriceUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  })
  .catch(console.error)
