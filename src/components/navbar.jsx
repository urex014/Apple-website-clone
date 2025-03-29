import React from 'react'
import { appleImg } from '../utils'
import {searchImg} from '../utils'

export default function Navbar(){
    return(
        <header>
            <nav>
                <img src ={appleImg} alt='Apple' width={14} height={18} />

                <div>
                    {['iphones', 'macbooks', 'Tablets'].map((nav,i)=>{
                        <div key={nav}>
                            {nav}
                        </div>
                    })}
                </div>

                <div>
                    <img src={searchImg} />
                </div>
            </nav>
        </header>
    )
}