import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        const storeCount = localStorage["pageVisit"];

        if (storeCount) {
            setCount(Number(storeCount) || 0);
        }

        setCount((prevPageViews) => {
            const newPageViews = prevPageViews + 1;
            localStorage.setItem('pageVisit', newPageViews);
            return newPageViews;
        });

        console.log(`count = ${localStorage["pageVisit"]}`);
    }, []);

    return (
        <div> <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.5em' }} /> {count} </div>

    )
}

