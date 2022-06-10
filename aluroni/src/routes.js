import Nav from 'components/Nav';
import Menu from 'pages/Menu';
import Start from 'pages/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter(){
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/menu' element={<Menu />} />
            </Routes>
        </Router>
    );
}