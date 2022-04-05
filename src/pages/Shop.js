import React from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <React.Fragment>
      <div className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="user-menu">
                <ul>
                  <li>
                    <Link to="/">
                      <i className="fa fa-user"></i> Tài khoản của tôi
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-user"></i> Danh sách yêu thích
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i className="fa fa-user"></i> Giỏ hàng
                    </Link>
                  </li>
                  <li>
                    <Link to="/checkout">
                      <i className="fa fa-user"></i> Thanh toán
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-user"></i> Đăng nhập
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-md-4">
                    <div className="header-right">
                        <ul className="list-unstyled list-inline">
                            <li className="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">currency :</span><span className="value">USD </span><b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">USD</a></li>
                                    <li><a href="#">INR</a></li>
                                    <li><a href="#">GBP</a></li>
                                </ul>
                            </li>

                            <li className="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">language :</span><span className="value">English </span><b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">German</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div> */}
          </div>
        </div>
      </div>

      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo">
                <h1>
                  <a href="./">
                    <img src="assets/img/logo.png" />
                  </a>
                </h1>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="shopping-item">
                <a href="cart.html">
                  Cart - <span className="cart-amunt">$100</span>{" "}
                  <i className="fa fa-shopping-cart"></i>{" "}
                  <span className="product-count">5</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/"> Trang chủ </Link>
                </li>
                <li>
                  <Link to="/shop"> Cửa hàng </Link>
                </li>
                <li>
                  <Link to="/singleproduct"> Chi tiết sản phẩm </Link>
                </li>
                <li>
                  <Link to="/cart"> Giỏ hàng </Link>
                </li>
                <li>
                  <Link to="/checkout"> Thanh toán </Link>
                </li>
                <li>
                  <Link to="/category"> Thể loại </Link>
                </li>
                <li>
                  <Link to="/other"> Khác </Link>
                </li>
                <li>
                  <Link to="/contact"> Liên hệ </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>Shop</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-2.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-3.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-4.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-2.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-3.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-4.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-2.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-1.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-3.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="assets/img/product-4.jpg" alt="" />
                </div>
                <h2>
                  <a href="">Apple new mac book 2015 March :P</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>$899.00</ins> <del>$999.00</del>
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="product-pagination text-center">
                <nav>
                  <ul className="pagination">
                    <li>
                      <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-about-us">
                <h2>
                  u<span>Stora</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis sunt id doloribus vero quam laborum quas alias
                  dolores blanditiis iusto consequatur, modi aliquid eveniet
                  eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit,
                  debitis, quisquam. Laborum commodi veritatis magni at?
                </p>
                <div className="footer-social">
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fa fa-youtube"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-menu">
                <h2 className="footer-wid-title">User Navigation </h2>
                <ul>
                  <li>
                    <a href="">My account</a>
                  </li>
                  <li>
                    <a href="">Order history</a>
                  </li>
                  <li>
                    <a href="">Wishlist</a>
                  </li>
                  <li>
                    <a href="">Vendor contact</a>
                  </li>
                  <li>
                    <a href="">Front page</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-menu">
                <h2 className="footer-wid-title">Categories</h2>
                <ul>
                  <li>
                    <a href="">Mobile Phone</a>
                  </li>
                  <li>
                    <a href="">Home accesseries</a>
                  </li>
                  <li>
                    <a href="">LED TV</a>
                  </li>
                  <li>
                    <a href="">Computer</a>
                  </li>
                  <li>
                    <a href="">Gadets</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-newsletter">
                <h2 className="footer-wid-title">Newsletter</h2>
                <p>
                  Sign up to our newsletter and get exclusive deals you wont
                  find anywhere else straight to your inbox!
                </p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Type your email" />
                  <input type="submit" value="Subscribe" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="copyright">
                <p>
                  &copy; 2015 uCommerce. All Rights Reserved.{" "}
                  <a href="http://www.freshdesignweb.com" target="_blank">
                    freshDesignweb.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="footer-card-icon">
                <i className="fa fa-cc-discover"></i>
                <i className="fa fa-cc-mastercard"></i>
                <i className="fa fa-cc-paypal"></i>
                <i className="fa fa-cc-visa"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
