import React, {useState} from 'react';
import SystemContext from './SystemContext';

const SystemState = (props)=>{

    const [currentPage, setCurrentPage] = useState(1);

    function handleNext(totalPage){

        if(currentPage === totalPage) return;
        setCurrentPage((prev)=>prev+1);
    }

    function handlePrev(){

        if(currentPage === 1) return;

        setCurrentPage((prev)=>prev-1);
    }

    function reset(){
        setCurrentPage(1);
    
    }

    return <SystemContext.Provider value={{currentPage,reset, handlePrev, handleNext,setCurrentPage}}>
        {props.children}
    </SystemContext.Provider>

}

export default SystemState;