particlesJS("particles-js", {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 1,
                size_max: 10,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: true,
            out_mode: "bounce",
            bounce: true,
            attract: {
                enable: false,
            }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            resize: true
        }
    }
});