import React, { Component } from 'react';
// everything that isn't commented out, is the bare bones of a component. 

// up top is your imports, typically dependancies, other components, style sheets, variables, props, etc, it goes on. 
// just like any other import, you have to import it, to use it, if it's not in this location. 


class ComponentExample extends Component { // the ComponentExample will be the name of the file, and it will match the export in line 14. 
                                            // you want to export your component so it can be used elsewhere. 

/* 
- in this space you write your functions, there isn't a specific format. 
just remember to name them something meaningful and not just something like tacos. 
- write in ES6 format: 
functionName = () => {
    ---- write your code in these code blocks
}
*/


    render() {

        /*  
        - in this space, you can do various things, but I typically put my global variabeles in here, to later refer to in my return found below. 
        i.e) 
        - we can create a variable called name-box  
        - I want it to be <div>
        - and I want to have my name in there
        - how do I write it? attempt it below after this comment box. 
        */

        


        return (
            <div>

                {/* this is where you utilize JSON that communicate with functions and variables found above. 
                JSON is essentially javascript and html put together, like the name-box variable we made above.*/}

                {/* a comopnent typically always returns everything wrapped in a div. 
                let's use the name-box variable found above
                utilize event handlders such as onClick and onChange 
                */}


                
            </div>
        );
    }
}

export default ComponentExample;