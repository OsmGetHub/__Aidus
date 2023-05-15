import React from 'react'

function Articles ({articles, currentPage, setCurrentPage, maxPage}) {
    return (
        <div style={MAIN}>
            {
                (articles.status == 'success') ?
                    articles.data['hydra:member'].map(
                        (e, i) => (
                        <div style={MAIN_A} key={e.id}>
                        <img src={e.img} alt=""/>
                        <div>
                        <h3><a href="content">{e.titre}</a></h3>
                        <p>{e.date_ajout} | <a href="content">Entreprise</a></p>
                        <p>{e.description.slice(0, 120)}...</p>
                        </div>
                        </div>
                    )
                ) : <p style={{
                        // margin : "auto",
                        fontWeight : "bold",
                        fontSize : "1.2em"

                    }}>{articles.status}</p>
            }
            <div>
                <ul className="pagination">
                    <li>
                        <a href="" onClick={(e)=>{
                            e.preventDefault();
                            (currentPage !== 1) ? setCurrentPage(currentPage - 1) : ''
                        }
                        }>Precedante</a>
                    </li>
                    <li>
                        <a href="" onClick={(e)=>{
                            e.preventDefault()
                            setCurrentPage(1)
                        }
                        } >{"<<"}</a>
                    </li>
                    <li ><a onClick={(e)=>e.preventDefault()} href="">...</a></li>
                    <li>
                    </li>
                    <li>
                        <a href="" style={{
                            backgroundColor: "#12549B",
                            color: "white"
                        }}>{currentPage}</a>
                    </li>
                    <li><a href="">...</a></li>
                    <li>
                        <a onClick={(e)=> {
                            e.preventDefault()
                            setCurrentPage(maxPage)
                        }} href="">{">>"}</a>
                    </li>
                    <li>
                        <a href="" onClick={(e)=>{
                            e.preventDefault();
                            (currentPage < maxPage ) ? setCurrentPage(currentPage + 1) : ''
                        }
                        }>Suivante</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Articles;

//Styles Articles

const MAIN = {
    width: "100%",
    height: "100%",
    paddingLeft: "50px",
    fontFamily: "Arial",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop:"30px",
}

const MAIN_A = {
    display: "flex",
    padding: "20px",
    border: "2px solid #707070",
    borderRadius: "20px",
    backgroundColor: "white",
    margin: "20px 50px 0px 0px",
    boxShadow: "5px 5px 5px rgba(0,0,0,0.2)"
}

const LOGO ={
    width: "15%",
    borderRadius: "25px",
    border: "1px solid #707070",
    marginRight: "20px",
}