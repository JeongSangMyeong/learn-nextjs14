import { url } from "inspector";
import { resolve } from "path";

export const metadata = {
    title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    console.log("im fetching!");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(URL);
    const json = await response.json();

    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            {JSON.stringify(movies)}
        </div>
    );
}