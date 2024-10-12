const mongoose = require('mongoose');
const ComLinkSchema = new mongoose.Schema({
    p_fname: {
        type: String
    },
    p_lname: {
        type: String
    },
    p_email: {
        type: String
    },
    p_village: {
        type: String
    },
    p_pass: {
        type: String
    },
    p_cpass: {
        type: String
    },
    p_content: {
        type: String
    }
});
const ComLink = mongoose.model('ComLink', ComLinkSchema);
module.exports = ComLink;