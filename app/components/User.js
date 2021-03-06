import React from 'react'
import {public_resource} from "../constants/urls";
import {Link} from 'react-router-dom'
import './User.less'

function User({user,userActions}){
  let banner = `${public_resource}/userBg.jpg`
  let serviceTime = `${public_resource}/serviceTime.jpg`
  let productCenter = `${public_resource}/productCenter.jpg`
  let aboutUs = `${public_resource}/aboutUs.jpg`
  let selection_detial = `${public_resource}/selection_detail.png`
  let phone = user.phone
  let user_img = user.headimgurl
  return (
    <div className="User">
      <div className="banner">
        <img className="bannerBg" src={banner}/>
        <div className="userInfo">
          <div className="circle">
            <img src={user_img}/>
          </div>
          <span>{phone}</span>
        </div>
      </div>
      <div className="user_selections">
        <Link to="/ProductGameMaster" className="selection">
          <div>
            <img className="selection_logo" src={serviceTime} alt=""/>
            服务期限
          </div>
          <img className="selection_detail" src={selection_detial} alt=""/>
        </Link>
        <Link to="/ProductGameMasterList" className="selection">
          <div>
            <img className="selection_logo" src={productCenter} alt=""/>
            产品中心
          </div>
          <img className="selection_detail" src={selection_detial} alt=""/>
        </Link>
        <Link to="/Main" className="selection" style={{"display":"none"}}>
          <div>
            <img className="selection_logo" src={aboutUs} alt=""/>
            关于我们
          </div>
          <img className="selection_detail" src={selection_detial} alt=""/>
        </Link>
      </div>
      <div onClick={userActions.logout} className="logout">
        <p>退出登录</p>
      </div>
    </div>
  )
}

export default User;