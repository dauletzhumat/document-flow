import DocumentFlow from './pages/DocumentFlow'
import Main from './pages/Main'
import Manager from './pages/Manager'
import { DOCUMENT_ROUTE, MAIN_ROUTE, MANAGER_ROUTE } from './utils/constants'



export const publicRoutes = [
	{ path: MAIN_ROUTE, Component: Main },
	{ path: MANAGER_ROUTE, Component: Manager },
	{ path: DOCUMENT_ROUTE, Component: DocumentFlow },
	{ path: MANAGER_ROUTE + '/:id', Component: Manager }
]