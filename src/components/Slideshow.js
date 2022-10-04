import react, {useState, useEffect} from 'react';
import { CSSTransition } from "react-transition-group";
import styles from "./Slideshow.module.scss";

export default function Showcase(sec = 1000, images = []) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => {
                return count >= images.length - 1 ? 0 : count + 1;
            });
        }, sec)
        return () => {
            clearInterval(interval);
        };
    }, [images, sec]);
    const slide = Object.keys(images).map((image, index) => {
        return (
            <CSSTransition
                key={index}
                timeout={sec}
                in={index === count}
                classNames="fade"
                unmountOnExit
            >
                <div style={{ backgroundImage: `url(${image}}` }} />
            </CSSTransition>
        );
    });
    return <section className={styles.showcase}>{slide}</section>
}