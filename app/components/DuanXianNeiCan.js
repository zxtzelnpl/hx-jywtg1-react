import React from 'react';
import './DuanXianNeiCan.less';

const preCls = 'duan-xian-nei-can'

export default class DuanXianNeiCan extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log(this.props);
    console.log(this.props.match.params.product);
  }

  render(){
    return <div className={preCls}>
      <img className={`${preCls}-img`} src="http://new.cjtglm.com/tuiguang_static/20181022a.jpg" alt=""/>
    </div>
  }
}
