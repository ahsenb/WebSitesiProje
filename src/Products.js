import axios from 'axios';

const url = 'http://localhost:5000/api/products/';

class Products{
    //Get Posts
    static getPosts(){
     return new Promise (async (resolve, reject) =>{
         try{
             const res = await axios.get(url);
             const data = res.data;
             resolve(
                 data.map(post => ({
                     ...post                     
                 }))
             );

         }catch(err){
             reject(err);
         }
     })
    }
     //create Posts
     static insertPost(isim,fiyat){
         return axios.post(url,{
             isim,
             fiyat
         } );
     }


     //Delete Posts
     static deletePost(id){
         return axios.delete(`${url} ${id}`);
     }
}


export default Products