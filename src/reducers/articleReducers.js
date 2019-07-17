import actionTypes from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  articles: [],
  nextPage: null,
  previousPage: null,
  articleData: {
    id: 0,
    title: '',
    description: '',
    body: '',
    tagList: [],
    author: '',
    slug: '',
    readingTime: '',
    reads: 0,
    views: '',
    image: '',
    comments: [],
    rating: 0,
    likePopularity: '',
    dislikes: 0,
    likes: 0,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_ARTICLE:
      return {
        ...state,
      };
    case actionTypes.GET_ALL_ARTICLES:
      return {
        ...state,
        articles: action.articles,
        nextPage: action.nextPage,
        previousPage: action.articles,
      };
    case actionTypes.GET_SINGLE_ARTICLES:
      return {
        ...state,
        articleData: action.articleData,
      };
    case actionTypes.EDIT_ARTICLE:
      return {
        ...state,
        articleData: { ...action.payload },
      };
    case actionTypes.DELETE_ARTICLE:
      return {
        ...state,
        articleData: { ...action.payload },
      };
    default:
      return state;
  }
}
