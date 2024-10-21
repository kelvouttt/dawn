export default async function About() {
    let data = await fetch('http://localhost:3000/data');
    let names: Any[] = await data.json();
    return (
    <div className="m-8 p-10">
        <h1 className="text-5xl text-indigo-700 pb-5">
            About me
        </h1>
        <ul>
            {names.map((name: Any) => (
                <li key={[name.first_name, name.last_name]}>
                    {name.first_name} {name.last_name}</li>
            ))}
        </ul>
    </div>
    )
}