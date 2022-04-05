import posts from './tuits.js'

let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';

    newTuit.liked = false;
    newTuit.disliked = false;

    newTuit.dislikes = 0;
    newTuit.likes = 0;
    newTuit.comments = 0;
    newTuit.retuits = 0;
    newTuit.avatar = '../../../images/3.jpg';
    newTuit.username = 'Bruno Bucciarati';
    newTuit.handle = 'bruno_bucciarati';
    newTuit.time = '1 second ago';
    newTuit.withTuit = true;
    newTuit.image = '../../../images/bookmarks1.jpg';
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) => {
    res.json(tuits);
}
const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params['tid'];
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}
const deleteTuit = (req, res) => {
    const tuitIdToDelte = req.params['tid'];
    tuits = tuits.filter(t => t._id !== tuitIdToDelte);
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

