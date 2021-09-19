import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const articleHeading = {
    backgroundColor: "red",
    color: "white"
  }

  const books = [
    { title: "First Title", author: "First Author" },
    { title: "Second Title", author: "Second Author" },
    { title: "Third Title", author: "Third Author" }
  ]

  return (
    <div className="App">
      <div>
        <article className="blog">
          <h2 style={articleHeading}>This is an article</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam repellendus sit officiis! Natus a recusandae tempore aliquam iusto optio quas harum amet eaque aliquid sed cupiditate aut, adipisci molestias.
          <p style={{ backgroundColor: 'goldenrod', color: 'white' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </article>
      </div>
      {books.map(book => <Blog title={book.title} author={book.author}></Blog>)}

      <Mobile></Mobile>
      <LoadUsers></LoadUsers>
    </div>

  );
}

function Blog(params) {
  return (
    <div className="blog">
      <h2>Book Title: {params.title ? params.title : "No Title"}</h2>
      <p>Author: {params.author ? params.author : "No Author"}</p>
    </div>
  )
}

function Mobile() {
  const [battery, setBattery] = useState(100);
  const batteryDown = () => setBattery(battery - 10);
  if (battery < 0) {
    setBattery(0);
  }
  return (
    <div className="blog">
      <h2>{battery}</h2>
      <button onClick={batteryDown}>Battery Down</button>
    </div>
  )
}

function LoadUsers() {
  const [toDos, setToDo] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setToDo(data))
  }, [])

  return (
    <div>
      {toDos.map(toDo => <DisplayUsers id={toDo.id} title={toDo.title}></DisplayUsers>)}
    </div>
  )
}

function DisplayUsers(props) {
  return (
    <div>
      <h2>ID: {props.id}</h2>
      <p>Title: {props.title}</p>
    </div>
  )
}

export default App;
