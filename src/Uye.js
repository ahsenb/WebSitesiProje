import axios from 'axios';

const url = 'http://localhost:5000/api/uye';

class Uye{
    //Get Posts
    static getPosts(){
     return new Promise (async (resolve, reject) =>{
         try{
             const res = await axios.get(url);
             const data = res.data;
             resolve(
                 data.map(post => ({
                     ...post,
                     createdAt: new Date(post.createdAt)
                 }))
             );

         }catch(err){
             reject(err);
         }
     })
    }
     //create Posts
     static insertPost(kul,sif){
         return axios.post(url,{
             kul,
             sif
         } );
     }


     //Delete Posts
     static deletePost(id){
         return axios.delete(`${url} ${id}`);
     }
}


export default Uye