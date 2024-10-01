const Feedback = ({ onGood, onNeutral, onBad }) => {
    return (
        <div>
            <p>Good: {onGood}</p>
            <p>Neutral: {onNeutral}</p>
            <p>Bad: {onBad}</p>
        </div>
    )
}

export default Feedback