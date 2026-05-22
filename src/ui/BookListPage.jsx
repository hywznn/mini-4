// 도서 목록 페이지

function BookListPage({ onGoRegister, onGoDetail }) {
  return (
    <div>
      {/* 공통 헤더 */}
      <header>
        <p>Logo</p>
        <nav>
          <span>도서 목록</span>
          <button type="button" onClick={onGoRegister}>
            도서 등록
          </button>
        </nav>
      </header>

      <main>
        {/* 도서 카드 목록 영역 */}
        <section>
          <p>도서 카드 목록 영역 (3열 그리드)</p>
          {/* 상세페이지 이동(임시로 1번) */}
          <button type="button" onClick={() => onGoDetail(1)}>
            샘플 도서 카드 클릭 (id: 1)
          </button>
        </section>
      </main>
    </div>
  );
}

export default BookListPage;
