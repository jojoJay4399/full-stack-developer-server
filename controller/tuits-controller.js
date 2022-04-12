//import posts from './tuits.js'
import * as tuitsDao from "../tuits/tuits-dao.js";

//let tuits = posts;

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}




// const createTuit = (req, res) => {
//     const newTuit = req.body;
//     newTuit._id = (new Date()).getTime() + '';
//
//     newTuit.liked = false;
//     newTuit.disliked = false;
//
//     newTuit.dislikes = 0;
//     newTuit.likes = 0;
//     newTuit.comments = 0;
//     newTuit.retuits = 0;
//     newTuit.avatar = '../../../images/3.jpg';
//     newTuit.username = 'Bruno Bucciarati';
//     newTuit.handle = 'bruno_bucciarati';
//     newTuit.time = '1 second ago';
//     newTuit.withTuit = true;
//     newTuit.image = '../../../images/bookmarks1.jpg';
//     tuits.push(newTuit);
//     res.json(newTuit);
// }
//
// const findAllTuits = (req, res) => {
//     res.json(tuits);
// }
// const updateTuit = (req, res) => {
//     const tuitIdToUpdate = req.params['tid'];
//     const updatedTuit = req.body;
//     tuits = tuits.map(t => t._id === tuitIdToUpdate ? updatedTuit : t);
//     res.sendStatus(200);
// }
// const deleteTuit = (req, res) => {
//     const tuitIdToDelte = req.params['tid'];
//     tuits = tuits.filter(t => t._id !== tuitIdToDelte);
//     res.sendStatus(200);
// }
//
//
export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

