import Nav from 'components/Nav';
import StandardPage from 'components/StandardPage';
import Menu from 'pages/Menu';
import Start from 'pages/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter(){
    return (
        <main>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<StandardPage />}>
                        <Route index element={<Start />} />
                        <Route path='menu' element={<Menu />} />
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}