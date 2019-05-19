import React from 'react';
import CommunityList from '../communities/CommunityList';


const Dashboard = () => {
    const communities = [
        {
            name: 'Front-end Brasil',
            img: 'https://raw.githubusercontent.com/frontendbr/brand/master/src/png/logo-600px--horizontal--color.png',
            id: 'frontendbr',
            path: 'frontendbr/vagas'
        },
        {
            name: 'Back-end Brasil',
            img: 'https://avatars3.githubusercontent.com/u/30732658?v=4&s=200.jpg',
            id: 'backend-br',
            path: 'frontendbr/vagas'
        },
        {
            name: 'Android Dev BR',
            img: 'https://avatars3.githubusercontent.com/u/13825651',
            id: 'androiddevbr',
            path: 'frontendbr/vagas'
        },
        {
            name: 'React Brasil',
            img: 'https://avatars2.githubusercontent.com/u/16929016?s=200&v=4',
            id: 'react-brasil',
            path: 'frontendbr/vagas'
        },
        {
            name: 'Vue.js Brasil',
            img: 'https://avatars1.githubusercontent.com/u/13300590?s=200&v=4',
            id: 'vuejs-br',
            path: 'frontendbr/vagas'
        },
        {
            name: 'PHP DEV BRASIL',
            img: 'https://avatars0.githubusercontent.com/u/21205969?v=3&u=811926aba01e8a43d7a8ffda50b7b66a57ccdd0a',
            id: 'phpdevbr',
            path: 'frontendbr/vagas'
        },
        {
            name: 'Cangaceiros Developers',
            img: 'https://avatars1.githubusercontent.com/u/21087342',
            id: 'CangaceirosDevels',
            path: 'frontendbr/vagas'
        },
        {
            name: 'CocoaHeads Brasil',
            img: 'https://avatars1.githubusercontent.com/u/7914270',
            id: 'CocoaHeadsBrasil',
            path: 'frontendbr/vagas'
        }
    ]
    
    return (
        <div className="container">
            <CommunityList list={communities} />
        </div>
    )
}

export default Dashboard;