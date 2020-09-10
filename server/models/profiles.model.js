import mongoose from 'mongoose'
import CONFIG from '../../config';
const {DB} = CONFIG;

const Profiles = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    profile_picture: {
        type: String
    },
    hair_color: {
        type: Number, 
        default : DB.DEFAULT_COUNT
    },
    height: {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    weight: {
        type: Number,
        default : DB.DEFAULT_COUNT 
    },
    tits_size: {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    gender: {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    profile_views: {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    source:{
        type: String
    },
    total_videos_views: {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    total_videos_count : {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    videos_count : {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    is_uploaded:{
        type: Boolean, 
        default : DB.DEFAULT_FALSE 
    },
    rating : {
        type: Number, 
        default : DB.DEFAULT_COUNT 
    },
    age_group:{
        type: Number
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

export default mongoose.model('profiles', Profiles);