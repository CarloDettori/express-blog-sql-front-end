import { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import axios from "axios"


const postsUrl = "http://localhost:3000"
function MainComponent() {
    let [publishedPosts, setPublishedPosts] = useState([])
    useEffect(() => {
        getData()
    }, []);
    //console.log(publishedPosts)

    function getData() {
        axios
            .get(postsUrl + "/posts/")
            .then((res) => {
                console.log(res.data.data)
                setPublishedPosts(res.data.data.filter((post) => {
                    return post;

                }))
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {

            })
    }
    //console.log(publishedPosts)
    function deleteItem(id) {
        setPublishedPosts(publishedPosts.filter((el) => el.id !== id));
    }


    return (
        <>
            <main>
                <div className="d-flex flex-wrap">
                    {publishedPosts.map((post) => (
                        <CardComponent key={`card-${post.id}`} el={post} onDelete={deleteItem} />
                    ))}

                </div>
            </main>
        </>
    )
}

export default MainComponent;