import './saram.css'

export default function UserList() {
  return (
    <>
        <div className='user-list'>
        <h4 className='user-list-title'>멤버 목록</h4>
        
        <div className='user-item'>
            <div className='user-photo'>👤</div>
            <p className='user-name'>사용자 1</p>
        </div>

        <div className='user-item'>
            <div className='user-photo'>👤</div>
            <p className='user-name'>사용자 2</p>
        </div>

        <div className='user-item'>
            <div className='user-photo'>👤</div>
            <p className='user-name'>사용자 3</p>
        </div>
        </div>
    </>
  )
}