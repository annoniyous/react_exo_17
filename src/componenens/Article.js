import React from 'react'

 function Article(props) {
    return (
        <div>
            <input type="button" value="4" onClick={()=> props.incrementation(4)}/>
            
        </div>
    )
}
export default Article