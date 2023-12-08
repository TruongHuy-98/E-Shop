import { Link } from "react-router-dom";


function Header(props) {

  function Login() {
    const loginSuccess = localStorage.getItem('loginSuccess')

    if(JSON.parse(loginSuccess)) {  
      return (
        <li><Link to="/login" onClick={logOut}><i className="fa fa-unlock" /> Logout</Link></li>
      )
    } else {
      return (
        <li><Link to="/login"><i className="fa fa-lock" /> Login</Link></li>
      )
    }
  }

  function logOut() {
    localStorage.removeItem('loginSuccess');
    navigator('/login');
  }

  function Account() {
    const loginSuccess = JSON.parse(localStorage.getItem('loginSuccess'));
    if (loginSuccess) {
      return (
        <li><Link to="/account"><i className="fa fa-user" /> Account</Link></li>
      )
    }
  }

    return (
    <header id="header">{/*header*/}
        <div className="header_top">{/*header_top*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="contactinfo">
                  <ul className="nav nav-pills">
                    <li><Link to="#"><i className="fa fa-phone" /> +84 70 529 4532</Link></li>
                    <li><Link to="#"><i className="fa fa-envelope" /> huynguyentruong98@gmail.com</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="social-icons pull-right">
                  <ul className="nav navbar-nav">
                    <li><Link to="#"><i className="fa fa-facebook" /></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter" /></Link></li>
                    <li><Link to="#"><i className="fa fa-linkedin" /></Link></li>
                    <li><Link to="#"><i className="fa fa-dribbble" /></Link></li>
                    <li><Link to="#"><i className="fa fa-google-plus" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>{/*/header_top*/}
        <div className="header-middle">{/*header-middle*/}
          <div className="container">
            <div className="row">
              <div className="col-md-4 clearfix">
                <div className="logo pull-left">
                  <Link to="http://localhost:3000/"><img src="/images/home/logo.png" alt="" /></Link>
                </div>
                <div className="btn-group pull-right clearfix">
                  <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                      USA
                      <span className="caret" />
                    </button>
                    <ul className="dropdown-menu">
                      <li><a href>Canada</a></li>
                      <li><a href>UK</a></li>
                    </ul>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                      DOLLAR
                      <span className="caret" />
                    </button>
                    <ul className="dropdown-menu">
                      <li><a href>Canadian Dollar</a></li>
                      <li><a href>Pound</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-8 clearfix">
                <div className="shop-menu clearfix pull-right">
                  <ul className="nav navbar-nav">
                    {Account()}
                    <li><Link to="/wishlist"><i className="fa fa-star" /> Wishlist</Link></li>
                    <li><Link to="/checkout"><i className="fa fa-crosshairs" /> Checkout</Link></li>
                    <li><Link to="/cart"><i className="fa fa-shopping-cart" /> Cart</Link></li>
                    {Login()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>{/*/header-middle*/}
        <div className="header-bottom">{/*header-bottom*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li><Link to="http://localhost:3000/" className="active">Home</Link></li>
                    <li className="dropdown"><Link to="/shop">Shop<i className="fa fa-angle-down" /></Link>
                      <ul role="menu" className="sub-menu">
                        <li><Link to="/shop">Products</Link></li>
                        <li><Link to="/product-details">Product Details</Link></li> 
                        <li><Link to="/checkout">Checkout</Link></li> 
                        <li><Link to="/cart">Cart</Link></li> 
                        <li><Link href="/login">Login</Link></li> 
                      </ul>
                    </li> 
                    <li className="dropdown"><Link to="/blog">Blog<i className="fa fa-angle-down" /></Link>
                      <ul role="menu" className="sub-menu">
                        <li><Link to="/blog/list">Blog List</Link></li>
                        <li><Link to="/blog-single">Blog Single</Link></li>
                      </ul>
                    </li> 
                    <li><Link to="/404">404</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>{/*/header-bottom*/}
      </header>
    );
  }
  
  export default Header;
  