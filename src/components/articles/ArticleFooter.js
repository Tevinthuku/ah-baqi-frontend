import React from 'react';
import { Icon } from 'antd';

export const IconText = ({ type, beenLiked, onClick }) => {
  if (beenLiked.likes) {
    return <p data-test='icon-text'>
      <Icon type={type}
        className="single-article-icon"
        theme="twoTone"
        twoToneColor="#ed4956"
        onClick={onClick}
      />
    </p>
  }
    return <p data-test='icon-text'>
      <Icon
        type={type}
        className="single-article-icon"
        onClick={onClick}
      />
  </p>
  
}

