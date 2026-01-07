const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    skills: [{ type: String }],
    projects: [{
        title: { type: String },
        description: { type: String },
        imageUrl: { type: String }
    }],
    socialLinks: {
        linkedin: String,
        github: String,
        twitter: String,
        website: String
    }
});

module.exports = mongoose.model('Profile', ProfileSchema);
