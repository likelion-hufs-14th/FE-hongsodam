import './App.css'
import List from './components/List/list'

export default function App() {

  let title= "한국외대"
  return (
    <>
      <div className='navbar'>
        <span className='navbar-title'>{title} 블로그</span>
      </div>

      <List />
      <List />
      <List/>

    </>
  )
}
