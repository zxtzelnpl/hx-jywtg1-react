import './DuanXianNeiCanBreif.less';
import React from 'react';
import {Link} from 'react-router-dom';
import {public_resource} from "../constants/urls";

export default class DuanXianNeiCanBreif extends React.PureComponent {
  constructor(props) {
    super(props)
    this.img = {
      duanxianjingu: `${public_resource}/duanxianneican/duanxianjingu.png`,
      jingguneican: `${public_resource}/duanxianneican/jingguneican.png`,
      jixiaoneicanchi: `${public_resource}/duanxianneican/jixiaoneicanchi.png`,
      title: `${public_resource}/exchangeGuide.jpg`,
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    let {title, duanxianjingu, jingguneican, jixiaoneicanchi} = this.img
    return (
        <div className="InstructionPlanBreif">
          <p className="title">
            <span><img src={title}/>短线内参</span>
          </p>
          <div className="wrap">
            <ul>
              <li className={'pmdj'}>
                <Link to={"/duanxianneican/duanxianjingu"}>
                  <img src={duanxianjingu}/>
                  <p>短线金股</p>
                </Link>
              </li>
              <li className={'ydfp'}>
                <Link to={"/duanxianneican/jingguneican"}>
                  <img src={jingguneican}/>
                  <p>金股内参</p>
                </Link>
              </li>
              <li className={'yxzzd'}>
                <Link to={"/duanxianneican/jixiaoneicanchi"}>
                  <img src={jixiaoneicanchi}/>
                  <p>绩效内参池</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}
