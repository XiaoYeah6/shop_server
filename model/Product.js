const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: Schema.Types.ObjectId,
    title: String,
    img: String,
    price: Number,
    attr: {
        region: String,
        publish: String,
        writer: String
    }
    
});

mongoose.model('Product', productSchema);
