//Components
import Header from './Components/Header';
import Main from './Components/Main';
//Context
import BookListContextProvider  from './context/BookListContext';
//Styles
import './app.scss';

function App() {
  return (
    <BookListContextProvider>
      <div 
        className="app"
        aria-label="With this application called BookList you can create your own book list, 
        read book list, favorites book list and, searching books on google, 
        also add or remove from this book lists"  
      >
        <Header />
        <Main />
      </div>
    </BookListContextProvider>
  );
}

export default App;
