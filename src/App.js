import './App.css';
import {Component} from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import {CardList} from './components/card-list/card-list.component';

class App extends Component {
  constructor(){
    super(); // 继承Component的构造函数
    // 包括 setState()
    this.state = {
      monsters: [],
      searchfield:''
    }
    this.handleChange = this.handleChange.bind(this)  // 手动绑定this
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }

  // handleChange(e){
  //   console.log(this)// undefined
  //   this.setState({searchfield:e.target.value},()=>console.log(this.state.searchfield))
  // }
  handleChange = e =>{
    console.log(this)
    this.setState({searchfield:e.target.value})
  }
  // 当setState()被调用时，React会重新渲染组件 reRender 单向数据流
  // 知识点：给元素加上unique key的作用是，当元素更新时，React可以根据key来判断元素是否被改变，如果没有key，React会重新渲染所有元素，例如当第一个元素的name改变了，React会根据key判断，只有第一个元素需要被重新渲染，其他元素不需要重新渲染

  // setState()的调用会导致重新渲染和render()重复执行，从而导致filteredMonsters得到新的值，视图也被更新
  render(){
    const {searchfield,monsters} = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    )
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters} />
        
    </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
