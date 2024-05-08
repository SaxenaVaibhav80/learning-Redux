
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

         <h2>NOTE---redux and react are independent , but we can use redux liberary with react</h2>
        </>
    )
}


// Note--->

// useContext Hook
// Purpose: The useContext hook is used to access values from a React context. Context allows you to share state or data across components without having to pass props through every level of the component tree.

// Common Use Cases:
// Parent-to-Child State Sharing: Instead of "prop drilling" (passing props through multiple levels), you can create a context and have any component within the provider access the shared state.
// Cross-Component State Sharing: Components at the same level, or unrelated components, can also access the same context, allowing for a more flexible state-sharing mechanism.

// Examples:
// Providing a theme to an entire application.
// Sharing user authentication status across different components.
// Direction of Data Flow: While context can be used to share data in many directions (parent-to-child, child-to-parent, cross-component), the typical pattern is parent-to-child. The context provider defines the shared data, and child components access it using useContext.


// useReducer Hook
// Purpose: The useReducer hook is a state management tool used to handle complex state logic in a component, especially when state transitions are driven by specific actions.

// Common Use Cases:
// Managing state with complex transitions or when different actions lead to different outcomes.
// Centralizing state logic for maintainability.

// Examples:
// A form with multiple fields and validation rules.
// A list of items with different sorting/filtering requirements.
// Direction of Data Flow: The useReducer hook is generally used within a single component or a closely related set of components. It doesn't inherently facilitate parent-to-child or child-to-parent communication.

export default Intro