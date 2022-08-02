import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
function Nav() {
	const position = ['Main','Top','Floor'];
	function ScrollTop() {
		return window.scrollTo(0,0)
	}
	function ScrollFloor() {
		return window.scrollTo(0,document.body.scrollHeight)
	}
	function Moving({root}) {
		return (
		root === "Main" ? <Link to={"/"}>{root}</Link> : <button onClick={root === "Top" ? ScrollTop : ScrollFloor}>{root}</button>
		)
	}
	Moving.prototype = {
		root: PropTypes.string.isRequired,
	}
	return (
	<div>
		<nav className={styles.position_nav}>
			<ul className={styles.position}>
				{position.map((root,index) => <li className={styles.positions} key={index}><Moving root={root}/></li>)}
			</ul>
		</nav>
	</div>
	);
}
export default Nav;