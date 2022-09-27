import react, {useState, useEffect} from 'react';



export default function slidePic(sec = 1000, images = []) {
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


}