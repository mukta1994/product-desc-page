'use strict';


const productss = {
    id: 1,
    name: "Shoes",
    dimensions: {
      colors: [{
        title: "White",
        images: [
          { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/26957f977ecf4119879caa7600ff0f1b_9366/OZWEEGO_Schoenen_Wit_EE6464_01_standard.jpg",alt:"white shoe1", text: "img1" },
          { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/db706df17193440288cfac3700b32b56_9366/OZWEEGO_Schoenen_Wit_EE6464_HM1_hover.jpg",alt:"white shoe1", text: "img2" },
          { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f98899a2f60e471b94d6ac3700c99e75_9366/OZWEEGO_Schoenen_Wit_EE6464_HM2.jpg",alt:"white shoe1", text: "img3" },
  
        ],
      }, {
        title: "Green",
        images: [
          { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/769cff15ad0d49f59d77acae00995cd3_9366/OZWEEGO_Schoenen_Groen_GW2543_01_standard.jpg",alt:"green shoe1", text: "img1" },
          { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3f0175b581454146bf7aacae00b3f306_9366/OZWEEGO_Schoenen_Groen_GW2543_012_hover_standard.jpg",alt:"green shoe1", text: "img2" },
          { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/61618bf9cbc24599a567acae00996349_9366/OZWEEGO_Schoenen_Groen_GW2543_06_standard.jpg",alt:"green shoe1", text: "img2" },
          { src: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/aec0789b4d024942a607acae009984f1_9366/OZWEEGO_Schoenen_Groen_GW2543_41_detail.jpg",alt:"green shoe1", text: "img2" },
        ],
      }],
      sizes: [{
        title: "36",
      },
      {
        title: "38",
      }],
    },
    subproducts: [{
      id: 1,
      title: "Sport Shoe Green 36",
      desc: "used in sports",
      size: "36",
      quantity: 3,
      stocks: false,
      Price: 10,
      main: "Path",
      color: "Green",
      images: [],
    }, {
      id: 2,
      title: "Sport Shoe White 38",
      desc: "used in sportssssss",
      size: "38",
      quantity: 0,
      outOfStock: false,
      Price: 10,
      main: "path",
      color: "White",
      images: [],
  
    }, {
      id: 3,
      title: "Sport Shoe Green 38",
      desc: "used in sports",
      size: "36",
      quantity: 3,
      outOfStock: false,
      Price: 10,
      main: "path",
      color: "Green",
      images: [],
  
    }, {
      id: 4,
      title: "Sport Shoe White 36",
      desc: "used in sports",
      size: "38",
      quantity: 3,
      outOfStock: false,
      Price: 10,
      main: "path",
      color: "White",
      images: [],
  
    },]
  }

var controllers = {
   about: function(req, res) {
    res.json(productss)
   }
};

module.exports = controllers;