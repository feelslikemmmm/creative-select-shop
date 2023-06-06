import Button from '@components/ui/Button';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function NewProduct() {
  const [product, setProduct] = useState({
    file: '',
    title: '',
    price: '',
    category: '',
    description: '',
    options: '',
  });
  const [file, setFile] = useState<undefined | File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile((files && files[0]) || undefined);
      files && files.length > 0 && console.log(files[0]);
      return;
    }

    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const productSubmit = () => {};

  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ''}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ''}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ''}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="description"
          value={product.description ?? ''}
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ''}
          placeholder="옵션들(콤마(,)로 구분)"
          required
          onChange={handleChange}
        />
        <Button text={'제품 등록하기'} onClick={productSubmit} />
      </form>
    </section>
  );
}
