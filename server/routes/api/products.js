const express = require ('express');
const mongodb = require ('mongodb');
const router= express.Router();

// get posts
router.get('/', async (rew, res) => {
    const uye = await loadPostsCollection();
    res.send(await uye.find({}).toArray());
});
//add post
router.post('/', async (req, res) => {
    const products= await loadPostsCollection();
    await products.insertOne({
        isim: req.body.isim,
        fiyat: req.body.fiyat
    });
    res.status(201).send();
});

//delete post
router.delete('/:id', async (req,res) => {
    const products = await loadPostsCollection();
    await products.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
});

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://admin2:admin2@cluster1-ihhbc.gcp.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser: true
    });
    return client.db('amway').collection('products');
}
module.exports = router;