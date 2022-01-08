import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'


const MainContainer = styled.div`
    display: block;
    height: 90vh;
    overflow-y: auto;
    width: 75vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        text-align: center;
        color: #757575;
    }
    h5 {
        margin-block-start: 0.3rem;
        margin-block-end: 0.3rem;
    }
`

const ProfileImg = styled.div`
    display: flex;
    height: 10rem;
    width: 10rem;
    justify-content: center;
    align-items: center;
    border-radius: 10%;

    img {
        border-radius: 10%;
        box-shadow: 1px 2px 15px 5px #808080;
    }
`

const DetailPage = ({ user }) => {

    const detail = () => {
        if (Object.keys(user).length) {
            const profilePic = user.picture.large
            const name = `${user.name.title}. ${user.name.first} ${user.name.last}`
            const username = user.login.username
            const email = user.email
            return (
                <>
                    <h1>User Details</h1>
                    <ProfileImg>
                        <img src={profilePic} alt='profilePic' />
                    </ProfileImg>
                    <h2>{name}</h2>
                    <h5>{`Username: ${username}`}</h5>
                    <h5 style={{marginBottom: "2.5rem"}}>{`Email: ${email}`}</h5>
                </>
            )
        }

    }

    return (
        <MainContainer>
            {detail()}
        </MainContainer>
    )
}

const mapStateToProps = state => {
    return {
        user: state.selectedUser
    }
}

export default connect(mapStateToProps)(DetailPage)
