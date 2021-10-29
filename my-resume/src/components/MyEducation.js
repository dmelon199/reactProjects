import React from 'react'

const MyEducation = () => {
	return ( 
		<div className="my-education-wrapper d-flex flex-column p-5 bg-gray">
			<h1 className="widget-heading">My College Education</h1>
			<div className="my-education-content d-flex container-xl pt-5">    
				<div className="logo">
					<img style={{width:"100%"}} src="/images/champ.png" alt="Champlain College Logo" title="Champlain College"/>
				</div>
				<div className="info" style={{lineHeight: '25px'}}>
					<h2 className="font-weight-bold">Champlain College</h2>
					<p>Burlington, Vermont  2008-2012</p>
					<p> I Recieved my Bachelor of Science in Graphic Design & Digital Media. My favorite highlight of attending Champlain College was studying abroad in Dublin, Ireland during the 2010 Fall semester of my Junior Year. I took an interest in web design & development towards during my Senior year.</p>
				</div>
			</div>
		</div>
	)
}


export default MyEducation