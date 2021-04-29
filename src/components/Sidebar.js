import { Link } from 'react-router-dom'
import { DOCUMENT_ROUTE, MANAGER_ROUTE } from '../utils/constants'

const Sidebar = () => {
	return (
		<aside className="main-sidebar">
			<section className="sidebar">
				<div className="user-panel">
					<div className="pull-left image">
						<img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
					</div>
					<div className="pull-left info">
						<p>Zhumat Daulet</p>
						<Link to="/"><i className="fa fa-circle text-success"></i> Онлайн</Link>
					</div>
				</div>
				<ul className="sidebar-menu" data-widget="tree">
					<li className="header">Меню</li>
					<li>
						<Link to={MANAGER_ROUTE}>
							<i className="fa fa-dashboard"></i> <span>Менеджер</span>
						</Link>
					</li>
					<li>
						<Link to={DOCUMENT_ROUTE}>
							<i className="fa fa-dashboard"></i> <span>Документооборот</span>
						</Link>
					</li>
				</ul>
			</section>
		</aside>
	)
}

export default Sidebar
