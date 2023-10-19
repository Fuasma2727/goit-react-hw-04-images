export default function ImageGallery({ api, onClickImage }) {
  console.log(api);
    return (
      <ul className="ImageGallery" style={{ display: "flex", flexWrap: 'wrap', listStyle:"none" }}>
        
        {api.map((image, index) => (
          <li key={index} style={{margin:5}}>
            <img 
              src={image.webformatURL} alt=""
              id={image.id} 
              width={300}
              height={200}
              onClick={() => onClickImage(image.webformatURL)}/>
          </li>
        ))}
      </ul>
    );
  }
  