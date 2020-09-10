import mongoose from 'mongoose'
import CONFIG from '../../config';
const {DB} = CONFIG;

const Videos = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    s3_url: {
        type: String,
        default: null
    },
    download_url:{
        type: String,
        default: null
    },
    source_url: {
        type: String
    },
    download_id:{
        type: String,
        default: null
    },
    is_downloaded:{
        type: Boolean, 
        default : DB.DEFAULT_FALSE 
    },
    poster_url: {
        type: String
    },
    video_link_url:{
        type: String
    },
    total_duration:{
        type: Number //IN SECONDS
    },
    thumb_video_preview:{
        type: String,
        unique: true
    },
    views: {
        type: Number, 
        default : DB.DEFAULT_COUNT
    },
    video_badge: {
        type: String
    },
    total_likes_count: {
        type: Number, 
        default : DB.DEFAULT_COUNT
    },
    total_dislikes_count: {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    websites:[{ type: String }],
    profiles: [{   
        type: mongoose.Schema.ObjectId,
        ref: 'profiles'
    }],
    categories : [{ type: String }],
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

export default mongoose.model('videos', Videos);