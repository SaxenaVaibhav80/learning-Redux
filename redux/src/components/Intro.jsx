
function Intro()
{
    return(
        <>
          <h1>why redux ?</h1>
          <p>Redux allows you to manage your application's state in a centralized location, making it easier to understand the overall state of your app. Instead of passing state and props through multiple layers of components, Redux provides a single source of truth.</p>
         
          <h1>But it can be done by useContext hooks in react</h1>
          <p>many of the benefits of Redux can be achieved using React's built-in useContext and useReducer hooks</p>
          <p>For smaller applications or simple data sharing, useContext is often sufficient. However, in large-scale applications with complex state interactions, Redux's structured approach can help maintain scalability. Redux provides more structure for managing state, while useContext with nested providers can become complex as the application grows.</p>
         <h3>NOTE-- hooks come after redux</h3>
        </>
    )
}

export default Intro