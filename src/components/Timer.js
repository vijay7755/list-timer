import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { deleteUser, updateSelectedUser } from '../store/actions/actions'


const Action = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`

const Button = styled.button`
    height: auto;
    width: max-content;
    font-weight: bolder;
    font-size: 1.5rem;
    background-color: ${props => !props.timerOn ? "#cc0721" : "#a1a1a1"};
    color: ${props => !props.timerOn ? "white" : "black"};
    border: none;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    text-align: center;

    .timer {
        color: red;
        border: 3px solid red;
        border-radius: 50%;
        padding: 2px 6px;
    }

`

const Timer = ({ user, users, deleteUser, updateSelectedUser }) => {
    const limit = 10
    const [timerOn, setTimerOn] = useState(false)
    const [timeLimit, setTimeLimit] = useState(limit)

    useEffect(() => {
        let timer = null

        if (timerOn) {

            timer = setTimeout(() => {
                deleteUser(user)
                if (users.length <= 1) {
                    updateSelectedUser({})
                }
                setTimerOn(false)
                setTimeLimit(limit)
            }, +`${limit}000`)
        }
        else {
            setTimeLimit(limit)
            clearTimeout(timer)
        }

        return () => clearTimeout(timer)

    }, [timerOn])

    useEffect(() => {
        let interval = null
        if (timerOn) {
            interval = setInterval(() => {
                setTimeLimit(prev => prev - 1)
            }, 1000)
        }
        else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerOn])


    const Cancel = () => {
        return (
            <>
                <span>{`Cancel `}</span>
                <span className='timer'>{`${timeLimit}`}</span>
            </>
        )
    }

    return (
        <Action>
            <Button
                timerOn={timerOn}
                onClick={() => setTimerOn(!timerOn)}
            >
                {timerOn ? <Cancel /> : "Delete"}
            </Button>
        </Action>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { deleteUser, updateSelectedUser })(Timer)
