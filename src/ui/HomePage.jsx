// 홈 페이지 
function HomePage({ onGoList, onGoRegister }) {
  return (
    <div>
      {/* 상단 헤더 */}
      <header>
        <p>header</p>
      </header>

      <main>
        <h1>도서 관리 시스템에 오신 것을 환영합니다</h1>
        <p>이 시스템을 사용하여 도서를 등록하고 관리할 수 있습니다</p>

        {/* 목록 페이지로 이동 */}
        <button type="button" onClick={onGoList}>
          도서 목록 보기
        </button>
        {/* 상세 페이지 이동 */}
        <button type="button" onClick={onGoRegister}>
          도서 등록하기
        </button>
      </main>
    </div>
  );
}

export default HomePage;
