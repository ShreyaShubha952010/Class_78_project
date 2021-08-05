var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://img.favpng.com/1/6/13/father-child-cartoon-png-favpng-xymLiBAEbkeDuCmt4DZSjLYYZ.jpg", "https://static.vecteezy.com/system/resources/previews/002/275/555/original/mother-and-daughter-sitting-on-the-floor-cartoon-illustration-vector.jpg" , "https://i.pinimg.com/736x/f7/b8/5e/f7b85e894db8333d30a6a9d11adadfde.jpg", "https://i.pinimg.com/474x/da/f6/2c/daf62cc59c6859e17b8fd5b52be0e47a.jpg", "https://stickershop.line-scdn.net/stickershop/v1/product/1340414/LINEStorePC/main.png;compress=true"];
var names = ["Family Book","Saikumar.S", "Shubha.K", "Sai.V", "Saanvi.S", "Shreya.S"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName =names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
