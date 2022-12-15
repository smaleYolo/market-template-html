import './css/reset.css';
import './css/base.css';
import './css/main.css';

import vector1 from './cards/vector-1.svg'
import vector2 from './cards/vector-2.svg'
import card1 from './cards/card-1.jpeg'
import card2 from './cards/card-2.jpeg'
import card3 from './cards/card-3.jpeg'
import card4 from './cards/card-4.jpeg'
import card5 from './cards/card-5.jpeg'
import card6 from './cards/card-6.jpeg'

function App() {
    return (
        <div className="App">
            <div className="sidebar">
                <div className="sidebar-logo">
                    <div className="logo">
                        <img src="/img/logo.svg" alt="Logo"/>
                    </div>
                </div>

                <nav className="sidebar-nav nav">
                    <h2 className="nav-title">Explore</h2>
                    <ul className="nav-list">
                        <li><a href="#"><img src="/img/nav-icons/flash.png" alt="New In"/>New In</a></li>
                        <li><a href="#"><img src="/img/nav-icons/clothing.png" alt="Clothing"/>Clothing</a></li>
                        <li><a href="#"><img src="/img/nav-icons/shoes.png" alt="Shoes"/>Shoes</a></li>
                        <li><a href="#"><img src="/img/nav-icons/case.png" alt="Accessories"/>Accessories</a></li>
                        <li><a href="#"><img src="/img/nav-icons/acrobat.png" alt="Activewear"/>Activewear</a></li>
                        <li><a href="#"><img src="/img/nav-icons/gift.png" alt="Gifts & Living"/>Gifts & Living</a></li>
                        <li><a href="#"><img src="/img/nav-icons/diamond.png" alt="Inspiration"/>Inspiration</a></li>
                    </ul>

                </nav>

                <div className="sidebar-help">
                    <a className="help" href="#">
                        <img className="help-icon" src="/img/icons/help.svg" alt="help"/>
                        Help Center
                    </a>
                </div>
            </div>

            <main className="main">
                <header className="header">

                    {/*Header search*/}
                    <div className="header-search">
                        <form className="search">
                            <label className="search-label">
                                <img className="search-icon" src="/img/icons/search.svg" alt="Search"/>
                                <input className="search-input" type="text" placeholder="Search store"/>
                            </label>
                        </form>
                    </div>

                    {/*Header links*/}
                    <div className="header-links">
                        <nav className="nav-header">
                            <ul className="nav-header-list">
                                <li className="nav-header-link-text active"><a href="#">products</a></li>
                                <li className="nav-header-link-text"><a href="#">story</a></li>
                                <li className="nav-header-link-text"><a href="#">manufacturing</a></li>
                                <li className="nav-header-link-text"><a href="#">packaging</a></li>
                                <li className="nav-header-link-icon">
                                    <a href="#"><img src="/img/icons/basket.svg" alt="Cart"/></a>
                                </li>
                                <li className="nav-header-link-icon">
                                    <a href="#"><img src="/img/icons/person.svg" alt="Person"/></a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </header>

                <div className="cards-wrapper">
                    <div className="cards-wrapper-row">

                        <div className="cards-wrapper-col col-vertical">

                            <a href="#" className="card card-horizontal card-sale"
                               style={{backgroundImage: `url(${vector1})`}}>
                                <span>GET UP TO 50% OFF</span>
                            </a>

                            <a href="#" className="card card-horizontal card-sale"
                               style={{backgroundImage: `url(${vector2})`}}>
                                <span className="visually-hidden">Summer sale</span>
                            </a>

                        </div>

                        <div className="cards-wrapper-col col-horizontal">

                            <div className="card card-vertical card-product">
                                <button className="card-product-fav-btn">
                                    <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.92982 2.14886C8.70453 2.38101 8.35293 2.74332 8.35293 2.74332M8.92982 2.14886C10.1149 0.776745 12.3283 0.607322 13.7084 1.78309C15.324 3.16207 15.4109 5.64407 13.9608 7.14055L8.29659 12.9892C8.12714 13.1641 7.85815 13.1641 7.68871 12.9892L2.0246 7.14065C0.577287 5.64416 0.664165 3.1622 2.27968 1.78321C3.65989 0.607141 5.75089 0.797056 7.05863 2.14909L7.63529 2.74332L7.99411 3.11306L8.35293 2.74332M8.92982 2.14886L8.35293 2.74332"/>
                                    </svg>
                                </button>
                                <a href="#" className="card-product-link">
                                    <img className="card-product-img" src={card1} alt="Product"/>
                                </a>
                            </div>

                            <div className="card card-vertical card-product">
                                <button className="card-product-fav-btn">
                                    <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.92982 2.14886C8.70453 2.38101 8.35293 2.74332 8.35293 2.74332M8.92982 2.14886C10.1149 0.776745 12.3283 0.607322 13.7084 1.78309C15.324 3.16207 15.4109 5.64407 13.9608 7.14055L8.29659 12.9892C8.12714 13.1641 7.85815 13.1641 7.68871 12.9892L2.0246 7.14065C0.577287 5.64416 0.664165 3.1622 2.27968 1.78321C3.65989 0.607141 5.75089 0.797056 7.05863 2.14909L7.63529 2.74332L7.99411 3.11306L8.35293 2.74332M8.92982 2.14886L8.35293 2.74332"/>
                                    </svg>
                                </button>
                                <a href="#" className="card-product-link">
                                    <img className="card-product-img" src={card2} alt="Product"/>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="cards-wrapper-row">
                        <div className="cards-wrapper-col col-horizontal">

                            <div className="card card-vertical card-product">
                                <button className="card-product-fav-btn">
                                    <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.92982 2.14886C8.70453 2.38101 8.35293 2.74332 8.35293 2.74332M8.92982 2.14886C10.1149 0.776745 12.3283 0.607322 13.7084 1.78309C15.324 3.16207 15.4109 5.64407 13.9608 7.14055L8.29659 12.9892C8.12714 13.1641 7.85815 13.1641 7.68871 12.9892L2.0246 7.14065C0.577287 5.64416 0.664165 3.1622 2.27968 1.78321C3.65989 0.607141 5.75089 0.797056 7.05863 2.14909L7.63529 2.74332L7.99411 3.11306L8.35293 2.74332M8.92982 2.14886L8.35293 2.74332"/>
                                    </svg>
                                </button>
                                <a href="#" className="card-product-link">
                                    <img className="card-product-img" src={card3} alt="Product"/>
                                </a>
                            </div>

                            <div className="card card-vertical card-product">
                                <button className="card-product-fav-btn">
                                    <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.92982 2.14886C8.70453 2.38101 8.35293 2.74332 8.35293 2.74332M8.92982 2.14886C10.1149 0.776745 12.3283 0.607322 13.7084 1.78309C15.324 3.16207 15.4109 5.64407 13.9608 7.14055L8.29659 12.9892C8.12714 13.1641 7.85815 13.1641 7.68871 12.9892L2.0246 7.14065C0.577287 5.64416 0.664165 3.1622 2.27968 1.78321C3.65989 0.607141 5.75089 0.797056 7.05863 2.14909L7.63529 2.74332L7.99411 3.11306L8.35293 2.74332M8.92982 2.14886L8.35293 2.74332"/>
                                    </svg>
                                </button>
                                <a href="#" className="card-product-link">
                                    <img className="card-product-img" src={card4} alt="Product"/>
                                </a>
                            </div>

                        </div>
                        <div className="cards-wrapper-col col-vertical">

                            <a href="#" className="card card-horizontal card-section"
                               style={{backgroundImage: `url(${card5})`}}>
                                <h4 className="card-section-title">Trending & Hot</h4>
                                <p className="card-section-desc">A collection of most trending items.</p>
                            </a>

                            <a href="#" className="card card-horizontal card-section card-section-red"
                               style={{backgroundImage: `url(${card6})`}}>
                                <h4 className="card-section-title">Buy it for the first time</h4>
                                <p className="card-section-desc">New in store. Try it before anyone else.</p>
                            </a>

                        </div>
                    </div>
                </div>

            </main>

        </div>
    );
}

export default App;
