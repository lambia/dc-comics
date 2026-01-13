import comicsArray from "../data/comics";
import ComicCard from "./ComicCard";

const ComicsList = () => {

	return <>
		<h2>Current Series</h2>

		<div id="comics-list-container">
			{comicsArray.map(fumetto => {
				return <ComicCard image={fumetto.thumb} title={fumetto.title} key={fumetto.id} />

				/*
				<div className="comics-card" >
					<img src={fumetto.thumb} />
					<h3>{fumetto.title}</h3>
				</div>
				*/
			})}
		</div>

	</>

}

export default ComicsList;