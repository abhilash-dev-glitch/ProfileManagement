const mongoose = require('mongoose');
const Profile = require('./models/Profile');
require('dotenv').config();

console.log('Seeder script started...');

const profiles = [
    {
        name: 'Saksham Arora',
        title: 'MBA Candidate | Tech Enthusiast',
        bio: 'I am Saksham Arora, a 25-year-old MBA candidate at TAPMI, Bengaluru (2024-2026), with a B.Tech in Electronics & Communication (CGPA 7.99). I bring 36 months of experience, including boosting system scalability by 30% and earning the Rise Insta Award at Infosys for initializing backend efficiency by 20%.',
        avatarUrl: 'https://i.pravatar.cc/150?u=saksham',
        email: 'saksham.arora@example.com',
        phone: '+91 98765 43210',
        location: 'Bengaluru, India',
        skills: ['Python', 'SQL', 'Java', 'IoT', 'ReactJS'],
        projects: [
            {
                title: 'ONDC Case Study',
                description: 'Strategic analysis of ONDC implementation.',
                imageUrl: 'https://via.placeholder.com/300x200?text=ONDC'
            },
            {
                title: 'Jal Jeevan Mission',
                description: 'Case study on water supply management.',
                imageUrl: 'https://via.placeholder.com/300x200?text=Jal+Jeevan'
            },
            {
                title: 'FinEasy Case Study',
                description: 'Financial technology adoption analysis.',
                imageUrl: 'https://via.placeholder.com/300x200?text=FinEasy'
            }
        ],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/sakshamarora',
            github: 'https://github.com/sakshamarora',
            twitter: 'https://twitter.com/sakshamarora'
        }
    },
    {
        name: 'John Doe',
        title: 'Full Stack Developer',
        bio: 'Experienced Full Stack Developer with a passion for building scalable web applications. Proficient in MERN stack and cloud technologies.',
        avatarUrl: 'https://i.pravatar.cc/150?u=johndoe',
        email: 'john.doe@example.com',
        phone: '+1 123 456 7890',
        location: 'New York, USA',
        skills: ['JavaScript', 'Node.js', 'React', 'MongoDB', 'AWS'],
        projects: [
            {
                title: 'E-commerce Platform',
                description: 'A full-featured e-commerce site with payment gateway.',
                imageUrl: 'https://via.placeholder.com/300x200?text=E-commerce'
            },
            {
                title: 'Task Manager',
                description: 'Productivity app for teams.',
                imageUrl: 'https://via.placeholder.com/300x200?text=Task+Manager'
            }
        ],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe'
        }
    },
    {
        name: 'Jane Smith',
        title: 'UI/UX Designer',
        bio: 'Creative UI/UX Designer with a keen eye for detail. I create intuitive and visually appealing user interfaces.',
        avatarUrl: 'https://i.pravatar.cc/150?u=janesmith',
        email: 'jane.smith@example.com',
        phone: '+44 20 1234 5678',
        location: 'London, UK',
        skills: ['Figma', 'Adobe XD', 'Sketch', 'HTML', 'CSS'],
        projects: [
            {
                title: 'Mobile App Redesign',
                description: 'Redesigning a popular fitness app.',
                imageUrl: 'https://via.placeholder.com/300x200?text=App+Redesign'
            },
            {
                title: 'Portfolio Website',
                description: 'Personal portfolio for a photographer.',
                imageUrl: 'https://via.placeholder.com/300x200?text=Portfolio'
            }
        ],
        socialLinks: {
            linkedin: 'https://linkedin.com/in/janesmith',
            website: 'https://janesmith.design'
        }
    }
];

const MONGO_URI = process.env.MONGO_URI;
console.log('Connecting to MongoDB at:', MONGO_URI);

mongoose.connect(MONGO_URI)
    .then(async () => {
        console.log('Connected to MongoDB');
        try {
            console.log('Deleting old profiles...');
            await Profile.deleteMany({});
            console.log('Old profiles deleted.');

            console.log('Inserting new profiles...');
            await Profile.insertMany(profiles);
            console.log('Data seeded successfully');
            process.exit(0);
        } catch (innerErr) {
            console.error('Error during seeding operations:', innerErr);
            process.exit(1);
        }
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });
