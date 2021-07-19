const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLString
  } = require('graphql');
  
  const {
    getProducts,
    getMetadata,
    getMetadatas,
    getProduct,
    getsubproduct,
    getVariant
  } = require('./controller');
  
  const metaType = new GraphQLObjectType({
    name: 'Metadata',
    description: 'A metadata',
    fields: () => ({
      pid: {
        type: GraphQLInt,
        description: 'The id of Review.',
      },
      title: {
        type: GraphQLString,
        description: 'The title of the metadata.',
      },
      desc: {
        type: GraphQLString,
        description: 'The desc of the metadata.',
      }
  
    })
  })
  
  const productType = new GraphQLObjectType({
    name: 'Product',
    description: 'A product',
    fields: () => ({
      id: {
        type: GraphQLNonNull(GraphQLString),
        description: 'The id of Product.',
      },
      name: {
        type: GraphQLString,
        description: 'The name of the Product.',
      },
      subproducts: {
        type: new GraphQLList(subproductType),
        description: 'The description of the Product.',
      },
      dimensions: {
        type: dimensionType
      }
    })
  });
  
  const dimensionType = new GraphQLObjectType({
    name: "Dimensions",
    fields: () => ({
      colors: { type: new GraphQLList(colorsType) },
      sizes: { type: new GraphQLList(sizesType) },
    })
  })
  
  const colorsType = new GraphQLObjectType({
    name: 'Colors',
    fields: () => ({
      title: { type: GraphQLString },
      images: { type: new GraphQLList(imgType) }
    })
  })
  
  const imgType = new GraphQLObjectType({
    name: 'Images',
    fields: () => ({
      src: { type: GraphQLString },
      alt: { type: GraphQLString },
  
    })
  })
  
  const sizesType = new GraphQLObjectType({
    name: 'Sizes',
    fields: () => ({
      title: { type: GraphQLString },
    })
  })
  
  
  const subproductType = new GraphQLObjectType({
    name: 'Subproducts',
    fields: () => ({
      id: { type: GraphQLInt },
      title: { type: GraphQLString },
      desc: { type: GraphQLString },
      size: { type: GraphQLString },
      quantity: { type: GraphQLInt },
      Price: { type: GraphQLInt },
      main: { type: GraphQLString },
      color: { type: GraphQLString },
    })
  })
  
  
  const VariantType = new GraphQLObjectType({
    name: 'Variant',
    fields: () => ({
      product: { type: subproductType },
      images: {type: new GraphQLList(imgType) }
    })
  })
  
  
  const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      subproduct: {
        type: subproductType,
        args: {
          title: { type: GraphQLString }
        },
        resolve: (root, args) => getsubproduct(args),
      },
      products: {
        type: productType,
        resolve: (root) => getProducts(),
      },
      subproducts: {
        type: new GraphQLList(subproductType),
        args: {
          pid: { type: GraphQLInt },
        },
        resolve: (root, args) => getSubproducts(args),
      },
      metadatas: {
        type: new GraphQLList(metaType),
        resolve: (root) => getMetadatas(),
      },
      metadata: {
        type: metaType,
        args: {
          pid: { type: GraphQLInt },
        },
        resolve: (root, args) => getMetadata(args),
      },
      variant: {
        type: VariantType,
        args: {
          title: { type: GraphQLString }
        },
        resolve: (root,args) => getVariant(args)
      }
    }),
  });
  
  module.exports = new GraphQLSchema({
    query: queryType,
    types: [productType, subproductType, metaType, dimensionType,VariantType],
  });