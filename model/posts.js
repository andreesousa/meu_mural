module.exports = {

   posts : [
      {
         id: "1",
         title: "Teste do Mural UM",
         description: "Descrição do mural UM"
      },
   ],

   getAll(){
      return this.posts;
   },

   newPost(title,description){
      this.posts.push({id: generateID(), title, description});
   },

   deletePost(id){
      
   },

   

}

function generateID() {
   return Math.random().toString(36).substring(2,9);
}

