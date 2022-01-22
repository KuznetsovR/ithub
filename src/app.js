import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import React from 'react';
import { Navigation3d } from './3D/navigation3d';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/navigation" element={<Navigation3d />} />
			</Routes>
		</BrowserRouter>
	);
};
