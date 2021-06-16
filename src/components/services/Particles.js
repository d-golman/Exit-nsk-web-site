import React, { Component } from "react";
import Particles from "react-particles-js";

class Canvas extends Component {
    state = { width: "0px", height: "0px" };
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }
    updateWindowDimensions = () => {
        setTimeout(() => {

            this.setState({
                width: `${window.innerWidth - 30}px`,
                height: `${document.body.scrollHeight - 30}px`
            });
        }, 500)
    }
    render() {
        return (
            <Particles
                {...this.state}
                params={{
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: "rgba(34, 119, 184,0.65)"
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 0.4,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable_auto: true,
                            distance: 100,
                            color: "rgba(34, 119, 184,0.8)",
                            opacity: 1,
                            width: 1,
                            condensed_mode: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 600
                            }
                        },
                        move: {
                            enable: true,
                            speed: 1.3,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: false
                            },
                            onclick: {
                                enable: false
                            },
                            resize: true
                        }
                    },
                    retina_detect: true
                }}
            />
        );
    }
}

export default Canvas;
