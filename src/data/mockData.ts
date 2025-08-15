import { Award, BookOpen, FlaskConical, Heart, LucideProps, Palette, Target, Users } from 'lucide-react';

// You can define more specific types if needed
type IconComponent = React.FC<LucideProps>;

export const mockData = {
    whyChooseUsItems: [
        { icon: Award as IconComponent, title: 'Holistic Curriculum', text: 'Our unique curriculum is designed for complete child development.' },
        { icon: Users as IconComponent, title: 'Passionate Educators', text: 'Our dedicated staff are experts in early childhood education.' },
        { icon: Heart as IconComponent, title: 'Safe & Nurturing Environment', text: 'A secure and stimulating environment for your child to thrive.' },
        { icon: Target as IconComponent, title: 'Building Future Skills', text: 'We prepare children for formal schooling and life-long learning and formal schooling' },
    ],
    programs: [
        {
            name: 'Day Care',
            age: 'Flexible Timings',
            desc: 'A warm, secure space where children are lovingly cared for through guided play, rest, and engaging daily routines.',
            points: [
                'Safe, homely environment with caring supervision',
                'Flexible hours to suit working parents',
                'Engaging daily routines with play, meals, and rest',
                'Age-appropriate guided activities promoting social and emotional development'
            ],
            img: '/images/todler.png',
            bgColor: '#fe6f59'
        },
        {
            name: 'Playgroup',
            age: '2-3 Years',
            desc: 'A playful first step into learning, helping toddlers explore the world through music, stories, and interactive fun.',
            points: [
                "Settling-in with social interaction, bonding, and sensory exploration",
                "Early speech and communication through rhymes, songs, and conversations",
                "Structured, playful activities to build focus, coordination, and learning through music and movement"
            ],
            img: '/images/playgroup.png',
            bgColor: '#9fd6ed'
        },
        {
            name: 'Nursery',
            age: '3-4 Years',
            desc: 'Through fun, hands-on activities, children learn to speak with ease, move with confidence, and make friends.',
            points: [
                "Hands-on learning in literacy, numeracy, and fine motor skills",
                "Speech and communication development through stories, conversation, and role-play",
                "Creativity, social interaction, independence, and confidence in a nurturing environment"
            ],
            img: '/images/nursery.png',
            bgColor: '#4bd8c9'
        },
        {
            name: 'Junior KG',
            age: '4-5 Years',
            desc: 'Structured learning in phonics, numbers, and creativity, encouraging independence and confidence.',
            points: [
                "Structured phonics learning to strengthen reading, speaking, and communication skills",
                "Introduction to numbers, counting, basic problem-solving, and independent task completion",
                "Art, music, storytelling, group activities, and role play to spark imagination, build confidence, and encourage social interaction"
            ],
            img: '/images/kg1.png',
            bgColor: '#ffe3e1'
        },
        {
            name: 'Senior KG',
            age: '5-6 Years',
            desc: 'Preparing children for formal school with a strong focus on reading, reasoning, and communication.',
            points: [
                "Structured academic foundation for Grade 1 readiness, focusing on reading fluency, vocabulary, and sentence formation",
                "Enhanced numeracy and thinking skills through number sense, problem-solving, and logical reasoning",
                "Holistic growth via communication, creativity, independence, discipline, and positive social behavior"
            ],
            img: '/images/kg2.png',
            bgColor: '#c1d5ae'
        },
    ],
    // testimonials: [
    //     { name: 'Aarav\'s Parent', text: '"Keiko Kids has been a second home for our son. The teachers are amazing and the curriculum is fantastic!"' },
    //     { name: 'Priya\'s Parent', text: '"We\'ve seen remarkable development in our daughter\'s confidence and social skills. Highly recommended!"' },
    //     { name: 'Rohan\'s Parent', text: '"The focus on play-based learning makes every day exciting for the children. A great preschool!"' },
    // ],
    galleryImages: [
        '/images/about-us.jpg',
        '/images/home-hero.jpg',
        '/images/playarea.jpg',
        '/images/curriculum.jpg',
        '/images/activities.jpg',
        '/images/programs.jpg',
    ],
    curriculumItems: [
        { icon: BookOpen, title: 'Language & Literacy', text: 'Developing reading, writing, and communication skills through stories, phonics, rhymes, and role play activities.' },
        { icon: Palette, title: 'Creative Arts', text: 'Fostering imagination and self-expression through hands-on learning activities like drawing, painting, and crafts' },
        { icon: FlaskConical, title: 'STEM', text: 'Hands-on science, math, and activities that spark curiosity, build problem-solving skills, and introduce young minds to the world of technology in a fun and playful way.' },
    ],
    socialMedia: [
        { icon: '/images/facebook.png', link: 'https://www.facebook.com/people/Keiko-kids/61578728698763/', alt: 'facebook' },
        { icon: '/images/instagram.png', link: 'https://www.instagram.com/keiko_kids_pune', alt: 'instagram' },
    ]
};
