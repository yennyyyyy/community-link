const ComLinkController = require('../controllers/comlink_controller');
 
module.exports = app => {
    app.get('/api/test',(req,res)=>{
        res.json({message:"the api is working"})}
        );
    app.post('/comlink/create',ComLinkController.newAccount);
    app.post('/comlink/feed',ComLinkController.newPost);
    app.get('/comlink/login/email/:pemail',ComLinkController.findUserbyEmail);
    app.get('/comlink/login/pass/:pcpass',ComLinkController.findUserbyPass);
    app.get('/comlink/id/:pid',ComLinkController.findPostByID);
    app.get('/comlink/posts/all',ComLinkController.findAllPost);
    app.put('/comlink/update/:pid',ComLinkController.findPostByIDandUpdate);
    app.get('/comlink/login/:pemail/:pcpass',ComLinkController.findUser);
    app.delete('/comlink/posts/delete/:pid',ComLinkController.findPostByIdDelete);
   
}
