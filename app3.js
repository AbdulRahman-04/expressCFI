import axios from "axios"

async function url(route){

    try {

        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        console.log(response.data.forEach((x)=>{
            console.log(x.title, x.id);
            
            
        }))
    } catch (error) {
        console.log(error);
        
    }
}
url('posts');