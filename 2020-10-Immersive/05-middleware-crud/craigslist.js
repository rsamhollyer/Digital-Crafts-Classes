
const db = {

    12345: {
        title: 'seat covers',
        geolocation: '82.3243, 41.2343',
        condition: 'new',
        description: '8 of these',
        images: [
            'img1.jpg',
            'img2.jpg'
        ]
    }
    
}
    
// not really an express app!
// /nat/fuo/d/12345
app.get('/nat/fuo/d/:id', (req, res) => {
    // ?? do I need anything else from URL?
    //const id = req.prams.id;
    const { id } = req.params;
    const product = db[id];
    res.render('product-details', {
        locals: {
            // ?? where does the data come from?
            title: product.title,
            description: product.description,
            // ...etc.
        }
    });
});