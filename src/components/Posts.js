import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from '../api/jsonPH';
import { useEffect } from "react";


const Posts = () => {
    const [posts, error, loading, axiosFetch] = useAxiosFunction();

    const getData = () => {
        axiosFetch({
            axiosInstance: axios,
            method: 'GET',
            url: '/posts'
        });
    }

    useEffect(() => {
        getData();
        //eslint-disable-next line
    }, [])

    handleSubmit = () => {
        axiosFetch({
            axiosInstance: axios,
            method: 'POST',
            url: '/posts',
            requestConfig: {
                data: {
                    "name":"Manik Sarker"
                }
            }
        })

    }

    return (
        <div>
            <article>

            </article>
        </div>
        )
}

export default Posts;