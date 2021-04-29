import React, { useState } from 'react'

import DatePicker, {registerLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";

const AddEmployee = () => {

	const [startDate, setStartDate] = useState(new Date());
	registerLocale('ru', ru)

	return (
		<div className="row">
			<div className="box box-solid">
				<div className="box-header with-border">
					<h3 className="box-title">Добавление нового сотрудника</h3>
				</div>
				<form className="form">
					<div className="box-body">
						
						<div className="row">
							<div className="col-lg-4">
								<label htmlFor="lastName">Фамилия</label>
								<input type="text" className="form-control" id="lastName" placeholder="Байбатыров" />
							</div>
							<div className="col-lg-4">
								<label htmlFor="firstName">Имя</label>
								<input type="text" className="form-control" id="firstName" placeholder="Балтабай" />
							</div>
							<div className="col-lg-4">
								<label htmlFor="firstName">Отчество</label>
								<input type="text" className="form-control" id="firstName" placeholder="Бейсенұлы" />
							</div>
						</div>

						<hr />

						<div className="row">

							<div className="col-md-6">
								<div className="form-group">
									<label htmlFor="firstName">Логин</label>
									<input type="text" className="form-control" id="firstName" placeholder="username" />
								</div>

								<div className="form-group">
									<label htmlFor="firstName">Почта</label>
									<input type="text" className="form-control" id="firstName" placeholder="example@mail.com" />
								</div>

								<div className="form-group">
									<label htmlFor="firstName">Телефон</label>
									<input type="text" className="form-control" id="firstName" placeholder="8 (701) 066-68-86 " />
								</div>

								

								<div className="form-group">
									<div className="input-group">
										<label htmlFor="firstName">Дата рождения</label>
										<span className="input-group-addon"><i className="fa fa-birthday-cake"></i></span>
										<DatePicker locale="ru" selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd.MM.yyyy" />
									</div>
								</div>

							</div>
									
							<div className="col-md-6">
								<div className="form-group">
									<label>Роль в системе</label>
									<select className="form-control">
										<option>Выберите роль</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>

								<div className="form-group">
									<label>Категория</label>
									<select className="form-control">
										<option>Выберите категорию</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>

								<div className="form-group">
									<div className="input-group">
										<label htmlFor="firstName">Дата начала работы</label>
										<span className="input-group-addon"><i className="fa fa-calendar"></i></span>
										<DatePicker locale="ru" maxDate={new Date()} selected={startDate} onChange={date => setStartDate(date)} dateFormat="dd.MM.yyyy" />
									</div>
								</div>

								<div className="form-group">
									<label>Департамент / Отдел</label>
									<select className="form-control">
										<option>Выберите категорию</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>

								<div className="form-group">
									<label>Должность</label>
									<select className="form-control">
										<option>Выберите из списка</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>

								<div className="form-group">
									<label>Руководитель</label>
									<select className="form-control">
										<option>Выберите из списка</option>
										<option>option 2</option>
										<option>option 3</option>
										<option>option 4</option>
										<option>option 5</option>
									</select>
								</div>
							
							</div>
						</div>

					</div>
					<div className="box-footer">
						<button type="submit" className="btn btn-info pull-right">Отправить</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddEmployee;
