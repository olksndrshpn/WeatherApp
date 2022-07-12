import React, {useEffect, useRef, useState} from 'react';
import PostService from "../API/PostService";
import {useSortedPosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import MyButton from "../Components/button/MyButton";
import PostForm from "../Components/PostForm";
import MyModal from "../Components/MyModal/MyModal";
import PostFilter from "../Components/PostFilter";
import PostList from "../Components/PostList";
import Loader from "../Components/Loader/Loader";
import Pagination from "../Components/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../Components/select/MySelect";


function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = useSortedPosts(posts, filter.sort, filter.query);
  const lastElement = useRef()

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
      const response = await PostService.getAll(limit, page);

    console.log(response.data.data)
      setPosts([...posts, ...response.data.data])
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit));
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
      setPage(page + 1);
  })

  useEffect(() => {
      fetchPosts(limit, page)
  }, [page, limit])

  const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
      setPage(page)
  }

  return (
      <div className="App">
          <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
Нова замітка          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost}/>
          </MyModal>
          <hr style={{margin: '15px 0'}}/>
          <PostFilter
              filter={filter}
              setFilter={setFilter}
          />
          <MySelect
              value={limit}
              onChange={value => setLimit(value)}
              defaultValue="Кількість новин, які я знайшов"
              options={[
                  {value: 5, name: '5'},
                  {value: 10, name: '10'},
                  {value: 25, name: '25'},
                  {value: -1, name: 'Усі'},
              ]}
          />
          {postError &&
          <h1>Упссс.... ${postError}</h1>
          }
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Новини"/>
          <div ref={lastElement} style={{height: 20, background: 'red'}}/>
          {isPostsLoading &&
          <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
          }
          <Pagination
              page={page}
              changePage={changePage}
              totalPages={totalPages}
          />
      </div>
  );
}

export default Posts;
