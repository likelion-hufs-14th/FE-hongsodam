import './List.css'
import LikeButton from '../LikeButton/LikeButton';


export default function List(props) {


  return (
  <>

      <div className= 'list'>
        <div className= 'author'>
          <img 
            src={props.data.author.profileImg} 
            style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
          />
          <span className= 'name'>{props.data.author.name}</span>
          <span>{props.data.author.role}</span>
        </div>
          <h3 className= 'title'>{props.data.title}</h3>
          <p>{props.data.content}</p>

        <div className='tags'>
          {props.data.tags.map((tag, index) => (
            <span key={index}>
              #{tag}
            </span>
          ))}
        </div>

          <p className='date'>{props.data.createdAt}</p>
          <LikeButton></LikeButton>

      </div>
    </>
  );
}

