import { Link, useParams } from 'react-router-dom';
import { MANAGER_ROUTE } from '../utils/constants';
import AddEmployee from './manager/AddEmployee';
import AddTemplate from './manager/AddTemplate';


const Manager = () => {
	const { id } = useParams()
	console.log(id)

	return (
		<div className="content-wrapper">
			<section className="content">
				<div className="row">

					<div className="col-md-3">

						<div className="box box-solid">
							<div className="box-header with-border">
								<h3 className="box-title">Новый</h3>
							</div>
							<div className="box-body no-padding">
								<ul className="nav nav-pills nav-stacked">
									<li><Link to={`${MANAGER_ROUTE}/employee`}><i className="fa fa-inbox"></i> Сотрудник</Link></li>
									<li><Link to={`${MANAGER_ROUTE}/template`}><i className="fa fa-envelope-o"></i> Шаблон</Link></li>
								</ul>
							</div>
						</div>

					</div>

					<div className="col-md-9">
					{
						id ? <> 
							{ id === 'employee' ? <AddEmployee /> : null } 
							{ id === 'template' ? <AddTemplate /> : null } 
						</> : null
					}
					</div>
				</div>
			</section>
		</div>

	)
}

export default Manager
