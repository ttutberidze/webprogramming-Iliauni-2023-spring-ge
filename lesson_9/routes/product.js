const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.url, req.query);
    res.sendFile(path.join(__dirname, '../', 'views', 'product.html'));
})

router.post('/', (req, res) => {
    console.log(req.url, req.query);
    res.send('Product was created');
})

// router.put('/:productId', (req, res) => {
//     try {
//         const {productId} = req.params;
//         if(parseInt(productId)) {
//             res.send('Product Updated');
//         }
//         throw new Error('Unexpected Error');
//     }catch(err) {
//         res.status(500).send(err.message)
//     }
// })

router.put('/:productId', (req, res) => {
    const {productId} = req.params;
    console.log(req.body);
    console.log(parseInt(productId));
    if(parseInt(productId)) {
        return res.send('Product Updated');
    }
    throw new Error('Unexpected Error');
})

module.exports = {
    router
};