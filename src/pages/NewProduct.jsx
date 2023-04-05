import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import useProducts from '../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import AlertPopup from '../components/ui/AlertPopup';

export default function NewProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleClose = () => {
    setSuccess(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    // 제품의 사진을 Cloudinary에 업로드하고 url을 획득
    uploadImage(file)
      .then((url) => {
        // Firebase에 새로운 제품을 추가
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess('성공적으로 제품이 추가되었습니다.');
            },
          }
        );
      })
      .finally(() => {
        setIsUploading(false);
      });
  };
  return (
    <section className='text-center inner'>
      <h2 className='text-2xl md:text-4xl font-bold mb-4 md:mb-12'>
        새로운 제품 등록
      </h2>
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt=''
          className='w-96 mx-auto mb-2'
        />
      )}
      <form className='flex flex-col px-2' onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/*'
          name='file'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          placeholder='Product Name'
          required
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='Price of Product'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='Category of Product'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          placeholder='Description of Product'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='options'
          value={product.options ?? ''}
          placeholder='Options(Separated with comma)'
          required
          onChange={handleChange}
        />
        <div className='mt-5'>
          <Button
            text={isUploading ? '등록중' : '제품 등록하기'}
            onClick={handleSubmit}
            disabled={isUploading}
            size='large'
            full
          />
        </div>
      </form>
      {success && (
        <AlertPopup
          text={success}
          onClose={handleClose}
          button1='계속 등록하기'
          button2='상품 목록으로 가기'
          btn1Function={handleClose}
          btn2Function={() => {
            navigate('/products');
          }}
        />
      )}
    </section>
  );
}
