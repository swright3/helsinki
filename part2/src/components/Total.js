const Total = ({parts}) => <p>Total of {parts.reduce((prev,part) => part.exercises+prev, 0)} exercises</p>

export default Total