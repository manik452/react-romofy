import axios from "../../api/DadJokes";
import useAxios from "../../hooks/useAxios";



const Jokes = () => {
    const [joke, error, loading] = useAxios({
        axiosInstance: axios,
        method: 'GET',
        url: '/joke',
        requestConfig: {
            headers: {
                'Content-Language': 'en-US'
            }
        }
    })

    return (
        <article>
            <p>Jokes {joke?.joke }</p>
            {loading && <p> Loading ...</p>}
            {!loading && error && < p className="errMsg"> {error}</p>}
            {!loading && !error && joke && < p > {joke?.joke}</p>}
            {!loading && !error && !joke && < p > No Dad Joke</p>}
        </article>
        )
}

export default Jokes;