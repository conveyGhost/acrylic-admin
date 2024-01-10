import React, { useRef, useState, useEffect } from 'react';

interface ImageInputProps {
  originImageUrl?: string;
  onImageSelect: (file: File) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ originImageUrl, onImageSelect }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(originImageUrl ?? "");

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      console.log(imageUrl);
    }
  }, [selectedImage]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if(file) {
      setSelectedImage(file);
      onImageSelect(file);
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const removeSelectedImage = () => {
    if(inputRef.current) inputRef.current.value = '';
    setSelectedImage(null); 
    setImageUrl(""); 
  }

  return (
    <div className='img-wrap'>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleFileChange}
      />
      <div className='image_select_wrap'>
        {imageUrl !== "" &&
          <img className='show_img'  src={imageUrl} alt="" />
        }
        {imageUrl !== "" &&
          <button className='close_btn' onClick={removeSelectedImage}></button>
        }
        {imageUrl === "" &&
          <button className='select_btn' onClick={handleButtonClick}></button>
        }
      </div>
    </div>
  );
};

export default ImageInput;
