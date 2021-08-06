import React from 'react';

const data = {
    velopert: {
        name: '이태웅',
        description: '리액트를 좋아하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: 'ㅇㄴㄴㅁ'
    }
}

const Profile = ({ match }) => {
    const { username } = match.params;

    console.log(username);

    const profile = data[username];

    

    if (!profile) {
        return <div>존재하지 않는 사용자 입니다.</div>
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>
                {profile.description}
            </p>
        </div>
    )

    
}

export default Profile;