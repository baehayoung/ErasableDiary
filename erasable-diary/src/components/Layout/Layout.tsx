import Footer from './Footer/Footer';
import Header from './Header/Header';

import css from './Layout.module.scss';

const Layout = (props: { children: React.ReactNode }) => {
    return (
        <>
            <Header />

            <div className={css.mainContainer}>
                {props.children}
            </div>

            <Footer />
        </>
    )
}

export default Layout;