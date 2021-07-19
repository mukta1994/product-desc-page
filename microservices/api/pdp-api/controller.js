const fetch = require('node-fetch');

const getProducts = async() => {
  const res = await fetch('http://localhost:5001')
  const json = res.json();
  return json;
}

const getProduct = async(product) => {
  const products = await getProducts()
  return products.find(p => p.id == product);
} 

const getDimensions = async() => {
  const products = await getProducts()
  return products.dimensions;
}

const getsubproduct = async(args) => {
  const products = await getProducts()
  return products.subproducts.find(p => p.title == args.title);
}

const getVariant = async(args) => {
  const products = await getProducts()
  let subprod = {}
  subprod.product =  products.subproducts.find(p => p.title == args.title);
  subprod.images = (products.dimensions.colors.find(p => p.title == subprod.product.color)).images
  return subprod
}

const getMetadatas = async() => {
  const res = await fetch('http://localhost:3002')
  const data = res.json()
  return data
}

const getMetadata = async(args) => {
  const res = await getMetadatas()
  return res.find(p => p.pid === args.pid)
}

module.exports = {
  getProducts,
  getMetadata,
  getProduct,
  getsubproduct,
  getMetadatas,
  getDimensions,
  getVariant
}