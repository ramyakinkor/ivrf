import { useEffect, useState } from "react";

export function PhotoGallery({images, columns, renderImage}) {
    
    const [imagesData, setData] = useState([]);
    useEffect(() => {
        //done temporary and should be removed
        const swipearea = images[1];
        images[1] = images[2];
        images[2] = swipearea;
        // ---------
        const itemsPerColumn = images.length / columns
        const newFormat = []
        for(let i=0, j=0; i< images.length; i += itemsPerColumn, j++) {
            newFormat[j] = images.slice(i, i+ itemsPerColumn)
        }
        setData(newFormat);
        console.log(newFormat)
    }, [images]);
    
  return (
    <div className="pg-container">
      <div className="pg-image-gallery">
        {imagesData.map((images, index) => {
            return (<div className="pg-column" key={index}>
                {images?.length > 0 && images.map(image => renderImage(image))}
          </div>)
        })}
        
      </div>
    </div>
  );
}
