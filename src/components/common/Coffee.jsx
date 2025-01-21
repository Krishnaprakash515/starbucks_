function Coffee() {
    const test = true;

    return (
        <div className={test ? "bg-green-600" : "bg-red-500"}>
            {test ? "Online" : "Offline"}
        </div>
    )
}

export default Coffee;