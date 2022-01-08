import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { fetchUserList, updateSelectedUser } from '../store/actions/actions'



const Container = styled.div`
    width: 100%;
    height: 10vh;
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Count = styled.div`
    display: flex;
    flex-direction: row;
    width: max-content;
    height: 3rem;
    background-color: #c1cbdf;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;

    h3 {
        padding: 0 1rem;
        font-weight: bolder;
    }
`

const Fetch = styled.button`
    margin-right: 1rem;
    background-color: #f506ad;
    border-radius: 12px;
    border: none;
    padding: 0.8rem 1.5rem;
    transition: all 0.3s ease-in-out;
    font-weight: bolder;
    font-size: 20px;

    &:hover {
        background-color: #7e0158;
        color: white;
    }
`

const Header = ({users, fetchUserList, updateSelectedUser}) => {
    // const [loading, setLoading] = useState(false)

    const fetchUsers = () => {
        fetchUserList().then(res => {
            updateSelectedUser(res[0])
        })
    }

    return (
        <Container>
            <Count>
                <h3>Count: {users.length}</h3>
            </Count>
            <Fetch onClick={fetchUsers}>
                Fetch Users
            </Fetch>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUserList, updateSelectedUser })(Header)

