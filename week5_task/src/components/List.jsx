import './List.css'


export default function List(props) {


  return (
  <>
      <div className= 'list'>
          <h3>{props.data.title}</h3>
          <p>{props.data.content}</p>
          <p style= {{color: 'gray'}}>2026년 1월 1일</p>
      </div>
    </>
  );
}

