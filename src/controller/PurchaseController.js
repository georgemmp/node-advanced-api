const Ad = require('../model/Ad')
const User = require('../model/User')
const Mail = require('../services/Mail')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body
    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    await Mail.sendMail({
      from: '"Teste" <teste@mail.com>',
      to: purchaseAd.author.email,
      subject: `Teste de compra: ${purchaseAd.title}`,
      html: `<p>Teste: ${content}<p>`
    })

    return res.send()
  }
}

module.exports = new PurchaseController()
