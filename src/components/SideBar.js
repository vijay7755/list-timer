import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { updateSelectedUser } from '../store/actions/actions'
import Timer from './Timer'
import DetailPage from './DetailPage'


const MainContainer = styled.div`
        display: block;
        height: 90vh;
        overflow-y: scroll;
        background-color: transparent;
        width: 100vw;
    `

const Info = styled.h3`
        text-align: center;
        color: #757575;
    `

const List = styled.ul`
        width: 100%;
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
    `

const ListItem = styled.li`
        padding: 1.5rem;
        display: flex;
        flex-direction: row;
        border: 2px solid ${props => props.selected ? '#f506ad' : '#3b3b3b'};
        background-color: ${props => props.selected ? '#f8b9e5' : 'transparent'};

        .itemContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        }

        .detailContent {
            position: absolute;
            top: 0;
            right: 0;
            background-color: white;
            z-index: 10;
            border-left: 2px solid #3b3b3b;
        }
    `
const TimerDiv = styled.div`
    position: absolute;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
`

function usePrevious(userProp) {
    const ref = useRef()

    useEffect(() => {
        ref.current = userProp
    })

    return ref.current
}

const SideBar = ({ users, updateSelectedUser }) => {
    const [selected, setSelected] = useState(0)

    const prevUserProp = usePrevious(users)

    useEffect(() => {
        if (prevUserProp) {
            if (prevUserProp !== users && users.length) {
                setSelected(0)
                updateSelectedUser(users[0])
            }
        }
    }, [users])

    const handleSelect = (i) => {
        setSelected(i)
        updateSelectedUser(users[i])
    }

    return (
        <MainContainer>
            {users.length ?
                <List>
                    {
                        users.map((user, index) => {
                            const name = `${user.name.first} ${user.name.last}`
                            return (
                                <ListItem
                                    key={index}
                                    onClick={() => handleSelect(index)}
                                    selected={selected === index ? true : false}
                                >
                                    <div className='itemContent'>
                                        <h4>{name}</h4>
                                        <Timer user={user} />
                                    </div>
                                    <div className='detailContent'>
                                        {
                                            selected === index &&
                                            <DetailPage />
                                        }
                                        <TimerDiv>
                                            <Timer user={user} />
                                        </TimerDiv>
                                    </div>
                                </ListItem>
                            )
                        })
                    }
                </List> :
                <Info>Fecth users List</Info>
            }
        </MainContainer>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { updateSelectedUser })(SideBar)
