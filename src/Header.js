import React,{Component,PropTypes} from 'react';
import {connect} from './react-redux'
class Header extends Component{
	static proptTypes = {
		themeColor:PropTypes.string
	}

	render(){
		return(
			<h1 style={{color:this.props.themeColor}}>这是网站头部</h1>
		);
	}
}
const mapStateToProps = (state)=>{
	return {
		themeColor:state.themeColor
	}
}

Header = connect(mapStateToProps)(Header);

export default Header;