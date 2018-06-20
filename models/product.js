const restful = require('node-restful');
const mongoose = restful.mongoose;

const productsSchema = new mongoose.Schema({
	name: String,
	sku: String,
	price: Number
})

module.exports = restful.model('Products', productsSchema);