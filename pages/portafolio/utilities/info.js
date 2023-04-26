export const info={
    firstName:'Zaida',
    lastName:'Araca Villca',
    position: ' a full Stack Developer',
    links:[
        {
            name:'Home',
            to:'/',
            active:'home'
        },
        {
            name:'About',
            to:'/about',
            active:'about'
        }
    ],
    miniBio:[
        {
            emoji: '🥗',
            text: 'fueled by salad'
        },
        {
            emoji: '🌎',
            text: 'software system enginner'
        },
        {
            emoji: '📧',
            text: 'zaid.araca89@gmail.com'
        }
    ],
    socials:[
        {
            link:'https://facebook.com',
            icon: 'fa fa-facebook'
        },
        {
            link:'https://instagram.com',
            icon: 'fa fa-instagram'
        },
        {
            link:'https://github.com',
            icon: 'fa fa-github'
        },
        {
            link:'https://linkedin.com',
            icon: 'fa fa-linkedin'
        },
        {
            link:'https://twitter.com',
            icon: 'fa fa-twitter'
        }
    ],
    bio: 'Hello! I am Zaida. I am a Systems Enginnering student. I study at U.A.T.F. enjoy'+
         'long walks whit friends whit friends, and believe that artificial intelligence will inevitably'+
         'rule us all one day. Put Study Desirve to Matter!',
    skills:{
        proficientWhith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5','css3', 'figma',
                         'storybook', 'sass'],
        exposedTo: ['nodejs','laravel']
    },
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'play',
            emoji: '💿'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label:'cooking',
            emoji: '🍃'
        }
        
    ]
};
export const InfoContext = React.createContext(info);