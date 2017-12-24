let books = [];
let id = 0;

module.exports = {
    create: function(req, res) { 
        let { title, author } = req.body;
        books.push({id, title, author });
        id++;  
        res.status(200).send( books );
    },

    read: function(req, res) {
        res.status(200).send(books);
    },

    update: function(req, res) {
        let index;
        books.forEach((e, i) => { 
            if(e.id == req.params.id) {
                index = i;
            }
        });

        books[index] = {
            title: req.body.title, 
            author: req.body.author
        };

        res.status(200).send(books)
    },

    delete: function(req, res) {
        books.forEach((el, i) => {
            if(el.id == req.params.id) {
                books.splice(i, 1);
            }
        });

        res.status(200).send(books);

        // var filtered = books.filter(e => e.id != req.params.id);
        // res.status(200).send(filtered)

    }
};
