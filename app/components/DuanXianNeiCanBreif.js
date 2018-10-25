import './DuanXianNeiCanBreif.less';
import React from 'react';
import {Link} from 'react-router-dom';
import {public_resource} from "../constants/urls";
import myStorage from '../static/js/myStorage';

const preClass = 'duan-xian-nei-can-brief';
const newClass = `${preClass}-new`;

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
    let {shortId1, shortId2, shortId3} = this.props.state;
    if (typeof shortId1 !== 'object') {
      this.props.actions.fetchPostsIfNeeded(1)
    }
    if (typeof shortId2 !== 'object') {
      this.props.actions.fetchPostsIfNeeded(2)
    }
    if (typeof shortId3 !== 'object') {
      this.props.actions.fetchPostsIfNeeded(3)
    }
  }


  renderLink({
    data,
    img,
    link,
    text,
    key,
              }) {

    if (typeof data === 'object' && typeof data.img === 'string') {

      let localData=myStorage.getItem(key);
      let classString = newClass;
      if(localData!==null){
        let localProduct = JSON.parse(localData);
        console.log(data.Createtime)
        console.log(localProduct.Createtime)
        if(data.Createtime === localProduct.Createtime){
          classString = '';
        }
      }
      return (
        <Link to={link}>
          <img src={img}/>
          <p className={classString}>{text}</p>
        </Link>
      )
    }
    else {
      return (
        <div>
          <img src={img}/>
          <p>暂无上传图片</p>
        </div>
      )
    }
  }

  render() {
    let {title, duanxianjingu, jingguneican, jixiaoneicanchi} = this.img;
    let {shortId1, shortId2, shortId3} = this.props.state;


    return (
      <div className={preClass}>
        <p className="title">
          <span><img src={title}/>短线内参</span>
        </p>
        <div className="wrap">
          <ul>
            <li className={'pmdj'}>
              {this.renderLink({
                data:shortId1,
                img:duanxianjingu,
                link:'/duanxianneican/shortId1',
                text:'短线金股',
                key:'shortId1'
              })}
            </li>
            <li className={'ydfp'}>
              {this.renderLink({
                data:shortId2,
                img:jingguneican,
                link:'/duanxianneican/shortId2',
                text:'金股内参',
                key:'shortId2'
              })}
            </li>
            <li className={'yxzzd'}>
              {this.renderLink({
                data:shortId3,
                img:jixiaoneicanchi,
                link:'/duanxianneican/shortId3',
                text:'绩效内参池',
                key:'shortId3'
              })}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
