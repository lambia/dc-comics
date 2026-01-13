import style from "./ComicCard.module.css";

const ComicCard = (props) => {

	const image = props.image;
	const title = props.title;

	return <div className={style.card}>
		<img src={image} />
		<h3>{title}</h3>
	</div>

}

export default ComicCard;