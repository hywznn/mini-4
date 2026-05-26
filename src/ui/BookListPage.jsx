import { useEffect, useState } from "react";
import Header from "../components/Header";
import BookCard from "../components/bookCard/BookCard";
import { BookList } from "../api/bookApi";
import "./BookListPage.css";

// 도서 목록 페이지
function BookListPage({ onGoList, onGoRegister, onGoDetail }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const data = await BookList();
        setBooks(data);
      } catch (error) {
        console.error(error);
        setErrorMessage("도서 목록 불러오기에 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleBookClick = (bookId) => {
    onGoDetail(bookId);
  };

  return (
    <div className="bookListPage">
      <Header
        title="걷기가 서재"
        onGoList={onGoList}
        onGoCreate={onGoRegister}
      />
      <main className="bookListPage-main">
        {loading && (
          <p className="bookListPage-message">도서 목록을 불러오는 중입니다.</p>
        )}
        {!loading && errorMessage && (
          <p className="bookListPage-message bookListPage-message--error">
            {errorMessage}
          </p>
        )}
        {!loading && !errorMessage && books.length === 0 && (
          <p className="bookListPage-message">등록된 도서가 없습니다.</p>
        )}
        {!loading && !errorMessage && books.length > 0 && (
          <section className="bookListPage-grid">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onClick={() => handleBookClick(book.id)}
              />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default BookListPage;
