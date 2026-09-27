const GetBooks = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    console.log(data);

    return (
        <div>
            <h1>Fitlog Data</h1>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default GetBooks;