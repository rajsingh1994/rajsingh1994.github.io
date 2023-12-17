import React, { useEffect, useState } from 'react'
import Testimonials from './Testimonials';
import BrandLogo from './BrandLogo';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Store/ActionCreators/ProductActionCreators';
import { getMaincategory } from '../Store/ActionCreators/MaincategoryActionCreators';
import { getSubcategory } from '../Store/ActionCreators/SubcategoryActionCreators';
import { getBrand } from '../Store/ActionCreators/BrandActionCreators';

export default function Shop() {
    let [products, setProducts] = useState([])
    let [search, setSearch] = useState("")
    let [min, setMin] = useState(0)
    let [max, setMax] = useState(1000)
    let [mc, setMc] = useState("All")
    let [sc, setSc] = useState("All")
    let [br, setBr] = useState("All")
    let [flag, setFlag] = useState(false)

    let dispatch = useDispatch()
    let params = useParams()
    let allProductStateData = useSelector(state => state.ProductStateData)
    let allMaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let allSubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let allBrandStateData = useSelector(state => state.BrandStateData)

    function getInputSearch(e) {
        setSearch(e.target.value)
    }
    function postSearch(e) {
        e.preventDefault()
        let searchTerm = search.toLowerCase()
        setProducts(allProductStateData.slice(1).reverse().filter((item)=>item.name.toLowerCase()===searchTerm || item.maincategory.toLowerCase()===searchTerm || item.subcategory.toLowerCase()===searchTerm || item.brand.toLowerCase()===searchTerm || item.color.toLowerCase()===searchTerm || item.description.toLowerCase().includes(searchTerm)))
    }
    function getPriceInput(e) {
        let {name, value} = e.target
        if(name==="min")
        setMin(value)
        else
        setMax(value)
    } 
    // function postPriceFilter(e){
    //     e.preventDefault()
    //     let p=[]
    //     if(mc==="All" && sc==="All" && br==="All")
    //     p = allProductStateData.slice(1).reverse()
    //     else if(mc!=="All" && sc==="All" && br==="All")
    //     p = allProductStateData.slice(1).reverse().filter((item)=>item.maincategory===mc)
    //     else if(mc==="All" && sc!=="All" && br==="All")
    //     p = allProductStateData.slice(1).reverse().filter((item)=>item.subcategory===sc)
    //     else if(mc==="All" && sc==="All" && br!=="All")
    //     p = allProductStateData.slice(1).reverse().filter((item)=>item.brand===br)
    //     else if(mc!=="All" && sc!=="All" && br==="All")
    //     p = allProductStateData.slice(1).reverse().filter((item)=>item.maincategory===mc && item.subcategory===sc)
    //     else if(mc!=="All" && sc==="All" && br!=="All")
    //     p = allProductStateData.slice(1).reverse().filter((item)=>item.maincategory===mc && item.brand===br)
    //     else if(mc==="All" && sc!=="All" && br!=="All")
    //     p = allProductStateData.slice(1).reverse().filter((item)=>item.subcategory===sc && item.brand===br)
    //     else
    //     p = allProductStateData.slice(1).reverse().filter((item)=>item.maincategory===mc && item.subcategory===sc && item.brand===br)

    //     setProducts(p.filter((item)=>item.finalprice>=min && item.finalprice<=max))
    // }

    function postPriceFilter(e) {
        e.preventDefault();
    
        let filteredProducts = allProductStateData.slice(1).reverse();
    
        if (mc !== "All") {
            filteredProducts = filteredProducts.filter((item) => item.maincategory === mc);
        }
    
        if (sc !== "All") {
            filteredProducts = filteredProducts.filter((item) => item.subcategory === sc);
        }
    
        if (br !== "All") {
            filteredProducts = filteredProducts.filter((item) => item.brand === br);
        }
    
        const finalFilteredProducts = filteredProducts.filter((item) => item.finalprice >= min && item.finalprice <= max);
        setProducts(finalFilteredProducts);
    }
    

    function filterProducts(mc,sc,br){
        if(mc==="All" && sc==="All" && br==="All")
        setProducts(allProductStateData.slice(1).reverse())
        else if(mc!=="All" && sc==="All" && br==="All")
        setProducts(allProductStateData.slice(1).reverse().filter((item)=>item.maincategory===mc))
        else if(mc==="All" && sc!=="All" && br==="All")
        setProducts(allProductStateData.slice(1).reverse().filter((item)=>item.subcategory===sc))
        else if(mc==="All" && sc==="All" && br!=="All")
        setProducts(allProductStateData.slice(1).reverse().filter((item)=>item.brand===br))
        else if(mc!=="All" && sc!=="All" && br==="All")
        setProducts(allProductStateData.slice(1).reverse().filter((item)=>item.maincategory===mc && item.subcategory===sc))
        else if(mc!=="All" && sc==="All" && br!=="All")
        setProducts(allProductStateData.slice(1).reverse().filter((item)=>item.maincategory===mc && item.brand===br))
        else if(mc==="All" && sc!=="All" && br!=="All")
        setProducts(allProductStateData.slice(1).reverse().filter((item)=>item.subcategory===sc && item.brand===br))
        else
        setProducts(allProductStateData.slice(1).reverse().filter((item)=>item.maincategory===mc && item.subcategory===sc && item.brand===br))
        
    }
    function selectCategory(mc,sc,br){
        setMc(mc)
        setSc(sc)
        setBr(br)
        filterProducts(mc,sc,br)
    }
    function sortFilter(e){
        let value = e.target.value
        if(value==="1")
        setProducts(products.sort((x,y)=>y.id-x.id))
        else if(value==="2")
        setProducts(products.sort((x,y)=>x.finalprice-y.finalprice))
        else if(value==="3")
        setProducts(products.sort((x,y)=>y.finalprice-x.finalprice))
        setFlag(!flag)
    }
    function getAPIData() {
        dispatch(getProduct())
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        filterProducts(params.mc,params.sc,params.br)
    }
    useEffect(() => {
        getAPIData()
        setMc(params.mc)
        setSc(params.sc)
        setBr(params.br)
    }, [allProductStateData.length, allMaincategoryStateData.length, allSubcategoryStateData.length, allBrandStateData.length])

    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h1><Link to="/">Home</Link><i className="fa fa-arrow-right mx-2"></i>Shop</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}

            {/* <!-- products --> */}
            <div className="product-section mt-150 mb-150">
                <div className="container-fluid"> 
                    <div className="row"> 
                        <div className="col-lg-2">
                            <div className="list-group mb-3">
                                <Link to="#" className="list-group-item list-group-item-action btn-list" aria-current="true">Maincategory</Link>
                                <button onClick={()=>selectCategory("All",sc,br)} className="list-group-item list-group-item-action">All</button>
                                {
                                    allMaincategoryStateData && allMaincategoryStateData.slice(1).reverse().map((item, index) => {
                                        return <button key={index} onClick={()=>selectCategory(item.name,sc,br)} className="btn list-group-item list-group-item-action">{item.name}</button>
                                    })
                                }
                            </div>
                            <div className="list-group mb-3">
                                <Link to="#" className="list-group-item list-group-item-action btn-list" aria-current="true">Subcategory</Link>
                                <button onClick={()=>selectCategory(mc,"All",br)}  className="list-group-item list-group-item-action">All</button>
                                {
                                    allSubcategoryStateData && allSubcategoryStateData.slice(1).reverse().map((item, index) => {
                                        return <button key={index} onClick={()=>selectCategory(mc,item.name,br)} className="btn list-group-item list-group-item-action">{item.name}</button>
                                    })
                                }
                            </div>
                            <div className="list-group mb-3">
                                <Link to="#" className="list-group-item list-group-item-action btn-list" aria-current="true">Brand</Link>
                                <button onClick={()=>selectCategory(mc,sc,"All")} className="list-group-item list-group-item-action">All</button>
                                {
                                    allBrandStateData && allBrandStateData.slice(1).reverse().map((item, index) => {
                                        return <button key={index} onClick={()=>selectCategory(mc,sc,item.name)} className="btn list-group-item list-group-item-action">{item.name}</button>
                                    })
                                }
                            </div>
                            <div className="mb-3 card py-3 px-3">
                                <form onSubmit={postPriceFilter}>
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-between">
                                            <label>min</label>
                                            <input type="number" onChange={getPriceInput} name='min' className='form-control' value={min} />
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <label>max</label>
                                            <input type="number" onChange={getPriceInput} name='max' className='form-control' value={max} />
                                        </div>
                                        <div className="mb-3">
                                            <button type='submit' className='btn btn-primary btm-sm w-100'>Apply Filter</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <select name="sortFilter" onChange={sortFilter} className='form-control text-center'>
                                    <option value="1">Newest</option>
                                    <option value="2">Price: Low to High</option>
                                    <option value="3">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="btn-group rounded w-100 mb-3">
                                <input type="search" name='search' onChange={getInputSearch} className='form-control w-75' value={search} placeholder='Enter product name/brand/color etc. to search...' />
                                <button className='btn btn-success' onClick={postSearch}>search</button>
                            </div>
                            <div className="row product-lists">
                                {
                                    products.map((item, index) => {
                                        return <div key={index} className="col-lg-4 col-sm-6 col-12 text-center">
                                            <div className="single-product-item">
                                                <div className="product-image">
                                                    <Link to={`/single-product/${item.id}`}><img src={`/assets/images/${item.pic1}`} height="250px" alt="" /></Link>
                                                </div>
                                                <h3 style={{ height: "20px" }}>{item.name}</h3>
                                                <p className="product-price"><del className='text-danger'>&#8377;{item.baseprice}</del> &#8377;{item.finalprice} </p>
                                                <p className="product-price text-success">{item.discount}% Off </p>
                                                <Link to={"/single-product/" + item.id} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>

                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="pagination-wrap">
                                        <ul>
                                            <li><Link to="#">Prev</Link></li>
                                            <li><Link to="#"  className="active">1</Link></li>
                                            <li><Link to="#">2</Link></li>
                                            <li><Link to="#">3</Link></li>
                                            <li><Link to="#">Next</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- end products --> */}

            <Testimonials />
            <BrandLogo />
        </>
    )
}
