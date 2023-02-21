let categories = ["Angel","Antique","Apple","Auction","Baby","Background","Ballet","Basketball","Beach","Books","Border","Brain","Business","Butterfly","Cat","Chef","Children","Compass","Construction","Cookies","Couple","Cupcakes","Decoration","Devil","Digital","Doctor","Dog","Education","Face","Family","Fashion","Fitness","Floral","Flyer","Frame","Globe","Golf","Grass","Grunge","Guitar","Gym","Hair","Hairstyles","Handshake","Health","Hearts","House","Internet","Jesus","Kids","Landscape","Livingroom","Love","Manicure","Marketing","Massage","Meeting","Money","Music","New York","Paper","Party","Piano","Pizza","Rainbow","Relax","Restaurant","Road","Robot","Romantic","Rose","Running","Seafood","Sensual","Sketch","Spa","Sport","Success","Sunlight","Swirls","Teacher","Tree","Universe","Vintage","Wallpaper","Water","Wedding","Wine","Wines","Woman"] 
let construct = 1 ; //*for 4 row grid ​
let i= 0 ;
let tempCategories = [] ; 
while(construct<=4) {
    let temp = [] ;
   for(;i<construct*24;i++) 
    temp.push(categories[i]) ; 
   tempCategories.push(temp) ; 
   construct += 1 ; 
}
categories = tempCategories ; 
export default categories ;