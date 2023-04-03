import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/uploader';
import { addNewProduct } from '../api/firebase';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct(product => ({ ...product, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsUploading(true);
    // 제품의 사진을 Cloudinary에 업로드하고 url을 획득
    uploadImage(file).then(url => {
      // Firebase에 새로운 제품을 추가
      addNewProduct(product, url)
        .then(() => {
          setSuccess('성공적으로 제품이 추가되었습니다.');
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        })
        .finally(() => setIsUploading(false));
    });
  };
  return (
    <section className='w-full text-center'>
      <h2 className='text-2xl font-bold my-4'>새로운 제품 등록</h2>
      {success && <p className='my-2'>✅ {success}</p>}
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
        <Button
          text={isUploading ? '등록중' : '제품 등록하기'}
          onClick={handleSubmit}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
