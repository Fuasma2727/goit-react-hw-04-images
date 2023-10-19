import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import { ThreeDots } from 'react-loader-spinner';
import Modal from './Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [submit, setSubmit] = useState('cat');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  const updateSubmit = (newSubmit) => {
    setSubmit(newSubmit);
    setPage(1); 
  };

  useEffect(() => {
    const fetchImages = () => {
      setIsLoading(true);
      fetch(
        `https://pixabay.com/api/?q=${submit}&page=${page}&key=39764264-49c18dcd85920e365dc74231e&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((response) => response.json())
        .then((data) => {
          if (page === 1) {
            setImages(data.hits);
          } else {
            setImages((prevImages) => [...prevImages, ...data.hits]);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    };

    fetchImages();
  }, [page, submit]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl) => {
    console.log("Modal opened with imageUrl:", imageUrl);
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
      }}
    >
      <Searchbar onSubmit={updateSubmit} />
      <div style={{ maxWidth: '80%', margin: '0 auto' }}>
      <ImageGallery api={images} onClickImage={openModal} />
      </div>
      <Button onClick={nextPage}>Load More</Button>
      {isLoading && page > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
 
        </div>
      )}
         {isModalOpen && (
        <Modal imageUrl={selectedImageUrl} closeModal={closeModal} />
      )}
    </div>
  );
};


