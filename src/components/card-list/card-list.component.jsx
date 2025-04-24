import React from "react";
import './card-list.styles.css';
import {Card} from '../card/card.component';

// props.children的理解：
// 通过props.children可以访问到CardList组件的子组件
/**
 * 父组件
 * <Card>
 *  <h1>Title</h1>  子元素h1会作为 props.children 传递 
 * </Card>
 * 子组件
 * function Card({ children }) {
 *  return <div className="card">{children}</div>;
 * }
 */

export const CardList = (props) => {
  return <div className="card-list">
    {props.monsters.map(monster=><Card key={monster.id} monster = {monster} />)}
  </div>
}