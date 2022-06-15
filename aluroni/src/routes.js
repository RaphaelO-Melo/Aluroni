import Footer from 'components/Footer';
import Nav from 'components/Nav';
import StandardPage from 'components/StandardPage';
import About from 'pages/About';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import Plate from 'pages/Plate';
import Start from 'pages/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter(){
    return (
        <main className='container'>
            <Router>
                <Nav />
                <Routes>
                    <Route path='/' element={<StandardPage />}>
                        <Route index element={<Start />} />
                        <Route path='menu' element={<Menu />} />
                        <Route path='sobre' element={<About />} />
                    </Route>
                    <Route path='*' element={<NotFound />}/>
                    <Route path='prato/:id' element={<Plate />}/>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}