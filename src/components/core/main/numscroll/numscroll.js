import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './numscroll.sass'

const Numscroll = ({ quests }) => {




    useEffect(() => {
        const values = {
            'quests': quests.length,
            'teams': 6000,
            'players': 24000
        }

        const counter = (e) => {
            const numscroll = document.querySelector('.numscroll')
            const elements = numscroll ? [
                numscroll.querySelector('.quests'),
                numscroll.querySelector('.teams'),
                numscroll.querySelector('.players')
            ] : []
            elements.forEach(element => {
                if (numscroll.offsetTop < document.documentElement.clientHeight + window.scrollY) {
                    window.removeEventListener('scroll', counter)
                    let i = 0
                    setInterval(() => {
                        if (i <= values[element.className]) {
                            element.textContent = i
                            i += (() => {
                                if (values[element.className] < 10) { return 1 }
                                if (values[element.className] < 10000) { return 1000 }
                                if (values[element.className] < 100000) { return 3000 }
                            })()
                        }
                        else {
                        }
                    }, 100)
                }
            })

        }
        window.addEventListener('scroll', counter)
        return () => {
            window.removeEventListener('scroll', counter)
        }
    }, [quests])




    return (
        <div className='numscroll'>
            <div>
                <p className="quests">0</p>
                <p className="text">интересных <br />квестов</p>
            </div>
            <div>
                <p className="teams">0</p>
                <p className="text">команд <br />победителей</p>
            </div>
            <div>
                <p className="players">0</p>
                <p className="text">довольных <br />игроков</p>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    quests: state.quests
})


export default connect(mapStateToProps, mapDispatchToProps)(Numscroll)
