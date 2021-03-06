import React from 'react'
import moment from "moment/moment";
import './TeacherReportDetail.less'
import {Article_browse_Record} from '../constants/urls'

export default class TeacherReportDetail extends React.PureComponent{
  constructor(props){
    super(props)
    this.id = this.props.match.params.id
    this.teacherItem = this.props.teacher.data.filter(item=>{
      return item.id === this.id
    })
  }

  componentDidMount(){
    // let {check,receivedAt} = this.props.user
    // if(!check){
    //   alert('需要注册后方可观看')
    //   return this.props.history.replace('/Center')
    // }
    // if(moment().isAfter(moment.unix(receivedAt).add(1,'days'))){
    //   alert('登录信息已经失效')
    //   return this.props.history.replace('/Center')
    // }
    if(this.teacherItem.length===0){
      this.props.history.push('/NewsPage')
    }
    else{
      this.statistics()
    }
  }

  statistics(){
    if (this.teacherItem.length > 0 && this.props.user.openid){
      let openid = this.props.user.openid
      let id = this.id
      let teacherItem = this.teacherItem[0]
      let {title, timestamp} = teacherItem
      let type = '民众内参'
      let body = `openid=${openid}&Article_title=${title}&time=${moment.unix(timestamp).format('YYYY-MM-DD HH:mm')}&Article_type=${type}&Article_id=${id}`
      console.log(body)
      fetch(Article_browse_Record,{
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body
      })
          .then(res=>res.text())
          .then(text=>{
            console.log(text)
          })
          .catch(err=>{
            console.log(err)
          })
    }
  }

  render(){
    let htmlDom
    if(this.teacherItem.length>0&&this.props.user.check){
      let teacherItem = this.teacherItem[0]
      let {content,title,timestamp} = teacherItem
      htmlDom= (
          <div>
            <div className="detail_title">{title}</div>
            <div className="detail_time">{moment.unix(timestamp).format('YYYY-MM-DD hh:mm')}</div>
            <div className="detail_content" dangerouslySetInnerHTML={{__html:content}} />
          </div>
      )
    }
    else{
      htmlDom=(
          <div />
      )
    }
    return (
        <div className="teacherReportDetail">
          {htmlDom}
        </div>
    )
  }
}
