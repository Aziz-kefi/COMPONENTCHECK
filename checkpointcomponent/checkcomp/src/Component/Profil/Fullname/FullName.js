import React from 'react'
const Aff=()=>{
    alert("welcome to Aziz's profile")
}
export const FullName = () => {
    return (
        <div>
            <div class="card text-center">
                <div class="card-header"> My Profil </div>
                <div class="card-body">
                    <h5 class="card-title">Full name:</h5>
                    <p class="card-text">Aziz Kéfi</p>
                    <a onClick={Aff} class="btn btn-primary">know more</a>
                </div>
                
            </div>
        </div>
        
    )
}
export default FullName;