import mongoose from 'mongoose'
import CONFIG from '../../config';
const {DB} = CONFIG;

const Categories = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    videos_count : {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    videos_downloaded : {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated:{ 
        type: Date
    },
    comment: {
        type: String
    }
})

export default mongoose.model('categories', Categories);