const products = require('./products.json')

module.exports = app => {
  app.get('/api/products', (req, res) => {
    res.json({
      ...products,
      time: new Date().toJSON()
    })
  })
  app.get('/api/products/:id', (req, res) => {
    const result = {
      ...products,
      data: products.data.filter(c => +c.id === +req.params.id)[0],
      time: new Date().toJSON()
    }
    res.json(result)
  })
}
