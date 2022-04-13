import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: {type: String, default: 'new Tuit'},
    dislikes: {type : Number, default: 0},
    likes: {type: Number, default: 0},
    username: {type: String, default: 'JOJO'},
    handle : {type: String, default: 'jojo'},
    time: {type: String, default: 'one second ago'},
    withTuit: {type : Boolean, default: true},
    image: {type : String, default: '../../../images/bookmarks1.jpg'},
    avatar: {type : String, default: '../../../images/3.jpg'},
    liked: {type : Boolean, default: false},
    disliked: {type : Boolean, default: false}
    // postedBy: {
    //     username: String
    // }

}, {collection: 'tuits'});
export default schema;

