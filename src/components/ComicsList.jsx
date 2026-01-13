import comicsArray from "../data/comics";

const ComicsList = () => {

	return <>
		<h2>Current Series</h2>

		<div id="comics-list-container">
			{comicsArray.map(fumetto => {
				return <div className="comics-card" key={fumetto.id}>
					<h3>{fumetto.title}</h3>
					<img src={fumetto.thumb} />
				</div>
			})}
		</div>

	</>

}

export default ComicsList;