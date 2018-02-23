import { TweenMax } from 'gsap';

export default {
    show(target, cb) {
        return TweenMax
            .staggerFrom(target, 0.2, {
                opacity: 0,
                y: 30, 
                ease: 1, 
                delay: 1
            }, 0.2)
    }
}