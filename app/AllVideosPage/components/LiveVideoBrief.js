import './LiveVideoBrief.less'
import React from 'react'
import {Link} from 'react-router-dom'
import {public_resource} from "../../constants/urls";
import moment from "moment/moment";
import * as labels from '../const'

export default class VideoBrief extends React.PureComponent {
  constructor(props) {
    super(props)
    this.img = {
      pmdj: `${public_resource}/pmdj.png`,
      pmdj_sm: `${public_resource}/pmdj_sm.png`,
      ydfp: `${public_resource}/ydfp.png`,
      ydfp_sm: `${public_resource}/ydfp_sm.png`,
      yxzzd: `${public_resource}/yxzzd.png`,
      yxzzd_sm: `${public_resource}/yxzzd_sm.png`,
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
    let {title, detail, pmdj, pmdj_sm, ydfp, ydfp_sm, yxzzd, yxzzd_sm} = this.img
    let mark
    let {hours, minutes} = moment().toObject()
    if (hours === 10 && minutes <= 30) {
      mark = 'pmdj'
    }
    if (hours === 12 && minutes <= 30) {
      mark = 'ydfp'
    }
    if (hours === 15 && minutes <= 30) {
      mark = 'yxzzd'
    }


    return (
        <div className="VideoBrief">
          <p className="title">
            <span><img src={title}/>民众直播</span>
            <Link to={{pathname:'/VideosPage',state:labels.PAN_MIAN_DIAN_JIN}}><img src={detail} alt=""/></Link>
          </p>
          <div className="wrap">
            <ul>
              <li className={mark==='pmdj'?'big':''}>
                <Link to={this.url.PAN_MIAN_DIAN_JIN}>
                  <img src={mark==='pmdj'?pmdj:pmdj_sm}/>
                  <p>10:00<span>-</span>10:30</p>
                </Link>
              </li>
              <li className={mark==='ydfp'?'big':''}>
                <Link to={this.url.YI_DONG_FU_PAN}>
                  <img src={mark==='ydfp'?ydfp:ydfp_sm}/>
                  <p>14:00<span>-</span>14:30</p>
                </Link>
              </li>
              <li className={mark==='yxzzd'?'big':''}>
                <Link to={this.url.YOU_XUAN_ZAO_ZHI_DAO}>
                  <img src={mark==='yxzzd'?yxzzd:yxzzd_sm}/>
                  <p>15:00<span>-</span>15:30</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    )

  }
}
