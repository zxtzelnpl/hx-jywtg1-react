import './InstructionPlanBreif.less';
import React from 'react';
import {Link} from 'react-router-dom';
import {public_resource} from "../../constants/urls";
import * as labels from '../../AllVideosPage/const';

export default class VideoBrief extends React.PureComponent {
  constructor(props) {
    super(props)
    this.img = {
      shouxiliuyan: `${public_resource}/instruction_plan/shouxiliuyan.png`,
      zongjianguandian: `${public_resource}/instruction_plan/zongjianguandian.png`,
      caozuozhiling: `${public_resource}/instruction_plan/caozuozhiling.png`,
      title: `${public_resource}/exchangeGuide.jpg`,
      detail: `${public_resource}/detail.jpg`
    }
    this.url={
      PAN_MIAN_DIAN_JIN:{
        pathname:'/VideosPage',
        state:labels.PAN_MIAN_DIAN_JIN
      },
      YI_DONG_FU_PAN:{
        pathname:'/VideosPage',
        state:labels.YI_DONG_FU_PAN
      },
      YOU_XUAN_ZAO_ZHI_DAO:{
        pathname:'/VideosPage',
        state:labels.YOU_XUAN_ZAO_ZHI_DAO
      }
    }
  }

  componentDidMount() {

  }

  render() {
    let {title, detail,shouxiliuyan, zongjianguandian, caozuozhiling} = this.img
    return (
        <div className="InstructionPlanBreif">
          <p className="title">
            <span><img src={title}/>指令计划</span>
            <Link to={{pathname:'/VideosPage',state:labels.PAN_MIAN_DIAN_JIN}}><img src={detail} alt=""/></Link>
          </p>
          <div className="wrap">
            <ul>
              <li className={'pmdj'}>
                <Link to={this.url.PAN_MIAN_DIAN_JIN}>
                  <img src={shouxiliuyan}/>
                  <p>首席留言</p>
                </Link>
              </li>
              <li className={'ydfp'}>
                <Link to={this.url.YI_DONG_FU_PAN}>
                  <img src={zongjianguandian}/>
                  <p>总监观点</p>
                </Link>
              </li>
              <li className={'yxzzd'}>
                <Link to={this.url.YOU_XUAN_ZAO_ZHI_DAO}>
                  <img src={caozuozhiling}/>
                  <p>操作指令</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}
