import axios from "axios";
import { useEffect, useState } from "react"

const useAppData = () => {

    const [appData, setAppData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios('../appsData.json')
            .then(data => setAppData(data.data))
            .catch(error => setErr(error))
            .finally(() => setLoading(false))
    }, [])
    console.log(appData)
    return [appData, loading, err];
}
export default useAppData;