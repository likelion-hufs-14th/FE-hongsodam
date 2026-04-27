import './List.css'


export default function List(props) {


  return (
  <>

      <div className= 'list'>
        <div className= 'author'>
          <img 
            src={props.data.author.profileImg} 
            style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
          />
          <p>{props.data.author.name}</p>
        </div>
          <h3>{props.data.title}</h3>
          <p>{props.data.content}</p>
          <p>{props.data.author.role}</p>
      </div>
    </>
  );
}

