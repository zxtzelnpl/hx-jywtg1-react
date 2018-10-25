import React from 'react';
import './DuanXianNeiCan.less';
import myStorage from '../static/js/myStorage';

const preCls = 'duan-xian-nei-can';

export default class DuanXianNeiCan extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    let product = this.props.match.params.product;
    let shortId = Number(product[7]);
    let data = this.props.state[product];
    if(typeof data !== 'object'||typeof data.img !=='string'){
      this.props.actions.fetchPostsIfNeeded(shortId);
    }
    else{
      myStorage.setItem(product,JSON.stringify(data))
    }
  }

  render(){
    let product = this.props.match.params.product;
    let data = this.props.state[product];
    let content=<div>暂时还没有上传图片</div>;
    if(typeof data === 'object'&&typeof data.img ==='string' ){
      content = <img className={`${preCls}-img`} src={data.img} alt=""/>;
    }

    return <div className={preCls}>
      {content}
    </div>
  }
}
