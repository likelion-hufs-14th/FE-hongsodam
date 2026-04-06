import './saram.css'


function UserItem() {
  return (
    <div className='user-item'>
      <div className='user-photo'>👤</div>
      <div className='user-info'>
        <p className='user-name'>사용자</p>
        <p className='sogae'>안녕하세요. 이웃추가해주세요.</p>
      </div>
    </div>
  )
}


export default function UserList() {
  return (
    <div className='user-list'>
      <h4 className='user-list-title'>멤버 목록</h4>
      
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </div>
  )
}