import React from 'react';
import {
  Row, Col, Select, Icon,
} from 'antd';
import './NewArticle.scss';
import CKEditor from 'ckeditor4-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import handleMessages from '../../utils/messages';

const NewArticleForm = (props) => {
  const {
    children, handleChange, size, handleSubmit, image, create, title, description, body, tagList, imageUrlArt, article,
  } = props;

  let imageUrl = '';
  const handleUploadImages = (image) => {
    image = image[0];
    const cloudinaryAPIKey = 896213827437316;
    const reader = new FileReader();
    reader.onloadend = function () {
      image = reader.result; // this is an ArrayBuffer
    };
    reader.readAsArrayBuffer(image);
    const formData = new FormData();
    formData.append('file', image);
    formData.append('api_key', cloudinaryAPIKey);
    formData.append('upload_preset', 'dvyip3rs');
    formData.append('timestamp', (Date.now() / 1000) | 0);
    handleMessages('loading', 'your image is being uploaded... ');
    return axios.post(
      'https://api.cloudinary.com/v1_1/kwangonya/image/upload',
      formData,
      { headers: { 'X-Requested-With': 'XMLHttpRequest' } },
    )
      .then((response) => {
        console.log(response.data.url);
        imageUrl = response.data.url;
        handleChange(imageUrl, 'image');
        handleMessages('success', 'Image was uploaded successfully 🤪');
      })
      .catch(error => handleMessages('error', 'Failed to upload the image. 😔'));
  };
  let slug = '';
  if (!create) {
    slug = article.slug;
  }

  return (
    <div data="new-article-component">
      <Row>
        <Col span={18} push={3}>
          <form
            role="form"
            className="article-form"
            onSubmit={event => handleSubmit(event, create, slug)}
          >
            <div className="form-group">
              <input
                type="text"
                className="article-create-input"
                placeholder="Add A Title For Your Article"
                onChange={event => handleChange(event, 'title')}
                value={title}
              />
              <input
                type="submit"
                className="submit-article-btn"
                value="Publish"
              />
            </div>

            <div className="form-group">
              <textarea
                className="article-create-input"
                placeholder="Add Some Description For Your Article"
                rows="3"
                onChange={event => handleChange(event, 'description')}
                value={description}
              />
            </div>

            <div className="input-group">
              <Dropzone
                onDrop={acceptedFile => handleUploadImages(acceptedFile)}
                accept="image/*"
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {image || (
                        <p>
                          <Icon
                            type="file-image"
                            style={{ fontSize: '20px' }}
                          />
                                                Drag 'n' drop image here, or click to select image
                        </p>
                      )}
                    </div>
                  </section>
                )}
              </Dropzone>
              <div className="show-thumb">
                {image ? (
                  <span style={{ color: 'green' }}>
                    <Icon type="check-circle" />
                    {' '}
Image successfully uploaded
                  </span>
                ) : 'No image Selected Yet'}
              </div>
            </div>

            <div className="form-group">
              <CKEditor
                data={body}
                type="classic"
                className="article-editor"
                onChange={event => handleChange(event, 'editor')}
              />
            </div>

            <div className="form-group">
              <Select
                mode="tags"
                size={size}
                placeholder="Add your tag(s) here"
                value={tagList}
                style={{ width: '100%' }}
                onChange={event => handleChange(event, 'tags')}
              >
                {children}
              </Select>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default NewArticleForm;
