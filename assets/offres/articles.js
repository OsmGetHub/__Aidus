import React, {useEffect, useState, useMemo} from 'react'
import SG from '../data/societe_generale.png'
import Data from '../data/data.json'
import axios from "axios";


function Articles ({filtred, records}){

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const articles = records.filter((article) => {
        if (filtred == '') return true
        return article.title.toLowerCase().includes(filtred.toLowerCase())
        || article.nomEntreprise.toLowerCase().includes(filtred.toLowerCase())

    })
    const npage = Math.ceil(articles.length/recordsPerPage);
    const numbers = [...Array(npage+1).keys()].slice(1);


        return(
            <div style={MAIN} >
                {
                    articles.map(
                        (e,i)=>(
                        <div style={MAIN_A}  key={e.narticle}>
                            <img src={LOGO}  alt=""/>
                            <div>
                            <h3><a href="content">{e.title}</a></h3>
                            <p>{e.dateAjout} | <a href="content">{e.nomEntreprise}</a></p>
                            <p>{e.desciption}</p>
                            </div>
                        </div>
                        )
                    )
                }
                <div style={{ justifySelf: "flex-end" }}>
                    <ul className="pagination">
                        <li >
                            <a href="content"
                               onClick={
                                   (e)=>(
                                       e.preventDefault(),
                                           prPage()
                                   )
                               }
                            >Precedant</a>
                        </li>
                        <li>
                            <a href="content" onClick={
                                (e)=>{
                                    e.preventDefault()
                                    startPage()
                                }
                            }>{"<<"}</a>
                        </li>
                        {
                            numbers.map(
                                (n,i) =>(
                                    <li
                                        key={i}
                                    >
                                        <a href="content" className={`${currentPage === n ? 'active' : ''}`}
                                           onClick={
                                               (e)=>(
                                                   e.preventDefault(),
                                                       changeCPage(n)
                                               )
                                           }
                                        >{n}</a>
                                    </li>
                                )
                            )
                        }
                        <li>
                            <a href="content" onClick={
                                (e)=>{
                                    e.preventDefault()
                                    endPage()
                                }
                            }>{">>"}</a>
                        </li>
                        <li >
                            <a href="content"
                               onClick={
                                   (e)=>(
                                       e.preventDefault(),
                                           nePage()
                                   )
                               }
                            >Suivante</a>
                        </li>
                    </ul>
                </div>
            </div>
        )


    function prPage(){

        if((currentPage !== firstIndex )&& currentPage!== 1) {
            setCurrentPage(currentPage - 1)
        }

    }
    function endPage(){
            setCurrentPage(numbers.length)
    }
    function startPage(){
            setCurrentPage(1)
    }
    function changeCPage(id){
        setCurrentPage(id)
    }
    function nePage(){
        if((currentPage !== lastIndex) && currentPage !== numbers.length) {
            setCurrentPage(currentPage + 1)
        }
    }

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
    paddingTop:"30px"
}

const MAIN_A = {
    marigin: "25px 25px 0px",
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