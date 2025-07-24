const cds = require('@sap/cds')

module.exports = class ProductCatalog extends cds.ApplicationService { init() {

  const { ProductSet } = cds.entities('ProductCatalog')

  this.before (['CREATE', 'UPDATE'], ProductSet, async (req) => {
    console.log('Before CREATE/UPDATE ProductSet', req.data)
  })
  this.after ('READ', ProductSet, async (productSet, req) => {
    debugger;
    console.log('After READ ProductSet', productSet)
  })

  this.on ('applyDiscount', async (req) => {
    debugger;
    const product = await SELECT.one.from(ProductSet).where({ ID:req.data.ID })
    if(!product){
      req.error(400, 'prodcte ID is not exist')
    }
    const newprice = product.Price * (1 - 30 / 100);
    await UPDATE(ProductSet).set({ Price: newprice }).where({ ID:req.data.ID });

    return `Discount applied. New price is ${newprice.toFixed(2)}`; 
    
    console.log('On applyDiscount', req.data)
    console.log('On applyDiscount', req.data)
    console.log('On applyDiscount', req.data)
    console.log('On applyDiscount', req.data)
  })



  return super.init()
}}
