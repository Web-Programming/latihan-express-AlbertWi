const mongoose = require('mongoose');

const applySchema = new mongoose.Schema({
  firstname: { 
    type: String, 
    required: true 
},
  lastname: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true 
}
});
const Apply = mongoose.model('Apply', applySchema);

module.exports = Apply;