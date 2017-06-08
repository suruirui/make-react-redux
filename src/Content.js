import React,{Component,PropTypes} from 'react';
import ThemeSwitch from './ThemeSwitch';
import {connect} from './react-redux'
class Content extends Component{
	static propTypes = {
		themeColor:PropTypes.string
	}

	render(){
		return(
			<div>
				<p style={{color:this.props.themeColor}}>这是网站内容</p>
				<ThemeSwitch />
			</div>
		);
	}
}

const mapStatetoProps = (state) =>{
	return {
		themeColor:state.themeColor
	}
}
Content = connect(mapStatetoProps)(Content);
export default Content;