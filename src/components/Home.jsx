import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import Testimonials from './Testimonials';
import BrandLogo from './BrandLogo';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Store/ActionCreators/ProductActionCreators';

export default function Home() {
    let [products, setProducts] = useState([])
    let dispatch = useDispatch()
    let allProductStateData = useSelector(state => state.ProductStateData)
    function getAPIData() {
        dispatch(getProduct())
        if (allProductStateData.length){
            setProducts(allProductStateData.slice(1).reverse().slice(0,6))
        }
    }
    useEffect(() => {
        getAPIData()
    },[allProductStateData.length])
    return (
        <>
            {/* <!-- home page slider --> */}
            <OwlCarousel className='owl-theme' loop margin={1} items={1} nav>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-1" style={{ height: "600px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Male Fashion</p>
                                        <h1>Get more than 90% discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/male/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-2" style={{ height: "600px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Female Fashion</p>
                                        <h1>Get more than 90% discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/female/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-3" style={{ height: "600px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Kids Fashion</p>
                                        <h1>Get more than 90% discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/kids/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-4" style={{ height: "600px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Male Fashion</p>
                                        <h1>Get 90% discount on male Fashion</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-5" style={{ height: "600px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Male Fashion</p>
                                        <h1>Get 90% discount on male Fashion</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-6" style={{ height: "600px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Male Fashion</p>
                                        <h1>Get 90% discount on male Fashion</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-7" style={{ height: "600px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Male Fashion</p>
                                        <h1>Get 90% discount on male Fashion</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-8" style={{ height: "600px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Male Fashion</p>
                                        <h1>Get 90% discount on male Fashion</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-9" style={{ height: "600px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Male Fashion</p>
                                        <h1>Get 90% discount on male Fashion</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-10" style={{ height: "600px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Male Fashion</p>
                                        <h1>Get 90% discount on male Fashion</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
            {/* <!-- end home page slider --> */}

            {/* <!-- features list section --> */}
            <div className="list-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <div className="content">
                                    <h3>Free Shipping</h3>
                                    <p>When order over $75</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-phone-volume"></i>
                                </div>
                                <div className="content">
                                    <h3>24/7 Support</h3>
                                    <p>Get support all day</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="list-box d-flex justify-content-start align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-sync"></i>
                                </div>
                                <div className="content">
                                    <h3>Refund</h3>
                                    <p>Get refund within 3 days!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- end features list section --> */}

            {/* <!-- product section --> */}
            <div className="product-section my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Latest</span> Products</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            products.map((item, index) => {
                                return <div key={index} className="col-lg-4 col-md-6 text-center">
                                    <div className="single-product-item">
                                        <div className="product-image">
                                            <Link to={"/single-product/"+item.id}><img src={`/assets/images/${item.pic1}`} height="180px" alt="" /></Link>
                                        </div>
                                        <h3>{item.name}</h3>
                                        <p className="product-price"><del className='text-danger'>&#8377;{item.baseprice}</del> &#8377;{item.finalprice} </p>
                                        <p className="product-price text-success">{item.discount}% Off </p>
                                        <Link to={"/single-product/"+item.id} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="w-25 m-auto">
                        <Link to="/shop/All/All/All" className="cart-btn text-center w-100">Load More</Link>
                    </div>
                </div>
            </div>
            {/* <!-- end product section --> */}
            {/* <!-- shop banner --> */}
            <section className="shop-banner">
                <div className="container">
                    <h3 className='text-success'>Sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
                    <div className="sale-percent"><span className='text-light'>Sale! <br /> Upto</span>90% <span className='text-light'>Discount</span></div>
                    <Link to="/shop/All/All/All" className="cart-btn btn-lg">Shop Now</Link>
                </div>
            </section>
            {/* <!-- end shop banner --> */}

            <Testimonials />

            <BrandLogo />
        </>
    )
}
