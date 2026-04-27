import './List.css'


export default function List(props) {
    let boardList = [
    {
      title : "안녕하세요. 아기사자입니다.",
      content : "집에 가고 싶어요. 종강주세요.",
      date : "2026년 3월 1일"
    },
    {
      title : "안녕하세요. 운영진입니다.",
      content : "저도 집에 가고 싶어요. 종강주세요",
      date : "2026년 3월 2일"
    },
    {
      title : "안녕하세요. 대표입니다.",
      content : "저는 집에 못 가요. 살려주세요.",
      date : "2026년 3월 3일"
    },
  ] 

  return (
  <>
      <div className= 'list'>
          <h3>안녕하세요. 아기사자입니다.</h3>
          <p>집에 가고 싶습니다. 종강 주세요.</p>
          <p style= {{color: 'gray'}}>2026년 1월 1일</p>
      </div>
    </>
  );
}

