export const getBitcoinPriceAll = {
  get: {
    tags: ['getBitcoinPrice'],
    summary: 'Api para consultar preços',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/currency'
            }
          }
        }
      }
    }
  }
}
export const getBitcoinPrice = {
  get: {
    tags: ['getBitcoinPrice'],
    summary: 'Api para consultar preços',
    parameters: [{
      in: 'path',
      name: 'code',
      schema: {
        $ref: '#/schemas/currency'
      }
    }],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/currency'
            }
          }
        }
      }
    }
  }
}
